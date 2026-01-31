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

  const titles: Record<Locale, string> = {
    en: "Hugo Souza-Almeida | Full Stack Engineer",
    "pt-BR": "Hugo Souza-Almeida | Engenheiro Full Stack",
    es: "Hugo Souza-Almeida | Ingeniero Full Stack",
    uk: "Hugo Souza-Almeida | Full Stack Інженер",
    ru: "Hugo Souza-Almeida | Full Stack Инженер",
    de: "Hugo Souza-Almeida | Full Stack Ingenieur",
    fr: "Hugo Souza-Almeida | Ingénieur Full Stack",
  };

  const descriptions: Record<Locale, string> = {
    en: "Full Stack Engineer specializing in DevOps, Data Engineering, and Web Development. Based in Belo Horizonte, Brazil.",
    "pt-BR":
      "Engenheiro Full Stack especializado em DevOps, Engenharia de Dados e Desenvolvimento Web. Baseado em Belo Horizonte, Brasil.",
    es: "Ingeniero Full Stack especializado en DevOps, Ingeniería de Datos y Desarrollo Web. Radicado en Belo Horizonte, Brasil.",
    uk: "Full Stack інженер, що спеціалізується на DevOps, інженерії даних та веб-розробці. Базується в Белу-Оризонті, Бразилія.",
    ru: "Full Stack инженер, специализирующийся на DevOps, инженерии данных и веб-разработке. Базируется в Белу-Оризонти, Бразилия.",
    de: "Full Stack Ingenieur mit Spezialisierung auf DevOps, Data Engineering und Webentwicklung. Ansässig in Belo Horizonte, Brasilien.",
    fr: "Ingénieur Full Stack spécialisé en DevOps, Ingénierie des Données et Développement Web. Basé à Belo Horizonte, Brésil.",
  };

  const openGraphLocales: Record<Locale, string> = {
    en: "en_US",
    "pt-BR": "pt_BR",
    es: "es_ES",
    uk: "uk_UA",
    ru: "ru_RU",
    de: "de_DE",
    fr: "fr_FR",
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
      locale: openGraphLocales[locale],
    },
    alternates: {
      languages: {
        en: "/en",
        "pt-BR": "/pt-BR",
        es: "/es",
        uk: "/uk",
        ru: "/ru",
        de: "/de",
        fr: "/fr",
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
