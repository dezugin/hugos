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
    <section id="about" className="py-20 bg-black">
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
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-600 mb-4">{"/* profile.json */"}</div>
              <pre className="text-green-400/90 overflow-x-auto">
                {`{
  "name": "Hugo Souza-Almeida",
  "handle": "@dezugin",
  "role": "Full Stack Developer",
  "company": "RHI Magnesita",
  "location": "Belo Horizonte, BR",
  "education": {
    "bsc": "Computer Science - PUC Minas",
    "postgrad_1": "Information Security - UTFPR",
    "postgrad_2": "Digital Forensics - IPOG"
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

            {/* Sworn Translator Terminal */}
            <button
              onClick={() => {
                window.location.hash = "contact?subject=translation";
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="block w-full text-left bg-gray-950 border border-yellow-900/50 rounded-lg p-6 font-mono text-sm hover:border-yellow-500/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-yellow-500/60 text-xs ml-2">
                  translator.sh
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-yellow-500/70">
                  <span className="text-yellow-400">$</span> cat
                  /credentials/translator.txt
                </p>
                <div className="pl-4 border-l-2 border-yellow-500/30">
                  <p className="text-yellow-400/90">
                    🌐 Tradutor Juramentado (Sworn Translator)
                  </p>
                  <p className="text-yellow-500/70">
                    Portuguese {"<->"} English
                  </p>
                  <p className="text-yellow-500/70 mt-2">
                    Official document translations, legal texts,
                  </p>
                  <p className="text-yellow-500/70">
                    certificates, and technical documentation.
                  </p>
                </div>
                <p className="text-yellow-500/50 mt-3 group-hover:text-yellow-400 transition-colors">
                  {">"} Click to request translation services_
                </p>
              </div>
            </button>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                {">"} Bio
              </h3>
              <p className="text-green-300/80 leading-relaxed mb-4">
                <span className="text-cyan-400">Full Stack Developer</span> with
                5+ years of experience building end-to-end solutions. Currently
                at RHI Magnesita, working across the entire stack—from frontend
                interfaces to backend systems and cloud infrastructure.
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4">
                I hold a BSc in Computer Science from PUC Minas, with
                postgraduate studies in Information Security (UTFPR) and Digital
                Forensics (IPOG). My work spans OutSystems, JavaScript, C#,
                Python, and modern DevOps practices.
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4">
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
              <p className="text-green-300/80 leading-relaxed">
                When not coding, you&apos;ll find me reading (280+ books and
                counting), researching, or exploring whatever topic catches my
                curiosity.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 text-xs font-mono">
                    location
                  </span>
                </div>
                <div className="text-green-400 font-medium">Belo Horizonte</div>
                <div className="text-green-600/60 text-sm">Brazil 🇧🇷</div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 text-xs font-mono">
                    company
                  </span>
                </div>
                <div className="text-green-400 font-medium">RHI Magnesita</div>
                <div className="text-green-600/60 text-sm">
                  Full Stack Engineer
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 text-xs font-mono">
                    education
                  </span>
                </div>
                <div className="text-green-400 font-medium">PUC Minas</div>
                <div className="text-green-600/60 text-sm">
                  BSc Computer Science
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 text-xs font-mono">
                    focus
                  </span>
                </div>
                <div className="text-green-400 font-medium">Full Stack</div>
                <div className="text-green-600/60 text-sm">+ DevOps & Data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
