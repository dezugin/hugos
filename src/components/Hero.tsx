"use client";

import {
  ArrowDown,
  Github,
  Linkedin,
  Globe,
  Mail,
  Terminal,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { type Dictionary } from "@/i18n/dictionaries";

interface HeroProps {
  dict: Dictionary;
}

const getTerminalLines = (dict: Dictionary) => [
  { type: "command", text: "whoami" },
  { type: "output", text: "hugo_souza_almeida" },
  { type: "command", text: "cat role.txt" },
  {
    type: "output",
    text: dict.hero.role_output,
  },
  { type: "command", text: "cat stack.txt" },
  {
    type: "output",
    text: "frontend/ backend/ devops/ data/ cloud/ translations/",
  },
  { type: "command", text: "cat location.txt" },
  { type: "output", text: "Belo Horizonte, Brazil 🇧🇷" },
  {
    type: "command",
    text: dict.hero.translator_command,
  },
  {
    type: "output",
    text: dict.hero.translator_title,
    link: true,
  },
  {
    type: "output",
    text: dict.hero.translator_languages,
  },
];

export default function Hero({ dict }: HeroProps) {
  const [displayedLines, setDisplayedLines] = useState<number>(0);
  const terminalLines = getTerminalLines(dict);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prev) => {
        if (prev < terminalLines.length) return prev + 1;
        return prev;
      });
    }, 400);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 md:pt-0">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Terminal Window */}
        <div className="bg-gray-950 border border-green-900/50 rounded-lg shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-green-900/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-green-600/60 text-sm font-mono">
                hugo@dev ~{" "}
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm md:text-base space-y-2 min-h-[300px]">
            {terminalLines.slice(0, displayedLines).map((line, index) => (
              <div key={index} className="flex items-start">
                {line.type === "command" ? (
                  <>
                    <span className="text-green-500 mr-2">❯</span>
                    <span className="text-green-300">{line.text}</span>
                  </>
                ) : line.link ? (
                  <button
                    onClick={() => {
                      window.location.hash = "contact?subject=translation";
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-yellow-400/90 ml-4 hover:text-yellow-300 cursor-pointer transition-colors"
                  >
                    {line.text}
                  </button>
                ) : (
                  <span className="text-green-500/70 ml-4">{line.text}</span>
                )}
              </div>
            ))}
            {displayedLines >= terminalLines.length && (
              <div className="flex items-center">
                <span className="text-green-500 mr-2">❯</span>
                <span className="w-2 h-5 bg-green-400 animate-pulse" />
              </div>
            )}
          </div>
        </div>

        {/* Info Cards Below Terminal */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-gray-950/80 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-green-600 text-xs mb-1">{"// stack"}</div>
            <div className="text-green-400 font-bold">Full Stack</div>
            <div className="text-green-600/60 text-sm">
              {dict.hero.frontend_to_cloud}
            </div>
          </div>
          <div className="bg-gray-950/80 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-green-600 text-xs mb-1">
              {dict.hero.experience_comment}
            </div>
            <div className="text-green-400 font-bold">
              {dict.hero.experience_years}
            </div>
            <div className="text-green-600/60 text-sm">
              {dict.hero.in_engineering}
            </div>
          </div>
          <div className="bg-gray-950/80 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <div className="text-green-600 text-xs mb-1">
              {dict.hero.education_comment}
            </div>
            <div className="text-green-400 font-bold">CS + InfoSec</div>
            <div className="text-green-600/60 text-sm">
              {dict.hero.education_value}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="https://github.com/dezugin"
            target="_blank"
            className="p-3 bg-gray-950 border border-green-900/50 rounded-lg hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all group"
          >
            <Github className="w-5 h-5 text-green-500 group-hover:text-green-400" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hugosouzaa/"
            target="_blank"
            className="p-3 bg-gray-950 border border-green-900/50 rounded-lg hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all group"
          >
            <Linkedin className="w-5 h-5 text-green-500 group-hover:text-green-400" />
          </Link>
          <button
            onClick={() => {
              window.location.hash = "contact?subject=translation";
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="p-3 bg-gray-950 border border-yellow-900/50 rounded-lg hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all group cursor-pointer"
            title={dict.translation.title}
          >
            <Globe className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400" />
          </button>
          <Link
            href="mailto:hey@hugos.com.br"
            className="p-3 bg-gray-950 border border-green-900/50 rounded-lg hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all group"
          >
            <Mail className="w-5 h-5 text-green-500 group-hover:text-green-400" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="#about"
            className="group flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/20 hover:border-green-400 transition-all"
          >
            <Terminal className="w-4 h-4" />
            <span>explore --all</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 text-green-600/50" />
        </div>
      </div>
    </section>
  );
}
