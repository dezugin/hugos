"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Send,
  Github,
  Linkedin,
  Terminal,
  Code2,
  BookOpen,
  Languages,
} from "lucide-react";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface ContactProps {
  locale: Locale;
  dict: Dictionary;
}

const getContactEmails = (locale: Locale) => [
  {
    type:
      locale === "pt-BR"
        ? "Programação & Desenvolvimento"
        : "Programming & Development",
    email: "code@hugos.com.br",
    icon: Code2,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    type: locale === "pt-BR" ? "Pesquisa & Academia" : "Research & Academia",
    email: "research@hugos.com.br",
    icon: BookOpen,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    type: locale === "pt-BR" ? "Serviços de Tradução" : "Translation Services",
    email: "translate@hugos.com.br",
    icon: Languages,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
];

// Map form subjects to their corresponding Web3Forms access keys
const getAccessKeyForSubject = (subject: string): string => {
  if (subject === "translation") {
    return process.env.NEXT_PUBLIC_WEB3FORMS_KEY_TRANSLATE || "";
  }
  // All other subjects go to hey@hugos.com.br
  return process.env.NEXT_PUBLIC_WEB3FORMS_KEY_GENERAL || "";
};

export default function Contact({ locale, dict }: ContactProps) {
  const contactEmails = getContactEmails(locale);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check URL hash for pre-selected subject
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.includes("subject=translation")) {
        setFormData((prev) => ({ ...prev, subject: "translation" }));
        // Scroll to contact section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const accessKey = getAccessKeyForSubject(formData.subject);

    if (!accessKey) {
      setError("Configuration error. Please email me directly.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(
          "Failed to send message. Please try again or email me directly.",
        );
      }
    } catch {
      setError("Network error. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-terminal-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-2 bg-terminal-green/10 border border-terminal-green/30 rounded mb-4">
            <span className="terminal-text text-sm">
              <span className="text-terminal-green/60">$</span>{" "}
              {dict.contact.command}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold terminal-text mb-4">
            {dict.contact.title}
          </h2>
          <p className="text-terminal-green/60 max-w-2xl">
            {`// ${dict.contact.subtitle}`}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Terminal Info Block */}
            <div className="bg-terminal-bg border border-terminal-green/30 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-terminal-green/10 border-b border-terminal-green/20">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-terminal-green/50 text-xs ml-2">
                  {dict.contact.contact_info}
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <p className="text-terminal-green/60 mb-2">
                    <span className="text-terminal-green">$</span> cat
                    contact.json
                  </p>
                  <div className="pl-4 border-l-2 border-terminal-green/20">
                    <p className="text-terminal-green/80">{"{"}</p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;{dict.contact.location_label.toLowerCase()}&quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;Belo Horizonte, Brazil&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;{dict.contact.timezone_label.toLowerCase()}&quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;UTC-3 (BRT)&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;{dict.contact.availability_label.toLowerCase()}
                        &quot;
                      </span>
                      :{" "}
                      <span className="text-green-400">
                        &quot;{dict.contact.availability_value}&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;
                        {dict.contact.response_time_label
                          .toLowerCase()
                          .replace(/ /g, "_")}
                        &quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;{dict.contact.response_time_value}&quot;
                      </span>
                    </p>
                    <p className="text-terminal-green/80">{"}"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Emails by Type */}
            <div className="space-y-3">
              <p className="text-terminal-green/60 text-sm mb-3 font-mono">
                {"// contact_emails"}
              </p>
              {contactEmails.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <Link
                    key={contact.email}
                    href={`mailto:${contact.email}`}
                    className={`flex items-center gap-4 p-4 bg-terminal-bg border ${contact.borderColor} rounded-lg hover:border-opacity-100 transition-all group`}
                  >
                    <div
                      className={`w-10 h-10 ${contact.bgColor} border ${contact.borderColor} rounded flex items-center justify-center group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className={`w-5 h-5 ${contact.color}`} />
                    </div>
                    <div>
                      <p className="text-terminal-green/50 text-xs">
                        {contact.type}
                      </p>
                      <p
                        className={`${contact.color} group-hover:brightness-125 transition-all font-mono`}
                      >
                        {contact.email}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 bg-terminal-bg border border-terminal-green/20 rounded-lg">
              <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded flex items-center justify-center">
                <MapPin className="w-5 h-5 text-terminal-green" />
              </div>
              <div>
                <p className="text-terminal-green/50 text-xs">
                  {dict.contact.location_label}
                </p>
                <p className="terminal-text">
                  Belo Horizonte, MG, {locale === "pt-BR" ? "Brasil" : "Brazil"}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-terminal-green/60 text-sm mb-4 font-mono">
                {"// social_links"}
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/dezugin"
                  target="_blank"
                  className="w-12 h-12 bg-terminal-bg border border-terminal-green/30 rounded-lg flex items-center justify-center hover:border-terminal-green hover:bg-terminal-green/10 transition-all group"
                >
                  <Github className="w-5 h-5 text-terminal-green/70 group-hover:text-terminal-green transition-colors" />
                </Link>
                <Link
                  href="https://linkedin.com/in/hugosouzaa"
                  target="_blank"
                  className="w-12 h-12 bg-terminal-bg border border-terminal-green/30 rounded-lg flex items-center justify-center hover:border-terminal-green hover:bg-terminal-green/10 transition-all group"
                >
                  <Linkedin className="w-5 h-5 text-terminal-green/70 group-hover:text-terminal-green transition-colors" />
                </Link>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="bg-terminal-green/10 border border-terminal-green/30 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-terminal-green rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="terminal-text text-sm font-semibold">
                    {dict.contact.status_open}
                  </p>
                  <p className="text-terminal-green/60 text-xs">
                    {dict.contact.status_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-terminal-bg border border-terminal-green/30 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-terminal-green/10 border-b border-terminal-green/20">
              <Terminal className="w-4 h-4 text-terminal-green/60" />
              <span className="text-terminal-green/50 text-xs">
                {dict.contact.form_title}
              </span>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-terminal-green/20 border border-terminal-green/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold terminal-text mb-2">
                    {dict.contact.form_success_title}
                  </h3>
                  <p className="text-terminal-green/60 mb-4 font-mono text-sm">
                    {">"} echo &quot;{dict.contact.form_success_message}&quot;
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="terminal-text hover:text-terminal-green transition-colors text-sm"
                  >
                    [{dict.contact.form_another}]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm font-mono">
                      <span className="text-red-500">error:</span> {error}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-mono text-terminal-green/70 mb-2"
                      >
                        <span className="text-terminal-green/50">$</span>{" "}
                        {dict.contact.form_name}:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all font-mono text-sm placeholder:text-terminal-green/30"
                        placeholder={
                          locale === "pt-BR" ? "seu_nome" : "your_name"
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-mono text-terminal-green/70 mb-2"
                      >
                        <span className="text-terminal-green/50">$</span>{" "}
                        {dict.contact.form_email}:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all font-mono text-sm placeholder:text-terminal-green/30"
                        placeholder={
                          locale === "pt-BR"
                            ? "seu@email.com"
                            : "your@email.com"
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-mono text-terminal-green/70 mb-2"
                    >
                      <span className="text-terminal-green/50">$</span>{" "}
                      {dict.contact.form_subject}:
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all font-mono text-sm"
                    >
                      <option value="" className="bg-terminal-dark">
                        {dict.contact.form_select}
                      </option>
                      <option value="development" className="bg-terminal-dark">
                        {dict.contact.form_subject_dev}
                      </option>
                      <option value="opportunity" className="bg-terminal-dark">
                        {dict.contact.form_subject_job}
                      </option>
                      <option value="research" className="bg-terminal-dark">
                        {dict.contact.form_subject_research}
                      </option>
                      <option value="translation" className="bg-terminal-dark">
                        {dict.contact.form_subject_translation}
                      </option>
                      <option value="consulting" className="bg-terminal-dark">
                        {dict.contact.form_subject_consulting}
                      </option>
                      <option value="other" className="bg-terminal-dark">
                        {dict.contact.form_subject_other}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-terminal-green/70 mb-2"
                    >
                      <span className="text-terminal-green/50">$</span>{" "}
                      {dict.contact.form_message}:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all resize-none font-mono text-sm placeholder:text-terminal-green/30"
                      placeholder={
                        locale === "pt-BR"
                          ? "// Escreva sua mensagem aqui..."
                          : "// Write your message here..."
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-terminal-green/20 border border-terminal-green text-terminal-green rounded-lg font-mono font-semibold hover:bg-terminal-green hover:text-terminal-bg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-terminal-green border-t-transparent rounded-full animate-spin" />
                        {dict.contact.form_sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {dict.contact.form_submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
