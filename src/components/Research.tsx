"use client";

import {
  FileText,
  ExternalLink,
  Github,
  Terminal,
  GraduationCap,
  Download,
} from "lucide-react";
import Link from "next/link";

const publications = [
  {
    title: "Political Attitude Networks in Brazil using ResIN",
    authors: "Hugo Souza-Almeida",
    institution: "UTFPR / UNIGOU",
    year: 2025,
    description:
      "Research analyzing political attitude networks in Brazil using the ResIN methodology, exploring polarization patterns and network dynamics in Brazilian politics.",
    github:
      "https://github.com/dezugin/Political_Attitude_Networks_Brazil_ResIN",
    pdf: "/papers/political-attitude-networks-brazil-resin-2025.pdf",
    type: "international",
    tags: ["Network Science", "Political Science", "Data Analysis"],
  },
  {
    title: "Network Effects of Firehosing",
    authors: "Hugo Souza-Almeida, Humberto Torres-Neto",
    institution: "PUC Minas",
    year: 2023,
    description:
      "Bachelor's thesis exploring the network effects of firehosing disinformation tactics and their propagation patterns in social networks.",
    github: "https://github.com/dezugin/tcc",
    pdf: "/papers/network-effects-firehosing-thesis-2023.pdf",
    type: "thesis",
    tags: ["Disinformation", "Network Analysis", "Social Media"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> cat research/*.md
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-black border border-green-900/50 rounded-lg p-4 text-center hover:border-green-500/50 transition-all">
            <FileText className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-mono">2</div>
            <div className="text-xs text-green-600">Publications</div>
          </div>
          <div className="bg-black border border-green-900/50 rounded-lg p-4 text-center hover:border-green-500/50 transition-all">
            <GraduationCap className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-mono">1</div>
            <div className="text-xs text-green-600">BSc Thesis</div>
          </div>
          <div className="bg-black border border-green-900/50 rounded-lg p-4 text-center hover:border-green-500/50 transition-all">
            <Github className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-mono">2</div>
            <div className="text-xs text-green-600">Open Source</div>
          </div>
          <div className="bg-black border border-green-900/50 rounded-lg p-4 text-center hover:border-green-500/50 transition-all">
            <ExternalLink className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400 font-mono">1</div>
            <div className="text-xs text-green-600">International</div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((paper, index) => (
            <div
              key={index}
              className="bg-black border border-green-900/50 rounded-lg p-6 hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Paper Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center">
                    <FileText className="w-7 h-7 text-green-500" />
                  </div>
                </div>

                {/* Paper Details */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-lg font-mono font-bold text-green-400">
                      {paper.title}
                    </h3>
                    <span
                      className={`text-xs font-mono px-2 py-1 rounded border ${
                        paper.type === "thesis"
                          ? "text-yellow-400 border-yellow-500/50"
                          : "text-purple-400 border-purple-500/50"
                      }`}
                    >
                      {paper.type}
                    </span>
                  </div>

                  <p className="text-sm text-green-600 mb-1 font-mono">
                    {paper.authors}
                  </p>
                  <p className="text-sm text-green-500/60 mb-3 font-mono">
                    {paper.institution} • {paper.year}
                  </p>

                  <p className="text-green-300/70 text-sm mb-4">
                    {paper.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-500/10 text-green-500/80 rounded text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={paper.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors font-mono"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                    <a
                      href={paper.pdf}
                      download
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
