import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, Locale } from "./src/i18n/config";

// Map browser language codes to supported locales
// Any Portuguese variant → pt-BR, any English → en, etc.
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
};

function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  // Parse Accept-Language header: "en-US,en;q=0.9,pt-BR;q=0.8"
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

  console.log("[i18n] Accept-Language:", acceptLanguage);
  console.log("[i18n] Parsed languages:", JSON.stringify(languages));

  // Find the first matching locale
  for (const { code } of languages) {
    // Check exact match first
    if (languageMap[code]) {
      console.log("[i18n] Matched:", code, "→", languageMap[code]);
      return languageMap[code];
    }
    // Check primary language (e.g., "en" from "en-US")
    const primaryLang = code.split("-")[0];
    if (languageMap[primaryLang]) {
      console.log(
        "[i18n] Matched primary:",
        primaryLang,
        "→",
        languageMap[primaryLang],
      );
      return languageMap[primaryLang];
    }
  }

  console.log("[i18n] No match, using default:", defaultLocale);
  return defaultLocale;
}

const LOCALE_COOKIE = "NEXT_LOCALE";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const acceptLang = request.headers.get("accept-language");

  const localePrivacyPath = locales.find((locale) =>
    pathname === `/${locale}/privacy/babel-bible`,
  );
  if (localePrivacyPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/privacy/babel-bible";
    return NextResponse.redirect(url);
  }

  // DEBUG: Force redirect to see if middleware is running
  if (pathname === "/") {
    console.log("[MIDDLEWARE] ROOT PATH - FORCING REDIRECT");
    const url = request.nextUrl.clone();
    url.pathname = "/pt-BR"; // Force pt-BR for testing
    return NextResponse.redirect(url);
  }

  // Debug log at start
  console.log("[i18n] ============ MIDDLEWARE START ============");
  console.log("[i18n] pathname:", pathname);
  console.log("[i18n] Accept-Language header:", acceptLang);

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    // Set cookie to remember user's locale choice when they navigate to a locale
    const currentLocale = locales.find(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );
    if (currentLocale) {
      const response = NextResponse.next();
      response.cookies.set(LOCALE_COOKIE, currentLocale, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
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
    pathname.startsWith("/privacy") ||
    pathname.includes(".") // files like favicon.ico
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

  // DEBUG: Log raw header
  console.log("========================================");
  console.log("[MIDDLEWARE] Accept-Language RAW:", acceptLanguage);
  console.log(
    "[MIDDLEWARE] All headers:",
    JSON.stringify(Object.fromEntries(request.headers.entries())),
  );

  const detectedLocale = getPreferredLocale(acceptLanguage);

  console.log("[MIDDLEWARE] DETECTED LOCALE:", detectedLocale);
  console.log("========================================");

  // Redirect to detected or default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${detectedLocale}${pathname}`;
  const response = NextResponse.redirect(url);

  // Add debug header (check in Network tab on mobile)
  response.headers.set("X-Detected-Locale", detectedLocale);
  response.headers.set("X-Accept-Language", acceptLanguage || "none");

  // Save the detected locale preference
  response.cookies.set(LOCALE_COOKIE, detectedLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return response;
}

export const config = {
  matcher: [
    // Match root path explicitly
    "/",
    // Match all paths except static files and internals
    "/((?!_next|api|papers|privacy).*)",
  ],
};
