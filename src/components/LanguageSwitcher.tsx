"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { locales, type Locale, localeNames, localeFlags } from "@/i18n/config";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get the path without the locale prefix
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/");
    // Remove the locale segment
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }
    return segments.join("/") || "/";
  };

  const pathWithoutLocale = getPathWithoutLocale();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 bg-terminal-bg border border-terminal-green/30 rounded-lg hover:border-terminal-green/60 transition-all text-sm"
        aria-label="Select language"
      >
        <span className="text-lg leading-none">
          {localeFlags[currentLocale]}
        </span>
        <span className="text-terminal-green/70 hidden sm:inline">
          {currentLocale.toUpperCase().split("-")[0]}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-terminal-green/50 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-terminal-bg border border-terminal-green/30 rounded-lg shadow-lg shadow-black/50 overflow-hidden z-50">
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}${pathWithoutLocale}`}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 hover:bg-terminal-green/10 transition-colors ${
                locale === currentLocale
                  ? "bg-terminal-green/20 text-terminal-green"
                  : "text-terminal-green/70"
              }`}
            >
              <span className="text-lg leading-none">
                {localeFlags[locale]}
              </span>
              <span className="text-sm">{localeNames[locale]}</span>
              {locale === currentLocale && (
                <span className="ml-auto text-terminal-green">✓</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
