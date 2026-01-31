import { Locale } from "./config";

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  "pt-BR": () =>
    import("./locales/pt-BR.json").then((module) => module.default),
  es: () => import("./locales/es.json").then((module) => module.default),
  uk: () => import("./locales/uk.json").then((module) => module.default),
  ru: () => import("./locales/ru.json").then((module) => module.default),
  de: () => import("./locales/de.json").then((module) => module.default),
  fr: () => import("./locales/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
