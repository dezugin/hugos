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
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-6 font-mono text-sm">
            <div className="text-green-600 mb-4">{"/* profile.json */"}</div>
            <pre className="text-green-400/90 overflow-x-auto">
              {`{
  "name": "Hugo Souza",
  "handle": "@dezugin",
  "role": "Full Stack Engineer",
  "company": "RHI Magnesita",
  "location": "Belo Horizonte, BR",
  "education": {
    "degree": "BSc Computer Science",
    "university": "PUC Minas"
  },
  "background": [
    "Law",
    "International Relations"
  ],
  "interests": [
    "DevOps",
    "Data Engineering", 
    "Web Scraping",
    "Open Source"
  ]
}`}
            </pre>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                {">"} Bio
              </h3>
              <p className="text-green-300/80 leading-relaxed mb-4">
                Full Stack Engineer at RHI Magnesita, formerly DevOps Engineer
                at the same company, Data Analyst Intern at 3778 (a Brazilian
                healthtech startup), and Information Security Intern at
                Symplicity.
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4">
                I hold a Bachelor&apos;s in Computer Science from Pontifícia
                Universidade Católica de Minas Gerais, one of the largest
                universities in Latin America. I also have a background in Law
                and International Relations, bringing a unique perspective to
                tech.
              </p>
              <p className="text-green-300/80 leading-relaxed">
                I love learning new things and building tools that make a
                difference. From web scrapers for healthcare data to CI/CD
                pipelines on Azure, I enjoy tackling diverse technical
                challenges.
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
                <div className="text-green-400 font-medium">DevOps & Data</div>
                <div className="text-green-600/60 text-sm">Engineering</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
