import { NextRequest, NextResponse } from "next/server";

import { errorMessage, getStripe } from "@/lib/babelBibleStripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!webhookSecret || !signature) {
    return NextResponse.json(
      { error: "Webhook verification is not configured." },
      { status: 503 },
    );
  }

  try {
    const rawBody = Buffer.from(await request.arrayBuffer());
    const event = getStripe().webhooks.constructEvent(rawBody, signature, webhookSecret);

    switch (event.type) {
      case "payment_intent.succeeded":
      case "payment_intent.payment_failed":
      case "invoice.paid":
      case "invoice.payment_failed":
      case "customer.subscription.deleted":
        console.info(`[stripe] ${event.type}: ${event.data.object.id}`);
        break;
      default:
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[stripe] Invalid webhook signature:", errorMessage(error));
    return NextResponse.json({ error: "Invalid webhook signature." }, { status: 400 });
  }
}
