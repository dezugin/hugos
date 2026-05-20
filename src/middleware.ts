import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, Locale } from "./i18n/config";

// Map browser language codes to supported locales
const languageMap: Record<string, Locale> = {
  // Portuguese variants
  pt: "pt-BR",
  "pt-br": "pt-BR",
  "pt-pt": "pt-BR",
  // English variants
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  "en-au": "en",
  "en-ca": "en",
  // Spanish variants
  es: "es",
  "es-es": "es",
  "es-mx": "es",
  "es-ar": "es",
  "es-co": "es",
  "es-cl": "es",
  // Ukrainian
  uk: "uk",
  "uk-ua": "uk",
  // Russian
  ru: "ru",
  "ru-ru": "ru",
  // German variants
  de: "de",
  "de-de": "de",
  "de-at": "de",
  "de-ch": "de",
  // French variants
  fr: "fr",
  "fr-fr": "fr",
  "fr-ca": "fr",
  "fr-be": "fr",
  "fr-ch": "fr",
  // Chinese variants
  zh: "zh",
  "zh-cn": "zh",
  "zh-hans": "zh",
  "zh-tw": "zh",
  "zh-hant": "zh",
  "zh-hk": "zh",
  "zh-sg": "zh",
  // Hebrew
  he: "he",
  "he-il": "he",
  // Arabic
  ar: "ar",
  "ar-sa": "ar",
  "ar-ae": "ar",
  "ar-eg": "ar",
  "ar-ma": "ar",
  "ar-dz": "ar",
  "ar-iq": "ar",
  "ar-jo": "ar",
  "ar-kw": "ar",
  "ar-lb": "ar",
  // Persian/Farsi
  fa: "fa",
  "fa-ir": "fa",
  "fa-af": "fa",
  // Hindi
  hi: "hi",
  "hi-in": "hi",
  // Urdu
  ur: "ur",
  "ur-pk": "ur",
  "ur-in": "ur",
  // Korean
  ko: "ko",
  "ko-kr": "ko",
  // Japanese
  ja: "ja",
  "ja-jp": "ja",
  // Vietnamese
  vi: "vi",
  "vi-vn": "vi",
  // Turkish
  tr: "tr",
  "tr-tr": "tr",
  // Italian
  it: "it",
  "it-it": "it",
  // Indonesian
  id: "id",
  "id-id": "id",
  // Thai
  th: "th",
  "th-th": "th",
  // Swahili
  sw: "sw",
  "sw-ke": "sw",
  "sw-tz": "sw",
  // Hausa
  ha: "ha",
  "ha-ng": "ha",
  "ha-ne": "ha",
  "ha-gh": "ha",
  // Tagalog / Filipino
  tl: "tl",
  "tl-ph": "tl",
  fil: "tl",
  "fil-ph": "tl",
  // Amharic
  am: "am",
  "am-et": "am",
  // Javanese
  jv: "jv",
  "jv-id": "jv",
  // Yoruba
  yo: "yo",
  "yo-ng": "yo",
  // Bengali
  bn: "bn",
  "bn-bd": "bn",
  "bn-in": "bn",
  // Marathi
  mr: "mr",
  "mr-in": "mr",
  // Telugu
  te: "te",
  "te-in": "te",
  // Punjabi
  pa: "pa",
  "pa-in": "pa",
  "pa-pk": "pa",
  // Tamil
  ta: "ta",
  "ta-in": "ta",
  "ta-lk": "ta",
  // Gujarati
  gu: "gu",
  "gu-in": "gu",
  // Kannada
  kn: "kn",
  "kn-in": "kn",
  // Bhojpuri
  bho: "bho",
  "bho-in": "bho",
  // Greek
  el: "el",
  "el-gr": "el",
  // Latvian
  lv: "lv",
  "lv-lv": "lv",
  // Estonian
  et: "et",
  "et-ee": "et",
  // Slovenian
  sl: "sl",
  "sl-si": "sl",
  // Armenian
  hy: "hy",
  "hy-am": "hy",
  // Georgian
  ka: "ka",
  "ka-ge": "ka",
  // Romanian
  ro: "ro",
  "ro-ro": "ro",
  "ro-md": "ro",
  // Bulgarian
  bg: "bg",
  "bg-bg": "bg",
  // Serbian
  sr: "sr",
  "sr-rs": "sr",
  "sr-latn": "sr",
  "sr-cyrl": "sr",
  // Afrikaans
  af: "af",
  "af-za": "af",
  // Croatian
  hr: "hr",
  "hr-hr": "hr",
  // Hungarian
  hu: "hu",
  "hu-hu": "hu",
  // Bosnian
  bs: "bs",
  "bs-ba": "bs",
  // Malaysian
  ms: "ms",
  "ms-my": "ms",
  "ms-sg": "ms",
};

function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";");
      const priority = qValue ? parseFloat(qValue.replace("q=", "")) : 1;
      return {
        code: code.toLowerCase().trim(),
        priority: isNaN(priority) ? 1 : priority,
      };
    })
    .sort((a, b) => b.priority - a.priority);

  for (const { code } of languages) {
    if (languageMap[code]) {
      return languageMap[code];
    }
    const primaryLang = code.split("-")[0];
    if (languageMap[primaryLang]) {
      return languageMap[primaryLang];
    }
  }

  return defaultLocale;
}

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    // Set cookie to remember user's locale choice
    const currentLocale = locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );
    if (currentLocale) {
      const response = NextResponse.next();
      response.cookies.set(LOCALE_COOKIE, currentLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
      return response;
    }
    return NextResponse.next();
  }

  // Skip for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/papers") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if user has a saved locale preference (cookie)
  const savedLocale = request.cookies.get(LOCALE_COOKIE)?.value as
    | Locale
    | undefined;
  if (savedLocale && locales.includes(savedLocale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${savedLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Detect browser language from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  const detectedLocale = getPreferredLocale(acceptLanguage);

  // Redirect to detected locale
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;
  const response = NextResponse.redirect(url);

  // Save locale preference
  response.cookies.set(LOCALE_COOKIE, detectedLocale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/", "/((?!_next|api|papers).*)"],
};
