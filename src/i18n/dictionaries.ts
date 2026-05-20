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
    ko: () => import("./locales/ko.json").then((m) => m.default),
    ja: () => import("./locales/ja.json").then((m) => m.default),
    vi: () => import("./locales/vi.json").then((m) => m.default),
    tr: () => import("./locales/tr.json").then((m) => m.default),
    it: () => import("./locales/it.json").then((m) => m.default),
    id: () => import("./locales/id.json").then((m) => m.default),
    th: () => import("./locales/th.json").then((m) => m.default),
    sw: () => import("./locales/sw.json").then((m) => m.default),
    ha: () => import("./locales/ha.json").then((m) => m.default),
    tl: () => import("./locales/tl.json").then((m) => m.default),
    am: () => import("./locales/am.json").then((m) => m.default),
    jv: () => import("./locales/jv.json").then((m) => m.default),
    yo: () => import("./locales/yo.json").then((m) => m.default),
    bn: () => import("./locales/bn.json").then((m) => m.default),
    mr: () => import("./locales/mr.json").then((m) => m.default),
    te: () => import("./locales/te.json").then((m) => m.default),
    pa: () => import("./locales/pa.json").then((m) => m.default),
    ta: () => import("./locales/ta.json").then((m) => m.default),
    gu: () => import("./locales/gu.json").then((m) => m.default),
    kn: () => import("./locales/kn.json").then((m) => m.default),
    bho: () => import("./locales/bho.json").then((m) => m.default),
  zh: () => import("./locales/zh.json").then((module) => module.default),
  he: () => import("./locales/he.json").then((module) => module.default),
  ar: () => import("./locales/ar.json").then((module) => module.default),
  fa: () => import("./locales/fa.json").then((module) => module.default),
  hi: () => import("./locales/hi.json").then((module) => module.default),
  ur: () => import("./locales/ur.json").then((module) => module.default),
};

function mergeWithFallback<T>(fallback: T, target: Partial<T>): T {
  if (Array.isArray(fallback) || Array.isArray(target)) {
    return (target ?? fallback) as T;
  }

  if (
    typeof fallback === "object" &&
    fallback !== null &&
    typeof target === "object" &&
    target !== null
  ) {
    const result: Record<string, unknown> = { ...(fallback as Record<string, unknown>) };

    for (const key of Object.keys(target as Record<string, unknown>)) {
      const fallbackValue = (fallback as Record<string, unknown>)[key];
      const targetValue = (target as Record<string, unknown>)[key];

      if (fallbackValue === undefined) {
        result[key] = targetValue;
      } else {
        result[key] = mergeWithFallback(fallbackValue, targetValue as never);
      }
    }

    return result as T;
  }

  return (target ?? fallback) as T;
}

export const getDictionary = async (locale: Locale) => {
  const [englishDictionary, localeDictionary] = await Promise.all([
    dictionaries.en(),
    dictionaries[locale](),
  ]);

  return mergeWithFallback(
    englishDictionary as Record<string, unknown>,
    localeDictionary as Partial<Record<string, unknown>>,
  );
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
