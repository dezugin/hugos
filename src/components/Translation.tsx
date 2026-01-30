"use client";

import {
  Languages,
  FileText,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Document Translation",
    description:
      "Professional translation of legal, technical, and business documents with certified accuracy.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Legal Documents",
      "Technical Manuals",
      "Business Contracts",
      "Academic Papers",
    ],
  },
  {
    title: "Website Localization",
    description:
      "Complete website and software localization services, ensuring cultural adaptation and SEO optimization.",
    icon: Languages,
    color: "from-purple-500 to-pink-500",
    features: [
      "UI/UX Localization",
      "SEO Translation",
      "CMS Integration",
      "Cultural Adaptation",
    ],
  },
  {
    title: "Real-time Interpretation",
    description:
      "Professional interpretation services for conferences, meetings, and remote video calls.",
    icon: MessageSquare,
    color: "from-green-500 to-teal-500",
    features: [
      "Video Conferencing",
      "Business Meetings",
      "Conference Events",
      "Remote Support",
    ],
  },
];

const languagePairs = [
  { from: "English", to: "Spanish", flag1: "🇺🇸", flag2: "🇪🇸" },
  { from: "Spanish", to: "English", flag1: "🇪🇸", flag2: "🇺🇸" },
  { from: "English", to: "Portuguese", flag1: "🇺🇸", flag2: "🇧🇷" },
  { from: "Portuguese", to: "English", flag1: "🇧🇷", flag2: "🇺🇸" },
  { from: "Spanish", to: "Portuguese", flag1: "🇪🇸", flag2: "🇧🇷" },
  { from: "French", to: "English", flag1: "🇫🇷", flag2: "🇺🇸" },
];

const process = [
  {
    step: 1,
    title: "Request Quote",
    description: "Send your documents or project details",
  },
  {
    step: 2,
    title: "Review & Quote",
    description: "Receive a detailed quote within 24 hours",
  },
  {
    step: 3,
    title: "Translation",
    description: "Professional translation with quality assurance",
  },
  {
    step: 4,
    title: "Delivery",
    description: "Receive your translated documents on time",
  },
];

export default function Translation() {
  return (
    <section id="translation" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Translation Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Professional translation and localization services for your global
            needs
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg card-hover"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Language Pairs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Language Pairs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languagePairs.map((pair, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center gap-2 text-2xl mb-2">
                  <span>{pair.flag1}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span>{pair.flag2}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {pair.from} → {pair.to}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Translation?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote for your translation project. Fast turnaround,
            competitive rates, and certified quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="mailto:translations@example.com"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              translations@example.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
