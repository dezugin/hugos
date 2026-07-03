import Stripe from "stripe";

let stripe: Stripe | undefined;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || !secretKey.startsWith("sk_")) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }

  stripe ??= new Stripe(secretKey);
  return stripe;
}

export function getDonationLimits() {
  return {
    minimum: Number(process.env.MIN_DONATION_CENTS ?? 50),
    maximum: Number(process.env.MAX_DONATION_CENTS ?? 99_999_999),
  };
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}
