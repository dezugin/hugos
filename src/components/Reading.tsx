"use client";

import { BookOpen, ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";

export default function Reading() {
  return (
    <section id="reading" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-green-400">
              <span className="text-green-600">$</span> cat reading_list.md
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Currently Reading - Goodreads Widget */}
          <div>
            <h3 className="text-lg font-mono text-green-400 mb-4 flex items-center gap-2">
              <span className="text-green-600">{">"}</span> currently_reading/
            </h3>
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden">
              <div className="rounded overflow-hidden [&_body]:!bg-transparent">
                <iframe
                  id="gr_currently_reading"
                  src="https://www.goodreads.com/widgets/user_update_widget?height=400&num_books=5&user=26600451&width=400"
                  width="100%"
                  height="420"
                  frameBorder="0"
                  className="rounded bg-white"
                  title="Goodreads Currently Reading"
                />
              </div>
              <Link
                href="https://www.goodreads.com/user/show/26600451-hugo-souza"
                target="_blank"
                className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all font-mono text-sm"
              >
                <BookOpen className="w-4 h-4" />
                View Full Profile on Goodreads
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Grid Stats Widget */}
          <div>
            <h3 className="text-lg font-mono text-green-400 mb-4 flex items-center gap-2">
              <span className="text-green-600">{">"}</span> reading_stats/
            </h3>
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden">
              <div className="rounded overflow-hidden">
                <iframe
                  id="gr_grid_widget"
                  src="https://www.goodreads.com/widgets/user_favorites_widget?height=400&num_books=20&user_id=26600451&width=400"
                  width="100%"
                  height="420"
                  frameBorder="0"
                  className="rounded bg-white"
                  title="Goodreads Favorites"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Summary */}
        <div className="mt-12 bg-gray-950 border border-green-900/50 rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/80 border-b border-green-900/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-green-600/60 text-sm font-mono ml-2">
              reading_habits.sh
            </span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <p className="text-green-600">
              <span className="text-green-500">$</span> cat
              reading_interests.txt
            </p>
            <p className="text-green-400/80">
              Topics: <span className="text-cyan-400">Political Science</span>,{" "}
              <span className="text-cyan-400">History</span>,{" "}
              <span className="text-cyan-400">Intelligence/Espionage</span>,{" "}
              <span className="text-cyan-400">Psychology</span>,{" "}
              <span className="text-cyan-400">Philosophy</span>,{" "}
              <span className="text-cyan-400">Self-Development</span>
            </p>
            <p className="text-green-600 mt-4">
              <span className="text-green-500">$</span> wc -l ~/books/read.txt
            </p>
            <p className="text-green-400/80">280+ books and counting</p>
          </div>
        </div>
      </div>
    </section>
  );
}
