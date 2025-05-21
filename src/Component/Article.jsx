import React from "react";
import PostCard from "./Postcard";

const Article = () => {
  return (
    <div>
      <div class="container mx-auto px-4 lg:max-w-7xl pt-10">
        <div class="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm mb-2">
          Kategori
        </div>
        <h2 class="text-3xl text-black dark:text-white font-bold tracking-tight mb-2">
          Mau belajar apa hari ini?
        </h2>
        <p class="text-lg mb-8 text-slate-500 dark:text-slate-300">
          Temukan tutorial berdasarkan minatmu.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            class="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm"
            href="/kategori/pemrograman"
          >
            <div>
              <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg
                  class="h-6 w-6 stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
              Basic Programming
            </h3>
            <div class="flex items-center">
              <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                Baca tutorial dasar-dasar pemrograman menggunakan C, C++, C#,
                Java, Javascript, dan masih banyak lagi.
              </p>
              <span>
                <svg
                  class="h-6 w-6 ml-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
          <a
            href=""
            class="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm"
          >
            <div>
              <span class="inline-flex items-center justify-center p-2 bg-orange-500 rounded-md shadow-lg">
                <svg
                  class="h-6 w-6 stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657.0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657.0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
              Web Programming
            </h3>
            <div class="flex items-center">
              <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP,
                MySQL, Codeigniter, React, dan masih banyak lagi.
              </p>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
          <a
            href=""
            class="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm"
          >
            <div>
              <span class="inline-flex items-center justify-center p-2 bg-cyan-500 rounded-md shadow-lg">
                <svg
                  class="h-6 w-6 stroke-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </span>
            </div>
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
              Tutorial Lainnya
            </h3>
            <div class="flex items-center">
              <p class="text-slate-500 dark:text-slate-300 mt-2 text-sm">
                Baca tutorial dalam kategori lainnya seperti Mobile programming,
                Game programming, IoT, Blockhain, dan masih banyak lagi.
              </p>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
