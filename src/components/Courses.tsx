"use client";

import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle,
  Terminal,
  Cloud,
  Database,
  Network,
} from "lucide-react";
import Link from "next/link";

const nanodegrees = [
  {
    title: "Cloud DevOps using Microsoft Azure",
    provider: "Udacity Nanodegree",
    icon: Cloud,
    date: "2021",
    link: "https://www.udacity.com/course/cloud-devops-using-microsoft-azure-nanodegree--nd082",
    skills: [
      "Azure",
      "Terraform",
      "CI/CD",
      "IaC",
      "JMeter",
      "Selenium",
      "Locust",
    ],
    description:
      "Infrastructure as Code, performance testing, and automated deployments",
  },
  {
    title: "Data Engineering",
    provider: "Udacity Nanodegree",
    icon: Database,
    date: "2020",
    link: "https://www.udacity.com/course/data-engineer-nanodegree--nd027",
    skills: ["PostgreSQL", "Cassandra", "Spark", "Airflow", "Redshift", "S3"],
    description: "Data modeling, data lakes, pipelines with Spark and Airflow",
  },
];

const specializations = [
  {
    title: "From Data to Insights with Google Cloud",
    provider: "Google Cloud / Coursera",
    icon: Cloud,
    date: "2020",
    link: "https://www.coursera.org/specializations/from-data-to-insights-google-cloud-platform",
    skills: ["BigQuery", "Data Studio", "Data Prep", "SQL"],
    description: "Querying and visualizing enterprise data with BigQuery",
  },
  {
    title: "Statistics with Python",
    provider: "University of Michigan / Coursera",
    icon: Terminal,
    date: "2020",
    link: "https://www.coursera.org/specializations/statistics-with-python",
    skills: ["Python", "Statistics", "Data Analysis", "Hypothesis Testing"],
    description: "Statistical analysis and inference using Python",
  },
  {
    title: "Python for Everybody",
    provider: "University of Michigan / Coursera",
    icon: Terminal,
    date: "2019",
    link: "https://www.coursera.org/specializations/python",
    skills: ["Python", "Web Scraping", "Databases", "APIs"],
    description: "Python programming, web scraping, and database applications",
  },
];

const certifications = [
  {
    title: "CCNA Routing & Switching",
    issuer: "Cisco Networking Academy",
    date: "2018",
    icon: Network,
    skills: ["Networking", "TCP/IP", "Routing", "Switching"],
  },
  {
    title: "Cyberops Associate",
    issuer: "Cisco Networking Academy",
    date: "2018",
    icon: Network,
    skills: ["Cybersecurity", "SOC", "Threat Analysis"],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-terminal-green/10 border border-terminal-green/30 rounded mb-4">
            <span className="terminal-text text-sm">
              <span className="text-terminal-green/60">$</span> cat
              /var/log/learning.log
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold terminal-text mb-4">
            Courses & Certifications
          </h2>
          <p className="text-terminal-green/60 max-w-2xl">
            {"// Continuous learning in DevOps, Cloud, and Data Engineering"}
          </p>
        </div>

        {/* Nanodegrees */}
        <div className="mb-16">
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <Award className="w-5 h-5 text-yellow-500" />
            <span className="text-terminal-green/60">~/</span>nanodegrees/
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {nanodegrees.map((nd) => {
              const IconComponent = nd.icon;
              return (
                <div
                  key={nd.title}
                  className="bg-terminal-dark border border-terminal-green/20 rounded-lg p-6 hover:border-terminal-green/50 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-terminal-green/10 border border-terminal-green/30 rounded-lg flex items-center justify-center group-hover:bg-terminal-green/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-terminal-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-terminal-green/60 text-xs">
                          {nd.date}
                        </span>
                        <CheckCircle className="w-3 h-3 text-terminal-green" />
                      </div>
                      <h4 className="font-bold terminal-text text-lg group-hover:text-terminal-green transition-colors">
                        {nd.title}
                      </h4>
                      <p className="text-terminal-green/60 text-sm">
                        {nd.provider}
                      </p>
                    </div>
                  </div>

                  <p className="text-terminal-green/50 text-sm mb-4 font-mono">
                    {"> "}
                    {nd.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {nd.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/20 text-terminal-green/80 rounded text-xs font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={nd.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm terminal-text hover:text-terminal-green transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Program
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="text-terminal-green/60">~/</span>specializations/
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specializations.map((spec) => {
              const IconComponent = spec.icon;
              return (
                <div
                  key={spec.title}
                  className="bg-terminal-dark border border-terminal-green/20 rounded-lg p-5 hover:border-terminal-green/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-terminal-green" />
                    </div>
                    <span className="text-terminal-green/60 text-xs">
                      {spec.date}
                    </span>
                  </div>

                  <h4 className="font-bold terminal-text mb-1 group-hover:text-terminal-green transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-terminal-green/50 text-xs mb-3">
                    {spec.provider}
                  </p>

                  <p className="text-terminal-green/40 text-xs mb-4 font-mono">
                    {spec.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {spec.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-terminal-green/5 border border-terminal-green/15 text-terminal-green/70 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={spec.link}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-xs terminal-text hover:text-terminal-green transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <Network className="w-5 h-5 text-cyan-400" />
            <span className="text-terminal-green/60">~/</span>certifications/
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-terminal-dark border border-terminal-green/20 rounded-lg p-4 hover:border-terminal-green/40 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/30 rounded flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-terminal-green/50 text-xs">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="font-bold terminal-text text-sm mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-terminal-green/50 text-xs mb-3">
                    {cert.issuer}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-1.5 py-0.5 bg-cyan-500/10 text-cyan-400/70 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning Stats Terminal */}
        <div className="mt-12 bg-terminal-dark border border-terminal-green/30 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-terminal-green/50 text-xs ml-2">
              learning_stats.sh
            </span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p className="text-terminal-green/60">
              <span className="text-terminal-green">$</span> cat
              learning_summary.txt
            </p>
            <p className="text-terminal-green/80 mt-2">
              Total Nanodegrees: <span className="text-terminal-green">2</span>{" "}
              (Udacity)
            </p>
            <p className="text-terminal-green/80">
              Specializations: <span className="text-terminal-green">3</span>{" "}
              (Coursera)
            </p>
            <p className="text-terminal-green/80">
              Network Certs: <span className="text-terminal-green">2</span>{" "}
              (Cisco)
            </p>
            <p className="text-terminal-green/80">
              Focus Areas: <span className="text-cyan-400">DevOps</span>,{" "}
              <span className="text-cyan-400">Data Engineering</span>,{" "}
              <span className="text-cyan-400">Cloud</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
