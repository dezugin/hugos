"use client";

import { Terminal, Cloud, Database, Server, Code2, Wrench } from "lucide-react";

const skills = {
  "DevOps & Cloud": {
    icon: Cloud,
    items: [
      "Azure",
      "AWS",
      "Terraform",
      "Docker",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  "Data Engineering": {
    icon: Database,
    items: [
      "PostgreSQL",
      "Apache Cassandra",
      "Apache Spark",
      "Apache Airflow",
      "Amazon Redshift",
      "BigQuery",
    ],
  },
  "Backend & APIs": {
    icon: Server,
    items: ["Python", "Node.js", "Flask", "FastAPI", "REST APIs", "GraphQL"],
  },
  Frontend: {
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind",
    ],
  },
  "Tools & Testing": {
    icon: Wrench,
    items: ["Git", "JMeter", "Selenium", "Postman", "Unit Testing", "Linux"],
  },
  "Web Scraping": {
    icon: Terminal,
    items: [
      "Python",
      "BeautifulSoup",
      "Scrapy",
      "Puppeteer",
      "API Integration",
    ],
  },
};

const languages = [
  { name: "Portuguese", level: "Native", percentage: 100, flag: "🇧🇷" },
  { name: "English", level: "Fluent", percentage: 95, flag: "🇺🇸" },
  { name: "Spanish", level: "Intermediate", percentage: 60, flag: "🇪🇸" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> ls -la skills/
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
            <div
              key={category}
              className="bg-black border border-green-900/50 rounded-lg p-6 hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-green-500" />
                </div>
                <h4 className="font-mono text-green-400 font-semibold">
                  {category}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-500/10 border border-green-900/50 text-green-400/80 rounded text-xs font-mono hover:border-green-500/50 hover:text-green-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-mono text-green-400">
              <span className="text-green-600">{">"}</span> languages --spoken
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-black border border-green-900/50 rounded-lg p-4 hover:border-green-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-mono text-green-400">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-xs text-green-600 font-mono">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full bg-green-900/30 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-green-600 font-mono">
                    {lang.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
