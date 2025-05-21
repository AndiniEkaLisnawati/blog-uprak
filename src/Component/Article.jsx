import React from "react";

const Article = () => {
  return (
    <div id="Tutorial" className="container mx-auto px-4 lg:max-w-7xl pt-10">
      <div className="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm mb-2">
        Kategori
      </div>
      <h2 className="text-3xl text-black dark:text-white font-bold tracking-tight mb-2">
        Mau belajar apa hari ini?
      </h2>
      <p className="text-lg mb-8 text-slate-500 dark:text-slate-300">
        Temukan tutorial berdasarkan minatmu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
            Basic Programming
          </h3>
          <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#, Java, Javascript, dan masih banyak lagi.
          </p>
        </div>

        {/* Card 2 */}
        <div className="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-orange-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
            Web Programming
          </h3>
          <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak lagi.
          </p>
        </div>

        {/* Card 3 */}
        <div className="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg transition-all">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-cyan-500 rounded-md shadow-lg">
              <svg
                className="h-6 w-6 stroke-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
            Tutorial Lainnya
          </h3>
          <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
            Baca tutorial dalam kategori lainnya seperti Mobile programming, Game programming, IoT, Blockchain, dan masih banyak lagi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
