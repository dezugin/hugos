"use client";

import { Github, Terminal, Folder, GitBranch } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";

interface CodeProjectsProps {
  dict: Dictionary;
}

const getProjects = (dict: Dictionary) => [
  {
    title: "Political Attitude Networks Brazil",
    description: dict.projects.project_1_desc,
    tags: ["Python", "Network Analysis", "Research", "Data Science"],
    github:
      "https://github.com/dezugin/Political_Attitude_Networks_Brazil_ResIN",
    type: "research",
  },
  {
    title: "Network Effects of Firehosing",
    description: dict.projects.project_2_desc,
    tags: ["Research", "Network Science", "Python", "Thesis"],
    github: "https://github.com/dezugin/tcc",
    type: "research",
  },
  {
    title: "Udacity Azure DevOps",
    description: dict.projects.project_3_desc,
    tags: ["Azure", "DevOps", "Terraform", "CI/CD"],
    github: "https://github.com/dezugin/udacity_devops_azure",
    type: "devops",
  },
  {
    title: "Flask WebApp Azure Pipeline",
    description: dict.projects.project_4_desc,
    tags: ["Flask", "Python", "Azure", "Pipeline"],
    github: "https://github.com/dezugin/udacity_devops_pipeline",
    type: "devops",
  },
  {
    title: "Postgres Sparkify ETL",
    description: dict.projects.project_5_desc,
    tags: ["PostgreSQL", "Python", "ETL", "Data Engineering"],
    github: "https://github.com/dezugin/UdacityPostgresSparkify",
    type: "data",
  },
  {
    title: "Cassandra Sparkify",
    description: dict.projects.project_6_desc,
    tags: ["Cassandra", "NoSQL", "Python", "Data Modeling"],
    github: "https://github.com/dezugin/UdacityCassandraSparkify",
    type: "data",
  },
  {
    title: "AWS Data Warehouse",
    description: dict.projects.project_7_desc,
    tags: ["AWS", "Redshift", "Data Warehouse", "SQL"],
    github: "https://github.com/dezugin/UdacityAWSWarehouseSparkify",
    type: "data",
  },
  {
    title: "Spark Data Lake",
    description: dict.projects.project_8_desc,
    tags: ["Spark", "AWS", "Data Lake", "Python"],
    github: "https://github.com/dezugin/UdacityAWSDataLake",
    type: "data",
  },
  {
    title: "Airflow Data Pipeline",
    description: dict.projects.project_9_desc,
    tags: ["Airflow", "ETL", "Python", "Orchestration"],
    github: "https://github.com/dezugin/UdacitySparkifyAirFlow",
    type: "data",
  },
];

const typeColors: Record<string, string> = {
  research: "text-purple-400 border-purple-500/50",
  devops: "text-blue-400 border-blue-500/50",
  data: "text-cyan-400 border-cyan-500/50",
};

const getTypeLabels = (dict: Dictionary): Record<string, string> => ({
  research: dict.projects.tag_research,
  devops: "devops",
  data: dict.projects.tag_data,
});

export default function CodeProjects({ dict }: CodeProjectsProps) {
  const projects = getProjects(dict);
  const typeLabels = getTypeLabels(dict);

  return (
    <section id="code" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> {dict.projects.command}
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.github}
              target="_blank"
              className="group block"
            >
              <div className="h-full bg-gray-950 border border-green-900/50 rounded-lg p-6 hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder className="w-5 h-5 text-green-500" />
                    <span
                      className={`text-xs font-mono px-2 py-0.5 border rounded ${typeColors[project.type]}`}
                    >
                      {typeLabels[project.type]}
                    </span>
                  </div>
                  <Github className="w-5 h-5 text-green-600 group-hover:text-green-400 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-mono font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-green-600/80 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-green-500/10 text-green-500/80 rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-12 text-center">
          <Link
            href="https://github.com/dezugin"
            target="_blank"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg hover:bg-green-500/20 hover:border-green-400 transition-all font-mono"
          >
            <Github className="w-5 h-5" />
            <span>git clone github.com/dezugin</span>
            <GitBranch className="w-4 h-4 text-green-600 group-hover:text-green-400" />
          </Link>
          <p className="text-green-600/60 text-sm mt-3 font-mono">
            {dict.projects.repos_count}
          </p>
        </div>
      </div>
    </section>
  );
}
