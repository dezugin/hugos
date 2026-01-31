export const locales = ["en", "pt-BR", "es", "uk", "ru", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  "pt-BR": "Português",
  es: "Español",
  uk: "Українська",
  ru: "Русский",
  de: "Deutsch",
  fr: "Français",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  "pt-BR": "🇧🇷",
  es: "🇪🇸",
  uk: "🇺🇦",
  ru: "🇷🇺",
  de: "🇩🇪",
  fr: "🇫🇷",
};
