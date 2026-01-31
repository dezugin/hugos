"use client";

import {
  MapPin,
  Building2,
  GraduationCap,
  Code2,
  Terminal,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface AboutProps {
  locale: Locale;
  dict: Dictionary;
}

export default function About({ locale, dict }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> {dict.about.command}
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ASCII Art / Terminal Profile */}
          <div className="space-y-6">
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
              <div className="text-green-600 mb-4">{`/* ${dict.about.bio_title} */`}</div>
              <pre className="text-green-400/90 overflow-x-auto whitespace-pre-wrap break-words">
                {locale === "pt-BR"
                  ? `{
  "nome": "Hugo Souza-Almeida",
  "handle": "@dezugin",
  "cargo": "Desenvolvedor Full Stack",
  "empresa": "RHI Magnesita",
  "localização": "Belo Horizonte, BR",
  "formação": {
    "graduação": "CC - PUC Minas",
    "pós_1": "SegInfo - UTFPR",
    "pós_2": "Forense - IPOG"
  },
  "interesses": [
    "Desenvolvimento Full Stack",
    "DevOps & Cloud",
    "Engenharia de Dados", 
    "Web Scraping",
    "Open Source"
  ]
}`
                  : `{
  "name": "Hugo Souza-Almeida",
  "handle": "@dezugin",
  "role": "Full Stack Developer",
  "company": "RHI Magnesita",
  "location": "Belo Horizonte, BR",
  "education": {
    "bsc": "CS - PUC Minas",
    "postgrad_1": "InfoSec - UTFPR",
    "postgrad_2": "Forensics - IPOG"
  },
  "interests": [
    "Full Stack Development",
    "DevOps & Cloud",
    "Data Engineering", 
    "Web Scraping",
    "Open Source"
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                {">"} {locale === "pt-BR" ? "Bio" : "Bio"}
              </h3>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                <span className="text-cyan-400">
                  {locale === "pt-BR"
                    ? "Desenvolvedor Full Stack"
                    : "Full Stack Developer"}
                </span>{" "}
                {locale === "pt-BR"
                  ? "com 3-5 anos de experiência construindo soluções de ponta a ponta. Atualmente na RHI Magnesita, trabalhando em toda a stack—desde interfaces frontend até sistemas backend e infraestrutura em nuvem."
                  : "with 3-5 years of experience building end-to-end solutions. Currently at RHI Magnesita, working across the entire stack—from frontend interfaces to backend systems and cloud infrastructure."}
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                {locale === "pt-BR"
                  ? "Sou bacharel em Ciência da Computação pela PUC Minas, com pós-graduação em Segurança da Informação (UTFPR) e Perícia Digital (IPOG). Meu trabalho abrange OutSystems, JavaScript, C#, Python e práticas modernas de DevOps."
                  : "I hold a BSc in Computer Science from PUC Minas, with postgraduate studies in Information Security (UTFPR) and Digital Forensics (IPOG). My work spans OutSystems, JavaScript, C#, Python, and modern DevOps practices."}
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                {locale === "pt-BR"
                  ? "Além do código, também sou "
                  : "Beyond code, I'm also a "}
                <button
                  onClick={() => {
                    window.location.hash = "contact?subject=translation";
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-yellow-400/80 hover:text-yellow-300 underline underline-offset-2 decoration-yellow-400/40 hover:decoration-yellow-300 transition-colors cursor-pointer"
                >
                  Tradutor Juramentado
                </button>{" "}
                {locale === "pt-BR"
                  ? "para Português e Inglês, um lado dos meus interesses variados que me mantém conectado à linguagem e comunicação."
                  : "(sworn translator) for Portuguese and English, a side of my varied interests that keeps me connected to language and communication."}
              </p>
              <p className="text-green-300/80 leading-relaxed text-sm sm:text-base">
                {locale === "pt-BR"
                  ? "Quando não estou codando, você me encontrará lendo (280+ livros e contando), pesquisando ou explorando qualquer tema que desperte minha curiosidade."
                  : "When not coding, you'll find me reading (280+ books and counting), researching, or exploring whatever topic catches my curiosity."}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {locale === "pt-BR" ? "localização" : "location"}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Belo Horizonte
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  Brasil 🇧🇷
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {locale === "pt-BR" ? "empresa" : "company"}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  RHI Magnesita
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {locale === "pt-BR"
                    ? "Engenheiro Full Stack"
                    : "Full Stack Engineer"}
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {locale === "pt-BR" ? "formação" : "education"}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  PUC Minas
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {locale === "pt-BR"
                    ? "Bacharel Ciência da Computação"
                    : "BSc Computer Science"}
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {locale === "pt-BR" ? "foco" : "focus"}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Full Stack
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  + DevOps & {locale === "pt-BR" ? "Dados" : "Data"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
