import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Babel Bible Support | Hugo Souza-Almeida",
  description:
    "Support page for Babel Bible, including help with app issues, donations, privacy, and copyright.",
  alternates: {
    canonical: "https://hugos.com.br/babel-bible/support",
  },
  openGraph: {
    title: "Babel Bible Support",
    description: "Get support for Babel Bible.",
    type: "website",
    url: "https://hugos.com.br/babel-bible/support",
  },
};

export default function BabelBibleSupportPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-10 text-green-300 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/babel-bible"
          className="mb-8 inline-block text-sm text-green-500 underline-offset-4 hover:text-green-300 hover:underline"
        >
          ./babel-bible
        </Link>

        <header className="mb-10 border border-green-900/70 bg-zinc-950/70 p-6 shadow-[0_0_35px_rgba(34,197,94,0.08)] sm:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-green-600">
            Babel Bible
          </p>
          <h1 className="text-3xl font-semibold text-green-200 sm:text-5xl">
            Support
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-green-300/90 sm:text-base">
            Thank you for using Babel Bible. If you need help, contact{" "}
            <a
              href="mailto:hey@hugos.com.br"
              className="text-green-200 underline underline-offset-4 hover:text-green-100"
            >
              hey@hugos.com.br
            </a>
            .
          </p>
        </header>

        <section className="border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            What to include
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-green-300/90 sm:text-base">
            <li>Your device model</li>
            <li>Your operating system version</li>
            <li>Whether you are using iOS or Android</li>
            <li>A short description of the issue</li>
            <li>Screenshots, if useful</li>
          </ul>
        </section>

        <section className="mt-7 border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            Donations and payments
          </h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible may offer optional donations through Stripe. Donations
            are voluntary and help support development and maintenance.
          </p>
          <p className="mt-4 text-sm leading-7 text-green-300/90 sm:text-base">
            If you experience an issue with a donation, include the approximate
            date, amount, and currency of the attempted payment. Do not send
            full card numbers or sensitive payment details.
          </p>
        </section>

        <section className="mt-7 grid gap-4 sm:grid-cols-2">
          <Link
            href="/privacy/babel-bible"
            className="border border-green-900/60 bg-zinc-950/50 p-5 text-green-200 underline-offset-4 hover:border-green-600 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/babel-bible/copyright"
            className="border border-green-900/60 bg-zinc-950/50 p-5 text-green-200 underline-offset-4 hover:border-green-600 hover:underline"
          >
            Copyright Information
          </Link>
        </section>
      </article>
    </main>
  );
}
