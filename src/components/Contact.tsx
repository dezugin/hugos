"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Terminal } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
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
              <span className="text-terminal-green/60">$</span> ./contact --init
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold terminal-text mb-4">
            Get in Touch
          </h2>
          <p className="text-terminal-green/60 max-w-2xl">
            {
              "// Open for opportunities, collaborations, and interesting projects"
            }
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
                  contact_info.sh
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
                        &quot;location&quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;Belo Horizonte, Brazil&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;timezone&quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;UTC-3 (BRT)&quot;
                      </span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;availability&quot;
                      </span>
                      : <span className="text-green-400">&quot;open&quot;</span>
                      ,
                    </p>
                    <p className="text-terminal-green/80 pl-4">
                      <span className="text-cyan-400">
                        &quot;response_time&quot;
                      </span>
                      :{" "}
                      <span className="text-yellow-400">
                        &quot;24-48h&quot;
                      </span>
                    </p>
                    <p className="text-terminal-green/80">{"}"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <Link
                href="mailto:hugosza@outlook.com"
                className="flex items-center gap-4 p-4 bg-terminal-bg border border-terminal-green/20 rounded-lg hover:border-terminal-green/50 transition-all group"
              >
                <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded flex items-center justify-center group-hover:bg-terminal-green/20 transition-colors">
                  <Mail className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <p className="text-terminal-green/50 text-xs">Email</p>
                  <p className="terminal-text group-hover:text-terminal-green transition-colors">
                    hugosza@outlook.com
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 bg-terminal-bg border border-terminal-green/20 rounded-lg">
                <div className="w-10 h-10 bg-terminal-green/10 border border-terminal-green/30 rounded flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-terminal-green" />
                </div>
                <div>
                  <p className="text-terminal-green/50 text-xs">Location</p>
                  <p className="terminal-text">Belo Horizonte, MG, Brazil</p>
                </div>
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
                    Open for Opportunities
                  </p>
                  <p className="text-terminal-green/60 text-xs">
                    Interested in DevOps, Data Engineering, and Full Stack roles
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
                send_message.sh
              </span>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-terminal-green/20 border border-terminal-green/40 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-terminal-green" />
                  </div>
                  <h3 className="text-xl font-bold terminal-text mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-terminal-green/60 mb-4 font-mono text-sm">
                    {">"} echo &quot;Thanks! I&apos;ll respond soon.&quot;
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="terminal-text hover:text-terminal-green transition-colors text-sm"
                  >
                    [Send another message]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-mono text-terminal-green/70 mb-2"
                      >
                        <span className="text-terminal-green/50">$</span> name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all font-mono text-sm placeholder:text-terminal-green/30"
                        placeholder="your_name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-mono text-terminal-green/70 mb-2"
                      >
                        <span className="text-terminal-green/50">$</span> email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all font-mono text-sm placeholder:text-terminal-green/30"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-mono text-terminal-green/70 mb-2"
                    >
                      <span className="text-terminal-green/50">$</span> subject:
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
                        --select--
                      </option>
                      <option value="opportunity" className="bg-terminal-dark">
                        Job Opportunity
                      </option>
                      <option
                        value="collaboration"
                        className="bg-terminal-dark"
                      >
                        Collaboration
                      </option>
                      <option value="research" className="bg-terminal-dark">
                        Research
                      </option>
                      <option value="consulting" className="bg-terminal-dark">
                        Consulting
                      </option>
                      <option value="other" className="bg-terminal-dark">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-terminal-green/70 mb-2"
                    >
                      <span className="text-terminal-green/50">$</span> message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-terminal-green/30 bg-terminal-dark text-terminal-green focus:ring-1 focus:ring-terminal-green focus:border-terminal-green transition-all resize-none font-mono text-sm placeholder:text-terminal-green/30"
                      placeholder="// Write your message here..."
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
                        sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        ./send_message
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
