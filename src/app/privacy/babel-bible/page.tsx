import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Babel Bible Privacy Policy | Hugo Souza-Almeida",
  description:
    "Privacy policy for Babel Bible, an offline-first Bible reader that collects as little data as possible.",
  alternates: {
    canonical: "https://hugos.com.br/privacy/babel-bible",
  },
  openGraph: {
    title: "Babel Bible Privacy Policy",
    description:
      "Babel Bible is designed to collect as little personal data as possible.",
    type: "article",
    url: "https://hugos.com.br/privacy/babel-bible",
  },
};

const sections = [
  {
    title: "Summary",
    body: [
      "Babel Bible does not require an account.",
      "Babel Bible does not sell personal data.",
      "Babel Bible does not use third-party advertising.",
      "Babel Bible does not use analytics SDKs to track reading behavior.",
      "Bible reading history, saved verses, app language, selected translations, imported Bibles, display settings, and notification preferences are stored locally on your device.",
      "Optional donations are processed by Stripe. Babel Bible does not receive or store your full card number.",
    ],
  },
  {
    title: "Information stored on your device",
    paragraphs: [
      "Babel Bible stores information locally on your device so the app can work: selected Bible translations and order, selected app language, last-read verse, saved verses, reading display settings, local notification preference, and locally imported Bible files and related import metadata.",
      "This information is stored using local app storage, including the app's local SQLite database. It is not uploaded to Babel Bible servers.",
      "If you delete the app, this local information is generally deleted by your operating system. If your device backup settings include app data, your operating system or backup provider may back up this local data according to their own policies.",
    ],
  },
  {
    title: "Bible imports",
    paragraphs: [
      "If you choose to import your own Bible files, those files are processed locally by the app and stored locally on your device. Babel Bible does not upload imported Bible files to our servers.",
    ],
  },
  {
    title: "Notifications",
    paragraphs: [
      "If you enable daily verse notifications, Babel Bible schedules notifications on your device. Notification preferences and scheduled verse information are stored locally. Babel Bible does not send your saved verses, reading history, or notification choices to our servers.",
      "Your operating system provider, such as Apple or Google, may process notification-related information as part of delivering notifications according to its own privacy policy.",
    ],
  },
  {
    title: "App language and device settings",
    paragraphs: [
      "Babel Bible may read your device language or locale setting to choose a default app language and default Bible translation order. This is processed on your device and is not uploaded to Babel Bible servers.",
    ],
  },
  {
    title: "Optional donations",
    paragraphs: [
      "Donations are optional and do not unlock features.",
      "If you choose to make a donation, Babel Bible sends the minimum information needed to initialize the donation to the Babel Bible donation backend: donation amount, donation currency, and whether the donation is one-time or monthly.",
      "The donation backend uses Stripe to process payments. Stripe may collect and process payment-related information such as payment method details, billing information, transaction identifiers, fraud-prevention signals, and information required to complete or manage the payment. Babel Bible does not receive or store your full card number.",
      "For monthly donations, Stripe manages the recurring payment. You may need to manage or cancel recurring donations through Stripe, your payment method provider, or by contacting us.",
    ],
  },
  {
    title: "Backend and hosting logs",
    paragraphs: [
      "When you use the optional donation feature, requests may pass through our backend and hosting provider. Standard server or hosting logs may include technical information such as request time, request path, IP address, user agent, error logs, and payment-related identifiers returned by Stripe.",
      "We use this information only to operate, secure, debug, and maintain the donation feature. We do not use it to track your Bible reading.",
    ],
  },
  {
    title: "Camera permission",
    paragraphs: [
      "Babel Bible does not use the camera for normal Bible reading. If the app requests camera access in a future or platform-specific feature, it will only be for a user-initiated action such as scanning a QR code. Babel Bible does not collect photos or videos for advertising or analytics.",
    ],
  },
  {
    title: "Data we do not intentionally collect",
    body: [
      "Bible reading history",
      "Saved verses",
      "Imported Bible text",
      "Search or navigation history",
      "Precise location",
      "Contacts",
      "Photos or videos",
      "Advertising identifiers",
      "Analytics events about how you read",
      "Account usernames or passwords",
    ],
  },
  {
    title: "Sharing of information",
    paragraphs: [
      "We do not sell personal data.",
      "We may share limited information only with Stripe when you choose to make a donation, with backend or hosting providers as necessary to operate the donation backend, or if required by law, legal process, or to protect the rights, safety, and security of users, Babel Bible, or others.",
    ],
  },
  {
    title: "Data retention and deletion",
    paragraphs: [
      "Local app data remains on your device until you delete it, change it, clear app data, or uninstall the app.",
      "Donation-related records may be retained by Stripe and by our backend or hosting logs as needed for payment processing, accounting, fraud prevention, security, dispute handling, and legal compliance.",
      "To request deletion of donation-related information that Babel Bible controls, contact us using the contact information below. We may need to retain some information where required for legal, tax, security, or payment-dispute reasons. For payment data controlled by Stripe, you may also need to contact Stripe or manage your payment method through Stripe.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "Babel Bible is a general-audience Bible reading app. It does not require accounts and does not knowingly collect personal information from children. If you believe a child has provided personal information through the optional donation feature, contact us and we will review the request.",
    ],
  },
  {
    title: "International users",
    paragraphs: [
      "If you use the optional donation feature, information may be processed in countries where Stripe, our backend, or our hosting providers operate. These countries may have data protection laws different from those in your country.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy if Babel Bible's features or data practices change. The Last updated date at the top of this page will show when the policy was last changed.",
    ],
  },
];

export default function BabelBiblePrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-green-400/90 sm:text-base">
            Last updated: July 27, 2026
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-green-300/90 sm:text-base">
            Babel Bible is designed to collect as little personal data as
            possible. The app is an offline-first Bible reader. You do not need
            an account to use it, and the core reading features are free.
          </p>
        </header>

        <div className="space-y-7">
          {sections.map((section) => (
            <section
              key={section.title}
              className="border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7"
            >
              <h2 className="mb-4 text-xl font-semibold text-green-200">
                {section.title}
              </h2>
              {"paragraphs" in section &&
                section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mb-4 text-sm leading-7 text-green-300/90 last:mb-0 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              {"body" in section && (
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-green-300/90 sm:text-base">
                  {section.body?.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        <section className="mt-7 border border-green-900/60 bg-zinc-950/50 p-5 sm:p-7">
          <h2 className="mb-4 text-xl font-semibold text-green-200">Contact</h2>
          <p className="text-sm leading-7 text-green-300/90 sm:text-base">
            For privacy questions or deletion requests, contact{" "}
            <a
              href="mailto:hey@hugos.com.br"
              className="text-green-200 underline underline-offset-4 hover:text-green-100"
            >
              hey@hugos.com.br
            </a>
            .
          </p>
          <p className="mt-4 text-sm leading-7 text-green-300/90 sm:text-base">
            Stripe&apos;s handling of your payment information is governed by{" "}
            <a
              href="https://stripe.com/privacy"
              rel="noreferrer"
              target="_blank"
              className="text-green-200 underline underline-offset-4 hover:text-green-100"
            >
              Stripe&apos;s privacy policy
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
