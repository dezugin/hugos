"use client";

import {
  MapPin,
  Building2,
  GraduationCap,
  Code2,
  Terminal,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> cat about.md
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ASCII Art / Terminal Profile */}
          <div className="space-y-6">
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-hidden">
              <div className="text-green-600 mb-4">{"/* profile.json */"}</div>
              <pre className="text-green-400/90 overflow-x-auto whitespace-pre-wrap break-words">
                {`{
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
                {">"} Bio
              </h3>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                <span className="text-cyan-400">Full Stack Developer</span> with
                3-5 years of experience building end-to-end solutions. Currently
                at RHI Magnesita, working aycross the entire stack—from frontend
                interfaces to backend systems and cloud infrastructure.
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                I hold a BSc in Computer Science from PUC Minas, with
                postgraduate studies in Information Security (UTFPR) and Digital
                Forensics (IPOG). My work spans OutSystems, JavaScript, C#,
                Python, and modern DevOps practices.
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                Beyond code, I&apos;m also a{" "}
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
                (sworn translator) for Portuguese and English, a side of my
                varied interests that keeps me connected to language and
                communication.
              </p>
              <p className="text-green-300/80 leading-relaxed text-sm sm:text-base">
                When not coding, you&apos;ll find me reading (280+ books and
                counting), researching, or exploring whatever topic catches my
                curiosity.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    location
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Belo Horizonte
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  Brazil 🇧🇷
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    company
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  RHI Magnesita
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  Full Stack Engineer
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    education
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  PUC Minas
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  BSc Computer Science
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    focus
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Full Stack
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  + DevOps & Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
