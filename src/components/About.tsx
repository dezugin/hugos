"use client";

import {
  MapPin,
  Building2,
  GraduationCap,
  Code2,
  Terminal,
} from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries";

interface AboutProps {
  dict: Dictionary;
}

export default function About({ dict }: AboutProps) {
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
                {dict.about.profile_json}
              </pre>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">
                {">"} {dict.about.bio_label}
              </h3>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                <span className="text-cyan-400">{dict.about.role}</span>{" "}
                {dict.about.bio_paragraph_1}
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                {dict.about.bio_paragraph_2}
              </p>
              <p className="text-green-300/80 leading-relaxed mb-4 text-sm sm:text-base">
                {dict.about.bio_paragraph_3_start}
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
                  {dict.about.sworn_translator}
                </button>{" "}
                {dict.about.bio_paragraph_3_end}
              </p>
              <p className="text-green-300/80 leading-relaxed text-sm sm:text-base">
                {dict.about.bio_paragraph_4}
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {dict.about.location_label}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Belo Horizonte
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {dict.about.brazil_flag}
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {dict.about.company_label}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  RHI Magnesita
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {dict.about.role}
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {dict.about.education_label}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  PUC Minas
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {dict.about.education_degree}
                </div>
              </div>

              <div className="bg-gray-950/50 border border-green-900/30 rounded-lg p-3 sm:p-4 hover:border-green-500/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-green-600 text-xs font-mono">
                    {dict.about.focus_label}
                  </span>
                </div>
                <div className="text-green-400 font-medium text-sm sm:text-base">
                  Full Stack
                </div>
                <div className="text-green-600/60 text-xs sm:text-sm">
                  {dict.about.focus_suffix}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
