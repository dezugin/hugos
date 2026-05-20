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
    zh: "Hugo Souza-Almeida | 全栈工程师",
    he: "Hugo Souza-Almeida | מהנדס Full Stack",
    ar: "Hugo Souza-Almeida | مهندس Full Stack",
    fa: "Hugo Souza-Almeida | مهندس Full Stack",
    hi: "Hugo Souza-Almeida | Full Stack इंजीनियर",
    ur: "Hugo Souza-Almeida | Full Stack انجینئر",
    ko: "Hugo Souza-Almeida | 풀스택 엔지니어",
    ja: "Hugo Souza-Almeida | フルスタックエンジニア",
    vi: "Hugo Souza-Almeida | Kỹ sư Full Stack",
    tr: "Hugo Souza-Almeida | Full Stack Mühendisi",
    it: "Hugo Souza-Almeida | Ingegnere Full Stack",
    id: "Hugo Souza-Almeida | Insinyur Full Stack",
    th: "Hugo Souza-Almeida | วิศวกรฟูลสแตก",
    sw: "Hugo Souza-Almeida | Mhandisi wa Full Stack",
    ha: "Hugo Souza-Almeida | Injiniyan Full Stack",
    tl: "Hugo Souza-Almeida | Full Stack Engineer",
    am: "Hugo Souza-Almeida | Full Stack መሐንዲስ",
    jv: "Hugo Souza-Almeida | Insinyur Full Stack",
    yo: "Hugo Souza-Almeida | Onímọ̀ Ẹrọ Full Stack",
    bn: "Hugo Souza-Almeida | ফুল স্ট্যাক ইঞ্জিনিয়ার",
    mr: "Hugo Souza-Almeida | फुल स्टॅक अभियंता",
    te: "Hugo Souza-Almeida | ఫుల్ స్టాక్ ఇంజనీర్",
    pa: "Hugo Souza-Almeida | ਫੁਲ ਸਟੈਕ ਇੰਜੀਨੀਅਰ",
    ta: "Hugo Souza-Almeida | முழு அடுக்கு பொறியாளர்",
    gu: "Hugo Souza-Almeida | ફુલ સ્ટેક ઇજનેર",
    kn: "Hugo Souza-Almeida | ಫುಲ್ ಸ್ಟಾಕ್ ಇಂಜಿನಿಯರ್",
    bho: "Hugo Souza-Almeida | फुल स्टैक इंजीनियर",
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
    zh: "全栈工程师，专注于DevOps、数据工程和Web开发。现居巴西贝洛奥里藏特。",
    he: "מהנדס Full Stack המתמחה ב-DevOps, הנדסת נתונים ופיתוח אתרים. מבוסס בבלו הוריזונטה, ברזיל.",
    ar: "مهندس Full Stack متخصص في DevOps وهندسة البيانات وتطوير الويب. مقيم في بيلو هوريزونتي، البرازيل.",
    fa: "مهندس Full Stack متخصص در DevOps، مهندسی داده و توسعه وب. مقیم در بلو هوریزونتی، برزیل.",
    hi: "Full Stack इंजीनियर DevOps, डेटा इंजीनियरिंग और वेब डेवलपमेंट में विशेषज्ञ। बेलो होरिजोंते, ब्राजील में स्थित।",
    ko: "풀스택 엔지니어로 DevOps, 데이터 엔지니어링 및 웹 개발을 전문으로 합니다. 브라질 벨로 호리존치에 거주합니다.",
    ja: "フルスタックエンジニア、DevOps、データエンジニアリング、Web開発の専門家。ブラジル・ベロオリゾンテ在住。",
    vi: "Kỹ sư Full Stack chuyên về DevOps, Kỹ thuật Dữ liệu và Phát triển Web. Sống tại Belo Horizonte, Brazil.",
    tr: "DevOps, Veri Mühendisliği ve Web Geliştirme konusunda uzmanlaşmış Full Stack Mühendisi. Belo Horizonte, Brezilya'da yaşıyor.",
    it: "Ingegnere Full Stack specializzato in DevOps, Data Engineering e Sviluppo Web. Basato a Belo Horizonte, Brasile.",
    id: "Insinyur Full Stack yang mengkhususkan diri dalam DevOps, Rekayasa Data, dan Pengembangan Web. Berbasis di Belo Horizonte, Brasil.",
    th: "วิศวกรฟูลสแตกที่เชี่ยวชาญด้าน DevOps วิศวกรรมข้อมูล และพัฒนาเว็บ อาศัยอยู่ที่เบโลโอรีซอนชี บราซิล.",
    sw: "Mhandisi wa Full Stack aliye na utaalamu wa DevOps, Uhandisi wa Data, na Maendeleo ya Wavuti. Anaishi Belo Horizonte, Brazili.",
    ha: "Injiniyan Full Stack da ya kware a DevOps, Injiniyan Bayanai, da Ci gaban Yanar Gizo. Yana zaune a Belo Horizonte, Brazil.",
    tl: "Full Stack Engineer na dalubhasa sa DevOps, Inhinyeriyang Data, at Web Development. Nakatira sa Belo Horizonte, Brazil.",
    am: "በDevOps፣ Data Engineering እና Web Development የተሟላ ልምድ ያለው Full Stack መሐንዲስ። በBelo Horizonte፣ Brazil ይኖራል።",
    jv: "Insinyur Full Stack sing ahli ing DevOps, Rekayasa Data, lan Pangembangan Web. Manggon ing Belo Horizonte, Brasil.",
    yo: "Onímọ̀ Ẹrọ Full Stack tó mọ̀ nípa DevOps, Data Engineering, àti Ìdàgbàsókè Wẹẹbu. Ó wà ní Belo Horizonte, Brazil.",
    bn: "DevOps, ডেটা ইঞ্জিনিয়ারিং এবং ওয়েব ডেভেলপমেন্টে বিশেষজ্ঞ ফুল স্ট্যাক ইঞ্জিনিয়ার। অবস্থান: বেলো হরিজন্তে, ব্রাজিল।",
    mr: "DevOps, डेटा इंजिनिअरिंग आणि वेब डेव्हलपमेंटमध्ये तज्ज्ञ फुल स्टॅक अभियंता. बेलो होरिझोंटे, ब्राझील येथे कार्यरत.",
    te: "DevOps, డేటా ఇంజినీరింగ్ మరియు వెబ్ డెవలప్‌మెంట్‌లో నైపుణ్యం కలిగిన ఫుల్ స్టాక్ ఇంజనీర్. బ్రెజిల్‌లోని బెలో హొరిజోంటేలో ఉన్నారు.",
    pa: "DevOps, ਡਾਟਾ ਇੰਜੀਨੀਅਰਿੰਗ ਅਤੇ ਵੈੱਬ ਡਿਵੈਲਪਮੈਂਟ ਵਿੱਚ ਮਾਹਰ ਫੁਲ ਸਟੈਕ ਇੰਜੀਨੀਅਰ। ਬੇਲੋ ਹੋਰਿਜ਼ੋਂਟੇ, ਬ੍ਰਾਜ਼ੀਲ ਵਿੱਚ ਆਧਾਰਿਤ।",
    ta: "DevOps, Data Engineering மற்றும் Web Development துறைகளில் நிபுணத்துவம் பெற்ற முழு அடுக்கு பொறியாளர். Belo Horizonte, Brazil-இல் வசிக்கிறார்.",
    gu: "DevOps, Data Engineering અને Web Development માં વિશેષતા ધરાવતા ફુલ સ્ટેક ઇજનેર. Belo Horizonte, Brazil માં સ્થિત.",
    kn: "DevOps, Data Engineering ಮತ್ತು Web Development ನಲ್ಲಿ ಪರಿಣತಿ ಹೊಂದಿದ ಫುಲ್ ಸ್ಟಾಕ್ ಇಂಜಿನಿಯರ್. Belo Horizonte, Brazil ನಲ್ಲಿ ನೆಲೆಸಿದ್ದಾರೆ.",
    bho: "DevOps, डेटा इंजीनियरिंग आ वेब डेवलपमेंट में माहिर फुल स्टैक इंजीनियर। बेलो होरिज़ोंटे, ब्राज़ील में आधारित।",
    ur: "Full Stack انجینئر DevOps، ڈیٹا انجینئرنگ اور ویب ڈیویلپمنٹ مین ماہر۔ بیلو ہوریزونٹی، برازیل مین مقیم۔",
  };

  const openGraphLocales: Record<Locale, string> = {
    en: "en_US",
    "pt-BR": "pt_BR",
    es: "es_ES",
    uk: "uk_UA",
    ru: "ru_RU",
    de: "de_DE",
    fr: "fr_FR",
    zh: "zh_CN",
    he: "he_IL",
    ar: "ar_SA",
    fa: "fa_IR",
    hi: "hi_IN",
    ur: "ur_PK",
    ko: "ko_KR",
    ja: "ja_JP",
    vi: "vi_VN",
    tr: "tr_TR",
    it: "it_IT",
    id: "id_ID",
    th: "th_TH",
    sw: "sw_KE",
    ha: "ha_NG",
    tl: "tl_PH",
    am: "am_ET",
    jv: "jv_ID",
    yo: "yo_NG",
    bn: "bn_BD",
    mr: "mr_IN",
    te: "te_IN",
    pa: "pa_IN",
    ta: "ta_IN",
    gu: "gu_IN",
    kn: "kn_IN",
    bho: "bho_IN",
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
        zh: "/zh",
        he: "/he",
        ar: "/ar",
        fa: "/fa",
        hi: "/hi",
        ur: "/ur",
        ja: "/ja",
        vi: "/vi",
        tr: "/tr",
        it: "/it",
        id: "/id",
        th: "/th",
        sw: "/sw",
        ha: "/ha",
        tl: "/tl",
        am: "/am",
        jv: "/jv",
        yo: "/yo",
        bn: "/bn",
        mr: "/mr",
        te: "/te",
        pa: "/pa",
        ta: "/ta",
        gu: "/gu",
        kn: "/kn",
        "bho-IN": "/bho",
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
