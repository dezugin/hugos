/* eslint-disable @next/next/no-img-element */
"use client";

import {
  BookOpen,
  ExternalLink,
  Terminal,
  BookMarked,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

interface ReadingProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Reading({ locale, dict }: ReadingProps) {
  return (
    <section id="reading" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> {dict.reading.command}
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <BookMarked className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">305</div>
            <div className="text-green-600/60 text-sm">
              {dict.reading.books_read}
            </div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <BookOpen className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400">6</div>
            <div className="text-green-600/60 text-sm">
              {dict.reading.currently_reading}
            </div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-400">26/50</div>
            <div className="text-green-600/60 text-sm">
              {dict.reading.challenge}
            </div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">57</div>
            <div className="text-green-600/60 text-sm">
              {dict.reading.friends}
            </div>
          </div>
        </div>

        {/* Goodreads Widgets Section */}
        <div className="mb-8">
          <h3 className="text-lg font-mono text-green-400 mb-6 flex items-center gap-2">
            <span className="text-green-600">{">"}</span>{" "}
            {dict.reading.goodreads_widgets}
          </h3>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* User Updates Widget */}
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden flex justify-center">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                #customize-list{
                  float:left;
                  margin-left:20px;
                  list-style:none;
                }
                #gr_updates_widget{
                  float:left;
                  border-radius: 10px;
                  background-color:#f5f5f5;
                  border:solid #22c55e 3px;
                  -webkit-box-shadow: 0px 0px 8px 2px rgba(34, 197, 94, 0.3),
                  inset 0px 0px 0px 1px rgba(34, 197, 94, 0.2);
                  -moz-box-shadow: 0px 0px 8px 2px rgba(34, 197, 94, 0.3),
                  inset 0px 0px 0px 1px rgba(34, 197, 94, 0.2);
                  box-shadow: 0px 0px 8px 2px rgba(34, 197, 94, 0.3),
                  inset 0px 0px 0px 1px rgba(34, 197, 94, 0.2);
                  padding:15px;
                  width:320px;
                  height:380px;
                  overflow:hidden;
                }
                #gr_updates_widget iframe {
                  display: block;
                  border-radius: 6px;
                }
                #gr_footer{
                  margin-bottom:0px;
                  height:30px;
                  clear: both;
                }
                #gr_updates_widget p{
                  padding:0px;
                  margin:0;
                  font-size:14px;
                }
                #gr_footer img{
                  width:100px;
                  float:left;
                  opacity: 0.7;
                }
                #gr_footer img:hover{
                  opacity: 1;
                }
              `,
                }}
              />
              <div id="gr_updates_widget">
                <iframe
                  id="the_iframe"
                  sandbox=""
                  src="https://goodreads.com/widgets/user_update_widget?height=400&num_updates=5&user=26600451&width=300"
                  width="300"
                  height="330"
                  frameBorder="0"
                  title="Goodreads Updates"
                />
                <div id="gr_footer">
                  <a href="https://www.goodreads.com/">
                    <img
                      alt="Goodreads: Book reviews, recommendations, and discussion"
                      src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* 2026 Reading Challenge Widget */}
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                #gr_challenge_11680 {
                  border: 2px solid #22c55e40 !important;
                  border-radius: 10px;
                  padding: 10px;
                  background-color: #0a0a0a !important;
                  max-width: 100% !important;
                }
                #gr_challenge_progress_body_11680 {
                  font-family: monospace !important;
                  line-height: 1.6;
                  color: #22c55e !important;
                }
                #gr_challenge_progress_body_11680 h3 {
                  margin: 4px 0 10px;
                  text-align: center;
                }
                #gr_challenge_progress_body_11680 h3 a {
                  color: #4ade80 !important;
                  text-decoration: none;
                  font-size: 1.1em;
                }
                #gr_challenge_progress_body_11680 a {
                  color: #4ade80 !important;
                }
                #gr_challenge_progress_body_11680 .challengePic img {
                  border-radius: 8px;
                }
              `,
                }}
              />
              <div
                id="gr_challenge_11680"
                style={{
                  border: "2px solid rgba(34, 197, 94, 0.4)",
                  borderRadius: "10px",
                  padding: "10px",
                  maxWidth: "100%",
                  minHeight: "100px",
                }}
              >
                <div
                  id="gr_challenge_progress_body_11680"
                  style={{
                    fontSize: "12px",
                    fontFamily: "monospace",
                    lineHeight: "18px",
                  }}
                >
                  <h3
                    style={{
                      margin: "4px 0 10px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", fontSize: "1.1em" }}
                      rel="nofollow"
                      href="https://www.goodreads.com/challenges/11680-2026-reading-challenge"
                      className="text-green-400 hover:text-green-300"
                    >
                      2026 Reading Challenge
                    </a>
                  </h3>
                  <div className="challengePic">
                    <a
                      rel="nofollow"
                      href="https://www.goodreads.com/challenges/11680-2026-reading-challenge"
                    >
                      <img
                        alt="2026 Reading Challenge"
                        style={{
                          float: "left",
                          marginRight: "10px",
                          border: "0 none",
                          borderRadius: "8px",
                        }}
                        src="https://images.gr-assets.com/challenges/1764710439p2/11680.jpg"
                      />
                    </a>
                  </div>
                  <div className="text-green-400">
                    <a
                      rel="nofollow"
                      href="https://www.goodreads.com/user/show/26600451-hugo-souza"
                      className="text-green-400 hover:text-green-300"
                    >
                      Hugo
                    </a>{" "}
                    has read 26 books toward their goal of 50 books.
                  </div>
                  <div
                    style={{
                      width: "100px",
                      margin: "4px 5px 5px 0",
                      float: "left",
                      border: "1px solid #22c55e",
                      height: "8px",
                      overflow: "hidden",
                      backgroundColor: "#1a1a1a",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      style={{
                        width: "52%",
                        backgroundColor: "#22c55e",
                        float: "left",
                        height: "100%",
                      }}
                    >
                      <span style={{ visibility: "hidden" }}>hide</span>
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "90%",
                    }}
                    className="text-green-400"
                  >
                    <a
                      rel="nofollow"
                      href="https://www.goodreads.com/user_challenges/69828451"
                      className="text-green-400 hover:text-green-300"
                    >
                      26 of 50 (52%)
                    </a>
                  </div>
                  <div
                    style={{ textAlign: "right", clear: "both" }}
                    className="pt-2"
                  >
                    <a
                      style={{ textDecoration: "none", fontSize: "10px" }}
                      rel="nofollow"
                      href="https://www.goodreads.com/user_challenges/69828451"
                      className="text-green-500/60 hover:text-green-400"
                    >
                      view books
                    </a>
                  </div>
                </div>
              </div>
              <Script
                src="https://www.goodreads.com/user_challenges/widget/26600451-hugo-souza?challenge_id=11680&v=2"
                strategy="lazyOnload"
              />
            </div>
          </div>

          {/* Read Shelf Badge */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.goodreads.com/review/list/26600451?shelf=read"
              title="Hugo Souza-Almeida's book recommendations, liked quotes, book clubs, book lists (read shelf)"
              rel="nofollow"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                alt="Hugo Souza-Almeida's book recommendations"
                src="https://s.gr-assets.com/images/badge/badge1.jpg"
                className="rounded"
              />
            </a>
          </div>
        </div>

        {/* Terminal Summary - Reading Habits */}
        <div className="mt-8 bg-gray-950 border border-green-900/50 rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-green-900/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-green-600/60 text-sm font-mono ml-2">
              {dict.reading.reading_habits}
            </span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <p className="text-green-600">
              <span className="text-green-500">$</span> cat{" "}
              {dict.reading.reading_interests}
            </p>
            <p className="text-green-400/80">
              {dict.reading.topics}:{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR" ? "Ciência Política" : "Political Science"}
              </span>
              ,{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR" ? "História" : "History"}
              </span>
              ,{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR"
                  ? "Inteligência/Espionagem"
                  : "Intelligence/Espionage"}
              </span>
              ,{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR" ? "Psicologia" : "Psychology"}
              </span>
              ,{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR" ? "Filosofia" : "Philosophy"}
              </span>
              ,{" "}
              <span className="text-cyan-400">
                {locale === "pt-BR"
                  ? "Autodesenvolvimento"
                  : "Self-Development"}
              </span>
            </p>
            <p className="text-green-600 mt-4">
              <span className="text-green-500">$</span> wc -l ~/books/read.txt
            </p>
            <p className="text-green-400/80">305 {dict.reading.books_count}</p>
          </div>
        </div>

        {/* Goodreads Profile Link */}
        <div className="mt-8">
          <Link
            href="https://www.goodreads.com/user/show/26600451-hugo-souza"
            target="_blank"
            className="block bg-gray-950 border border-green-900/50 rounded-lg p-6 hover:border-green-500/50 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-green-400 font-bold font-mono">
                    {dict.reading.goodreads_profile}
                  </h4>
                  <p className="text-green-600/60 text-sm">
                    @hugo-souza • 305 ratings • 4.25 avg
                  </p>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
