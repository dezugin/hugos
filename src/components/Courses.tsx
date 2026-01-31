"use client";

import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle,
  Terminal,
  Cloud,
  Database,
  Shield,
  Search,
  Code2,
  Languages,
  Lock,
  Eye,
  Cpu,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

interface CoursesProps {
  dict: Dictionary;
}

const getPostgraduate = (dict: Dictionary) => [
  {
    title: dict.courses.info_security,
    institution: dict.courses.utfpr_institution,
    icon: Shield,
    date: "2024",
    type: dict.courses.postgraduate,
    skills: dict.courses.infosec_skills.split(",").map((s: string) => s.trim()),
  },
  {
    title: dict.courses.forensics,
    institution: "IPOG - Instituto de Pós-Graduação",
    icon: Search,
    date: "2025",
    type: dict.courses.postgraduate,
    skills: dict.courses.forensics_skills
      .split(",")
      .map((s: string) => s.trim()),
  },
];

const getNanodegrees = (dict: Dictionary) => [
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
    description: dict.courses.nanodegree_1_desc,
  },
  {
    title: "Data Engineering",
    provider: "Udacity Nanodegree",
    icon: Database,
    date: "2021-2022",
    link: "https://www.udacity.com/course/data-engineer-nanodegree--nd027",
    skills: ["PostgreSQL", "Cassandra", "Spark", "Airflow", "Redshift", "S3"],
    description: dict.courses.nanodegree_2_desc,
  },
];

const courses = [
  // Microsoft / freeCodeCamp
  {
    title: "Foundational C# with Microsoft",
    provider: "freeCodeCamp / Microsoft",
    date: "Jun 2025",
    icon: Code2,
    skills: ["C#", ".NET", "Programming Fundamentals"],
  },
  // Security Courses
  {
    title: "Cyber Intelligence Professional",
    provider: "EC-Council",
    date: "Feb 2024",
    icon: Shield,
    skills: ["Cyber Intelligence", "Threat Analysis", "OSINT"],
  },
  {
    title: "The Complete Cyber Security Course - Volume 2: Network Security",
    provider: "Udemy",
    date: "Jul 2023",
    icon: Lock,
    skills: ["Network Security", "Firewalls", "Wireshark"],
  },
  {
    title: "The Complete Cyber Security Course - Volume 3: Anonymous Browsing",
    provider: "Udemy",
    date: "Jul 2023",
    icon: Eye,
    skills: ["Privacy", "Anonymity", "TOR", "VPN"],
  },
  {
    title:
      "The Complete Cyber Security Course - Volume 4: End Point Protection",
    provider: "Udemy",
    date: "Jul 2023",
    icon: Shield,
    skills: ["Endpoint Security", "Antivirus", "Malware Protection"],
  },
  {
    title: "Pentesting",
    provider: "Desec Security",
    date: "Feb 2023",
    icon: Terminal,
    skills: ["Penetration Testing", "Ethical Hacking", "Security Assessment"],
  },
  // Red Hat Courses
  {
    title: "Red Hat OpenShift I: Containers & Kubernetes (DO180)",
    provider: "Red Hat",
    date: "Dec 2023",
    icon: Cloud,
    skills: ["OpenShift", "Kubernetes", "Containers", "Docker"],
  },
  {
    title: "Red Hat System Administration I (RH124)",
    provider: "Red Hat",
    date: "Sep 2022",
    icon: Terminal,
    skills: ["Linux", "RHEL", "System Administration", "Shell"],
  },
  // AWS Courses (Coursera)
  {
    title: "DevOps on AWS Specialization",
    provider: "AWS / Coursera",
    date: "Aug 2023",
    icon: Cloud,
    skills: ["AWS", "DevOps", "CI/CD", "Cloud Architecture"],
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    provider: "AWS / Coursera",
    date: "Aug 2023",
    icon: Cloud,
    skills: ["AWS CodeCommit", "CodeBuild", "CodePipeline"],
  },
  {
    title: "DevOps on AWS: Operate and Monitor",
    provider: "AWS / Coursera",
    date: "Aug 2023",
    icon: Cloud,
    skills: ["CloudWatch", "X-Ray", "Monitoring", "Logging"],
  },
  {
    title: "DevOps on AWS: Release and Deploy",
    provider: "AWS / Coursera",
    date: "Aug 2023",
    icon: Cloud,
    skills: ["CodeDeploy", "CloudFormation", "Deployment Strategies"],
  },
  {
    title: "AWS Cloud Technical Essentials",
    provider: "AWS / Coursera",
    date: "Jul 2023",
    icon: Cloud,
    skills: ["AWS", "EC2", "S3", "VPC", "IAM"],
  },
  {
    title: "DevOps Culture and Mindset",
    provider: "Coursera",
    date: "Jul 2023",
    icon: BookOpen,
    skills: ["DevOps", "Agile", "Culture", "Collaboration"],
  },
  // AWS Courses (Udacity)
  {
    title: "AWS Machine Learning Foundations 2022",
    provider: "AWS / Udacity",
    date: "Aug 2022",
    icon: Cpu,
    skills: ["AWS", "Machine Learning", "SageMaker", "Python"],
  },
  // Google Cloud Courses
  {
    title: "Achieving Advanced Insights with BigQuery",
    provider: "Google Cloud / Coursera",
    date: "Nov 2021",
    icon: Database,
    skills: ["BigQuery", "SQL", "Data Analysis", "GCP"],
  },
  {
    title: "Applying Machine Learning to your Data with GCP",
    provider: "Google Cloud / Coursera",
    date: "Nov 2021",
    icon: Database,
    skills: ["Machine Learning", "GCP", "BigQuery ML", "Python"],
  },
];

const getCertifications = (dict: Dictionary) => [
  {
    title: "OutSystems Associate Developer Certificate (ODC)",
    issuer: "OutSystems",
    date: "2025",
    icon: Code2,
    skills: ["Low-Code", "OutSystems", "ODC", "Cloud-Native"],
  },
  {
    title: dict.courses.cpe_title,
    issuer: "Cambridge Assessment English",
    date: "2017",
    icon: Languages,
    skills: dict.courses.cpe_skills.split(",").map((s: string) => s.trim()),
  },
];

export default function Courses({ dict }: CoursesProps) {
  const postgraduate = getPostgraduate(dict);
  const nanodegrees = getNanodegrees(dict);
  const certifications = getCertifications(dict);

  return (
    <section id="courses" className="py-20 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-terminal-green/10 border border-terminal-green/30 rounded mb-4">
            <span className="terminal-text text-sm">
              <span className="text-terminal-green/60">$</span>{" "}
              {dict.courses.command}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold terminal-text mb-4">
            {dict.courses.title}
          </h2>
          <p className="text-terminal-green/60 max-w-2xl">
            {dict.courses.subtitle}
          </p>
        </div>

        {/* Postgraduate Degrees */}
        <div className="mb-16">
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <span className="text-terminal-green/60">~/</span>
            {dict.courses.postgraduate_path}/
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {postgraduate.map((pg) => {
              const IconComponent = pg.icon;
              return (
                <div
                  key={pg.title}
                  className="bg-terminal-dark border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/50 transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/30 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-purple-400/60 text-xs">
                          {pg.date}
                        </span>
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs">
                          {pg.type}
                        </span>
                      </div>
                      <h4 className="font-bold terminal-text text-lg group-hover:text-purple-400 transition-colors">
                        {pg.title}
                      </h4>
                      <p className="text-terminal-green/60 text-sm">
                        {pg.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pg.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400/80 rounded text-xs font-mono"
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

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="text-terminal-green/60">~/</span>
            {dict.courses.certifications_path}/
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={cert.title}
                  className="bg-terminal-dark border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-cyan-400/60 text-xs">
                          {cert.date}
                        </span>
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                      </div>
                      <h4 className="font-bold terminal-text text-lg">
                        {cert.title}
                      </h4>
                      <p className="text-terminal-green/60 text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400/80 rounded text-xs font-mono"
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
                    {dict.courses.view_program}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Courses */}
        <div className="mb-16">
          <h3 className="text-xl font-bold terminal-text mb-6 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="text-terminal-green/60">~/</span>
            {dict.courses.courses_path}/
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={course.title}
                  className="bg-terminal-dark border border-terminal-green/20 rounded-lg p-4 hover:border-terminal-green/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-terminal-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold terminal-text text-sm group-hover:text-terminal-green transition-colors leading-tight">
                          {course.title}
                        </h4>
                        <span className="text-terminal-green/40 text-xs whitespace-nowrap">
                          {course.date}
                        </span>
                      </div>
                      <p className="text-terminal-green/50 text-xs">
                        {course.provider}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-terminal-green/10 text-terminal-green/70 rounded text-xs"
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
              {dict.courses.learning_stats_file}
            </span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <p className="text-terminal-green/60">
              <span className="text-terminal-green">$</span> cat{" "}
              {dict.courses.learning_summary_file}
            </p>
            <p className="text-terminal-green/80 mt-2">
              {dict.courses.postgraduate_degrees}:{" "}
              <span className="text-purple-400">2</span> (UTFPR, IPOG)
            </p>
            <p className="text-terminal-green/80">
              Nanodegrees: <span className="text-terminal-green">2</span>{" "}
              (Udacity)
            </p>
            <p className="text-terminal-green/80">
              {dict.courses.courses_label}:{" "}
              <span className="text-terminal-green">5</span> (Red Hat,
              EC-Council, Google Cloud, Cisco)
            </p>
            <p className="text-terminal-green/80">
              {dict.courses.certifications_label}:{" "}
              <span className="text-cyan-400">2</span> (OutSystems ODC,
              Cambridge CPE)
            </p>
            <p className="text-terminal-green/80">
              {dict.courses.focus_areas}:{" "}
              <span className="text-cyan-400">Full Stack</span>,{" "}
              <span className="text-cyan-400">{dict.courses.security}</span>,{" "}
              <span className="text-cyan-400">DevOps</span>,{" "}
              <span className="text-cyan-400">{dict.courses.data}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
