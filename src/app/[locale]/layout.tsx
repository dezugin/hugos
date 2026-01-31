import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "@/i18n/config";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: "Hugo Souza-Almeida | Full Stack Engineer",
    "pt-BR": "Hugo Souza-Almeida | Engenheiro Full Stack",
  };

  const descriptions = {
    en: "Full Stack Engineer specializing in DevOps, Data Engineering, and Web Development. Based in Belo Horizonte, Brazil.",
    "pt-BR":
      "Engenheiro Full Stack especializado em DevOps, Engenharia de Dados e Desenvolvimento Web. Baseado em Belo Horizonte, Brasil.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: [
      "full stack engineer",
      "devops",
      "data engineering",
      "python",
      "azure",
      "aws",
      "react",
      "nextjs",
      "web scraping",
    ],
    authors: [{ name: "Hugo Souza-Almeida" }],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: "website",
      url: "https://hugos.com.br",
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
    },
    alternates: {
      languages: {
        en: "/en",
        "pt-BR": "/pt-BR",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth dark">
      <body
        className={`${jetbrainsMono.variable} antialiased font-mono bg-black text-green-400`}
      >
        {children}
      </body>
    </html>
  );
}
