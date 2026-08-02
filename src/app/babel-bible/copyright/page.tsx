import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Babel Bible Copyright | Hugo Souza-Almeida",
  description:
    "Copyright and translation information for Babel Bible, including included and user-imported Bible texts.",
  alternates: {
    canonical: "https://hugos.com.br/babel-bible/copyright",
  },
  openGraph: {
    title: "Babel Bible Copyright",
    description: "Copyright and translation information for Babel Bible.",
    type: "article",
    url: "https://hugos.com.br/babel-bible/copyright",
  },
};

export default function BabelBibleCopyrightPage() {
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
            Copyright and Translation Information
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible is a Bible reading application that allows users to read
            and compare Bible texts in multiple languages.
          </p>
        </header>

        <section className="border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            Bible translations
          </h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible includes Bible translations that are believed to be
            public domain, openly licensed, or otherwise suitable for inclusion.
            Some translations may vary by country or jurisdiction.
          </p>
          <p className="mt-4 text-sm leading-7 text-green-300/90 sm:text-base">
            If you believe a translation has been included incorrectly, contact{" "}
            <a
              href="mailto:hey@hugos.com.br"
              className="text-green-200 underline underline-offset-4 hover:text-green-100"
            >
              hey@hugos.com.br
            </a>{" "}
            with the translation name, language, copyright concern, and any
            official source or documentation available.
          </p>
        </section>

        <section className="mt-7 border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            User-imported Bible files
          </h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible may allow users to import compatible Bible files locally
            on their own devices. Users are responsible for ensuring that they
            have the right to use any Bible text or file they import.
          </p>
          <p className="mt-4 text-sm leading-7 text-green-300/90 sm:text-base">
            Locally imported Bible files are not uploaded to Babel Bible servers
            by the app.
          </p>
        </section>

        <section className="mt-7 border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">
            App copyright
          </h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible app design, interface, code, branding, and original
            materials are copyright © Hugo / Hugos.com.br unless otherwise
            stated. All rights reserved.
          </p>
        </section>
      </article>
    </main>
  );
}
