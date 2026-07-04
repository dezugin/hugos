import Stripe from "stripe";

let stripe: Stripe | undefined;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
  if (!secretKey || (!secretKey.startsWith("sk_") && !secretKey.startsWith("rk_"))) {
    throw new Error("STRIPE_SECRET_KEY is not configured.");
  }

  stripe ??= new Stripe(secretKey);
  return stripe;
}

export function getDonationLimits() {
  const minimum = Number(process.env.MIN_DONATION_CENTS ?? 50);
  const maximum = Number(process.env.MAX_DONATION_CENTS ?? 99_999_999);
  if (!Number.isSafeInteger(minimum) || !Number.isSafeInteger(maximum) || minimum > maximum) {
    throw new Error("Donation amount limits are invalid.");
  }
  return { minimum, maximum };
}

export function getDonationCurrency(requestedCurrency: unknown): string {
  const defaultCurrency = (process.env.DONATION_CURRENCY ?? "usd").trim().toLowerCase();
  const allowedCurrencies = new Set(
    (process.env.DONATION_CURRENCIES ?? "usd,eur,gbp,brl,cad,aud")
      .split(",")
      .map((currency) => currency.trim().toLowerCase())
      .filter(Boolean),
  );
  const currency = typeof requestedCurrency === "string"
    ? requestedCurrency.trim().toLowerCase()
    : defaultCurrency;
  if (!/^[a-z]{3}$/.test(currency)) {
    throw new Error("DONATION_CURRENCY must be a three-letter currency code.");
  }
  if (!allowedCurrencies.has(currency)) {
    throw new Error(`Currency ${currency} is not enabled for donations.`);
  }
  return currency;
}

export function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : "Unknown error";
}
