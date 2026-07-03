import { NextRequest, NextResponse } from "next/server";

import {
  errorMessage,
  getDonationLimits,
  getStripe,
} from "@/lib/babelBibleStripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const { amount, frequency } = (body ?? {}) as {
    amount?: unknown;
    frequency?: unknown;
  };
  const { minimum, maximum } = getDonationLimits();

  if (!Number.isSafeInteger(amount) || (amount as number) < minimum || (amount as number) > maximum) {
    return NextResponse.json(
      { error: `Amount must be an integer from ${minimum} to ${maximum} cents.` },
      { status: 400 },
    );
  }
  if (frequency !== "one-time" && frequency !== "monthly") {
    return NextResponse.json(
      { error: "Frequency must be one-time or monthly." },
      { status: 400 },
    );
  }

  const donationProductId = process.env.STRIPE_DONATION_PRODUCT_ID;
  if (frequency === "monthly" && !donationProductId) {
    return NextResponse.json(
      { error: "Monthly donations are not configured on the server." },
      { status: 503 },
    );
  }

  try {
    const stripe = getStripe();
    const customer = await stripe.customers.create({
      metadata: { source: "babel-bible-donation" },
    });
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      {
        apiVersion: (process.env.STRIPE_EPHEMERAL_KEY_API_VERSION ??
          "2026-06-24.dahlia") as "2026-06-24.dahlia",
      },
    );

    let clientSecret: string | null | undefined;
    if (frequency === "one-time") {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount as number,
        currency: "usd",
        customer: customer.id,
        automatic_payment_methods: { enabled: true },
        metadata: { frequency, source: "babel-bible-donation" },
      });
      clientSecret = paymentIntent.client_secret;
    } else {
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: "usd",
              product: donationProductId as string,
              recurring: { interval: "month" },
              unit_amount: amount as number,
            },
          },
        ],
        payment_behavior: "default_incomplete",
        payment_settings: { save_default_payment_method: "on_subscription" },
        metadata: { frequency, source: "babel-bible-donation" },
        expand: ["latest_invoice.confirmation_secret"],
      });

      const invoice = subscription.latest_invoice;
      if (invoice && typeof invoice !== "string") {
        clientSecret = invoice.confirmation_secret?.client_secret;
      }
    }

    if (!clientSecret || !ephemeralKey.secret) {
      throw new Error("Stripe did not return the required client secrets.");
    }

    return NextResponse.json({
      paymentIntent: clientSecret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (error) {
    console.error("[stripe] Donation initialization failed:", errorMessage(error));
    return NextResponse.json(
      { error: "Stripe could not initialize this donation." },
      { status: 502 },
    );
  }
}
