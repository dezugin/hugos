import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Babel Bible | Multilingual Bible Reader",
  description:
    "Read Scripture side by side across languages with Babel Bible, a private offline-first Bible reader.",
  alternates: {
    canonical: "https://hugos.com.br/babel-bible",
  },
  openGraph: {
    title: "Babel Bible",
    description:
      "A multilingual Bible reader for comparing translations, saving verses, and reading Scripture offline.",
    type: "website",
    url: "https://hugos.com.br/babel-bible",
  },
};

const features = [
  "Read multiple Bible translations side by side",
  "Choose and reorder your preferred Bible versions",
  "Navigate directly by book, chapter, and verse",
  "Save meaningful verses locally on your device",
  "Resume automatically from your last read verse",
  "Receive optional Bible verse notifications",
  "Import compatible local Bible files",
  "Use the app offline after setup",
  "Use an interface available in multiple languages",
];

export default function BabelBibleMarketingPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-10 text-green-300 sm:px-8">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-green-500 underline-offset-4 hover:text-green-300 hover:underline"
        >
          ./home
        </Link>

        <header className="mb-10 border border-green-900/70 bg-zinc-950/70 p-6 shadow-[0_0_35px_rgba(34,197,94,0.08)] sm:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-green-600">
            Babel Bible
          </p>
          <h1 className="text-3xl font-semibold text-green-200 sm:text-5xl">
            Read Scripture side by side across languages.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible is a multilingual Bible reader for comparing
            translations, saving verses, receiving optional daily inspiration,
            and continuing your reading where you left off.
          </p>
        </header>

        <section className="border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            Features
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-green-300/90 sm:text-base">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mt-7 border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            Privacy-first reading
          </h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible does not require an account to read. Saved verses,
            reading position, imported Bible files, and preferences are stored
            locally on your device whenever possible.
          </p>
        </section>

        <section className="mt-7 grid gap-4 sm:grid-cols-3">
          <Link
            href="/babel-bible/support"
            className="border border-green-900/60 bg-zinc-950/50 p-5 text-green-200 underline-offset-4 hover:border-green-600 hover:underline"
          >
            Support
          </Link>
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
            Copyright
          </Link>
        </section>
      </article>
    </main>
  );
}
