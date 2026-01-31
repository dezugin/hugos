/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terminal-bg border-t border-terminal-green/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 terminal-text text-lg font-bold"
            >
              <Terminal className="w-5 h-5 text-terminal-green" />
              <span>
                hugo<span className="text-terminal-green">@</span>dev
              </span>
            </Link>
            <p className="mt-4 text-terminal-green/50 text-sm font-mono">
              Full Stack Engineer specializing in DevOps, Data Engineering, and
              Cloud Infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="terminal-text font-semibold mb-4 text-sm">
              <span className="text-terminal-green/60">~/</span>navigation
            </h4>
            <ul className="space-y-2 text-terminal-green/60 text-sm font-mono">
              <li>
                <Link
                  href="#about"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./about
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./skills
                </Link>
              </li>
              <li>
                <Link
                  href="#code"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./projects
                </Link>
              </li>
              <li>
                <Link
                  href="#research"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./research
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="terminal-text font-semibold mb-4 text-sm">
              <span className="text-terminal-green/60">~/</span>more
            </h4>
            <ul className="space-y-2 text-terminal-green/60 text-sm font-mono">
              <li>
                <Link
                  href="#reading"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./reading
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./courses
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-terminal-green transition-colors"
                >
                  ./contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="terminal-text font-semibold mb-4 text-sm">
              <span className="text-terminal-green/60">~/</span>connect
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://github.com/dezugin"
                target="_blank"
                className="w-10 h-10 bg-terminal-dark border border-terminal-green/30 rounded flex items-center justify-center hover:border-terminal-green hover:bg-terminal-green/10 transition-all group"
              >
                <Github className="w-4 h-4 text-terminal-green/60 group-hover:text-terminal-green transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com/in/hugosouzaa"
                target="_blank"
                className="w-10 h-10 bg-terminal-dark border border-terminal-green/30 rounded flex items-center justify-center hover:border-terminal-green hover:bg-terminal-green/10 transition-all group"
              >
                <Linkedin className="w-4 h-4 text-terminal-green/60 group-hover:text-terminal-green transition-colors" />
              </Link>
              <Link
                href="mailto:hey@hugos.com.br"
                className="w-10 h-10 bg-terminal-dark border border-terminal-green/30 rounded flex items-center justify-center hover:border-terminal-green hover:bg-terminal-green/10 transition-all group"
              >
                <Mail className="w-4 h-4 text-terminal-green/60 group-hover:text-terminal-green transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-terminal-green/20 pt-8">
          <div className="bg-terminal-dark border border-terminal-green/20 rounded-lg p-4 font-mono text-sm">
            <p className="text-terminal-green/60">
              <span className="text-terminal-green">$</span> echo &quot;©{" "}
              {currentYear} Hugo Souza. Built with Next.js + Tailwind&quot;
            </p>
            <p className="text-terminal-green/80 mt-1">
              © {currentYear} Hugo Souza. Built with Next.js + Tailwind
            </p>
            <p className="text-terminal-green/40 mt-2 text-xs">
              <span className="text-terminal-green">$</span> exit 0
            </p>
          </div>

          {/* Creative Commons License */}
          <div className="mt-6 text-center">
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              className="inline-block"
            >
              <img
                alt="Creative Commons License"
                style={{ borderWidth: 0 }}
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-terminal-green/40 text-xs mt-2 font-mono">
              This work is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                target="_blank"
                className="text-terminal-green/60 hover:text-terminal-green transition-colors underline"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
