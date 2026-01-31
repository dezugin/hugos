"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { type Locale } from "@/i18n/config";
import { type Dictionary } from "@/i18n/dictionaries";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: dict.nav.about, href: "#about" },
    { name: dict.nav.skills, href: "#skills" },
    { name: dict.nav.projects, href: "#code" },
    { name: dict.nav.research, href: "#research" },
    { name: dict.nav.reading, href: "#reading" },
    { name: dict.nav.courses, href: "#courses" },
    { name: dict.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${
        scrolled
          ? "bg-black/95 border-b border-green-900/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <Terminal className="w-5 h-5" />
            <span className="text-lg font-bold">hugo@dev:~$</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-green-500/70 hover:text-green-400 transition-colors text-sm"
              >
                <span className="text-green-700">./</span>
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher currentLocale={locale} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-green-400 hover:text-green-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border border-green-900/50 rounded-lg mt-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-green-500/70 hover:text-green-400 transition-colors text-sm"
              >
                <span className="text-green-700">$ cd </span>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
