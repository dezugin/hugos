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

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <BookMarked className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">282</div>
            <div className="text-green-600/60 text-sm">Books Read</div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <BookOpen className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400">6</div>
            <div className="text-green-600/60 text-sm">Currently Reading</div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-400">3/50</div>
            <div className="text-green-600/60 text-sm">2026 Challenge</div>
          </div>
          <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 text-center">
            <Users className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">57</div>
            <div className="text-green-600/60 text-sm">Friends</div>
          </div>
        </div>

        {/* Goodreads Widgets Section */}
        <div className="mb-8">
          <h3 className="text-lg font-mono text-green-400 mb-6 flex items-center gap-2">
            <span className="text-green-600">{">"}</span> goodreads_widgets/
          </h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Currently Reading Widget */}
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .gr_custom_container_1769884540 {
                  border: 1px solid #22c55e40;
                  border-radius: 10px;
                  padding: 10px 5px 10px 5px;
                  background-color: #0a0a0a;
                  color: #22c55e;
                  width: 100%;
                }
                .gr_custom_header_1769884540 {
                  border-bottom: 1px solid #22c55e40;
                  width: 100%;
                  margin-bottom: 5px;
                  text-align: center;
                  font-size: 110%;
                }
                .gr_custom_header_1769884540 a {
                  color: #4ade80 !important;
                  text-decoration: none;
                  font-family: monospace;
                }
                .gr_custom_each_container_1769884540 {
                  width: 100%;
                  clear: both;
                  margin-bottom: 10px;
                  overflow: auto;
                  padding-bottom: 4px;
                  border-bottom: 1px solid #22c55e30;
                }
                .gr_custom_book_container_1769884540 {
                  overflow: hidden;
                  height: 60px;
                  float: left;
                  margin-right: 4px;
                  width: 39px;
                }
                .gr_custom_book_container_1769884540 img {
                  border-radius: 4px;
                }
                .gr_custom_title_1769884540 a {
                  color: #4ade80 !important;
                  text-decoration: none;
                  font-size: 12px;
                }
                .gr_custom_author_1769884540 {
                  font-size: 10px;
                  color: #22c55e99;
                }
                .gr_custom_author_1769884540 a {
                  color: #22c55e99 !important;
                  text-decoration: none;
                }
                .gr_custom_tags_1769884540 {
                  font-size: 10px;
                  color: #22c55e60;
                }
                .gr_custom_rating_1769884540 {
                  float: right;
                }
              `,
                }}
              />
              <div id="gr_custom_widget_1769884540">
                <div className="gr_custom_container_1769884540">
                  <h2 className="gr_custom_header_1769884540">
                    <a
                      rel="nofollow"
                      href="https://www.goodreads.com/review/list/26600451-hugo-souza?shelf=currently-reading&utm_medium=api&utm_source=custom_widget"
                    >
                      Currently Reading
                    </a>
                  </h2>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="Polymath: Master Multiple Disciplines, Learn New Skills, Think Flexibly, and Become Extraordinary Autodidact"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/8317500282?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="Polymath"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589005551l/53353009._SY75_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/8317500282?utm_medium=api&utm_source=custom_widget"
                      >
                        Polymath: Master Multiple Disciplines
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/16593818.Peter_Hollins"
                      >
                        Peter Hollins
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="The U.S. Army Leadership Field Manual FM 22-100"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/8054850898?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="Army Leadership Field Manual"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347416521l/6848260._SX50_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/8054850898?utm_medium=api&utm_source=custom_widget"
                      >
                        The U.S. Army Leadership Field Manual
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/5737205.Leadership_Center_for_Army_and_Us_Army_"
                      >
                        U.S. Army
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="Gödel, Escher, Bach: An Eternal Golden Braid"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/6947540957?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="Gödel, Escher, Bach"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547125681l/24113._SY75_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/6947540957?utm_medium=api&utm_source=custom_widget"
                      >
                        Gödel, Escher, Bach: An Eternal Golden Braid
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/3034502.Douglas_R_Hofstadter"
                      >
                        Douglas R. Hofstadter
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="In Search of Lost Time"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/5294309113?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="In Search of Lost Time"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1657567516l/18796._SX50_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/5294309113?utm_medium=api&utm_source=custom_widget"
                      >
                        In Search of Lost Time
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/233619.Marcel_Proust"
                      >
                        Marcel Proust
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="Капитанская дочка"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/4404485320?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="Капитанская дочка"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1503238276l/36074940._SY75_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/4404485320?utm_medium=api&utm_source=custom_widget"
                      >
                        Капитанская дочка
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/16070.Alexander_Pushkin"
                      >
                        Alexander Pushkin
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div className="gr_custom_each_container_1769884540">
                    <div className="gr_custom_book_container_1769884540">
                      <a
                        title="Refactoring: Improving the Design of Existing Code"
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/4384460400?utm_medium=api&utm_source=custom_widget"
                      >
                        <img
                          alt="Refactoring"
                          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386925632l/44936._SX50_.jpg"
                        />
                      </a>
                    </div>
                    <div className="gr_custom_title_1769884540">
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/review/show/4384460400?utm_medium=api&utm_source=custom_widget"
                      >
                        Refactoring: Improving the Design of Existing Code
                      </a>
                    </div>
                    <div className="gr_custom_author_1769884540">
                      by{" "}
                      <a
                        rel="nofollow"
                        href="https://www.goodreads.com/author/show/25215.Martin_Fowler"
                      >
                        Martin Fowler
                      </a>
                    </div>
                    <div className="gr_custom_tags_1769884540">
                      tagged: currently-reading
                    </div>
                  </div>
                  <div style={{ clear: "both" }} />
                  <div className="text-center mt-4">
                    <a
                      rel="nofollow"
                      href="https://www.goodreads.com/"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <img
                        alt="goodreads.com"
                        src="https://s.gr-assets.com/images/widget/widget_logo.gif"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <Script
                src="https://www.goodreads.com/review/custom_widget/26600451.Hugo's%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=10&order=d&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=1&show_tags=1&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1769884540&widget_text_color=000000&widget_title_size=medium&widget_width=medium"
                strategy="lazyOnload"
              />
            </div>

            {/* Books Read Grid Widget */}
            <div className="bg-gray-950 border border-green-900/50 rounded-lg p-4 overflow-hidden">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                .gr_grid_container {
                  display: flex;
                  flex-wrap: wrap;
                  gap: 4px;
                  justify-content: center;
                }
                .gr_grid_book_container {
                  float: left;
                  width: 39px;
                  height: 60px;
                  padding: 0px 0px;
                  overflow: hidden;
                }
                .gr_grid_book_container img {
                  border-radius: 2px;
                  transition: transform 0.2s;
                }
                .gr_grid_book_container img:hover {
                  transform: scale(1.1);
                }
                #gr_grid_widget_1769885210 h2 a {
                  color: #4ade80 !important;
                  text-decoration: none;
                  font-family: monospace;
                  font-size: 14px;
                }
                #gr_grid_widget_1769885210 .gr_grid_branding {
                  color: #22c55e80 !important;
                  font-size: 11px;
                }
              `,
                }}
              />
              <div id="gr_grid_widget_1769885210">
                <h2 className="text-center mb-4 border-b border-green-900/50 pb-2">
                  <a
                    rel="nofollow"
                    href="https://www.goodreads.com/review/list/26600451-hugo-souza?shelf=read&utm_medium=api&utm_source=grid_widget"
                  >
                    Sorted by Rating (5 Stars)
                  </a>
                </h2>
                <div className="gr_grid_container">
                  <div className="gr_grid_book_container">
                    <a
                      title="The 7 Habits of Highly Effective People"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/36072.The_7_Habits_of_Highly_Effective_People"
                    >
                      <img
                        alt="The 7 Habits of Highly Effective People"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784l/36072._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Sword and the Shield"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/10756.The_Sword_and_the_Shield"
                    >
                      <img
                        alt="The Sword and the Shield"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1440642067l/10756._SX50_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Full Catastrophe Living"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/41016873-full-catastrophe-living"
                    >
                      <img
                        alt="Full Catastrophe Living"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1533075280l/41016873._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The True Believer"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/15916.The_True_Believer"
                    >
                      <img
                        alt="The True Believer"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410129044l/15916._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Origins of Totalitarianism"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/396931.The_Origins_of_Totalitarianism"
                    >
                      <img
                        alt="The Origins of Totalitarianism"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565095964l/396931._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Influence: The Psychology of Persuasion"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/56419468-influence"
                    >
                      <img
                        alt="Influence: The Psychology of Persuasion"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608967434l/56419468._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The 33 Strategies of War"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/35289.The_33_Strategies_of_War"
                    >
                      <img
                        alt="The 33 Strategies of War"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388491606l/35289._SX50_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Poverty of Historicism"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/61553.The_Poverty_of_Historicism"
                    >
                      <img
                        alt="The Poverty of Historicism"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1700215769l/61553._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Chaos: Making a New Science"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/64582.Chaos"
                    >
                      <img
                        alt="Chaos: Making a New Science"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327941595l/64582._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Whoever Fights Monsters"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/79085.Whoever_Fights_Monsters"
                    >
                      <img
                        alt="Whoever Fights Monsters"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1434811915l/79085._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Machine That Changed the World"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/93903.The_Machine_That_Changed_the_World_"
                    >
                      <img
                        alt="The Machine That Changed the World"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387700892l/93903._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Art of War"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/99324.The_Art_of_War"
                    >
                      <img
                        alt="The Art of War"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366570851l/99324._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Portable Machiavelli"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/99325.The_Portable_Machiavelli"
                    >
                      <img
                        alt="The Portable Machiavelli"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347444710l/99325._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Intelligent Investor"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/106835.The_Intelligent_Investor"
                    >
                      <img
                        alt="The Intelligent Investor"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1409602421l/106835._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Inside Delta Force"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/115587.Inside_Delta_Force"
                    >
                      <img
                        alt="Inside Delta Force"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320416478l/115587._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Red Horizons"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/127570.Red_Horizons"
                    >
                      <img
                        alt="Red Horizons"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348690143l/127570._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="An Introduction to Zen Buddhism"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/129377.An_Introduction_to_Zen_Buddhism"
                    >
                      <img
                        alt="An Introduction to Zen Buddhism"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347365650l/129377._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="Fundamentals of Database Systems"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/161300.Fundamentals_of_Database_Systems"
                    >
                      <img
                        alt="Fundamentals of Database Systems"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387738082l/161300._SX50_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Discourses"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/99328.The_Discourses"
                    >
                      <img
                        alt="The Discourses"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1520802947l/99328._SY75_.jpg"
                      />
                    </a>
                  </div>
                  <div className="gr_grid_book_container">
                    <a
                      title="The Little Book of Common Sense Investing"
                      rel="nofollow"
                      href="https://www.goodreads.com/book/show/171127.The_Little_Book_of_Common_Sense_Investing"
                    >
                      <img
                        alt="The Little Book of Common Sense Investing"
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347673616l/171127._SX50_.jpg"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <a
                    className="gr_grid_branding"
                    rel="nofollow"
                    href="https://www.goodreads.com/user/show/26600451-hugo-souza"
                  >
                    Hugo Souza-Almeida&apos;s favorite books »
                  </a>
                </div>
              </div>
              <Script
                src="https://www.goodreads.com/review/grid_widget/26600451.sorted%20by%20my%20rating,%20SOP%20=%205%20stars?cover_size=small&hide_link=&hide_title=&num_books=200&order=d&shelf=read&sort=rating&widget_id=1769885210"
                strategy="lazyOnload"
              />
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
                    has read 0 books toward their goal of 50 books.
                  </div>
                  <div
                    style={{
                      width: "100px",
                      margin: "8px 5px 5px 0",
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
                        width: "0%",
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
                      0 of 50 (0%)
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
            <p className="text-green-400/80">282 books and counting</p>
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
                    Goodreads Profile
                  </h4>
                  <p className="text-green-600/60 text-sm">
                    @hugo-souza • 281 ratings • 4.35 avg
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
