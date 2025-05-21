import { Linkedin, Github, Instagram } from "lucide-react";
import LogoFooter from "../assets/img/petanikode-footerlogo.png";

export default function Footer() {
  return (
    <footer id="Discord" className="bg-slate-800 h-full pb-10 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3">
          <div className="mb-6 md:mb-0">
            <img src={LogoFooter} alt="" width={200} />
            <p className=" mt-2">
              Tempat belajar budidaya code (coding) dengan tutorial yang gampang
              dipahami.
            </p>
          </div>

          <div className="w-full flex items-start lg:justify-center">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap{5">
              <nav className="footer1 flex flex-col">
                <h3 className="text-xl mb-4 font-bold">Belajar</h3>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Artikel
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Buku
                </a>
              </nav>

              <nav className="footer2 flex flex-col">
                <h3 className="text-xl mb-4 font-bold"> Popular Tutorial</h3>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial Java
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial Bahasa C
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial Javascript
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial PHP
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Tutorial Python
                </a>
              </nav>

              <nav className="footer3 flex flex-col">
                <h3 className="text-xl mb-4 font-bold">Social Media</h3>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Facebook Page
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Instagram
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Twitter
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Youtube Channel
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Telegram Channel
                </a>
              </nav>

              <div className="footer4 flex flex-col">
                <h3 className="text-xl mb-4 font-bold ">Petani Kode</h3>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  About
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  FAQs
                </a>
                <a
                  href=""
                  className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-600 mt-8 pt-5 flex flex-col justify-between items-center">
        <span className="text-sm mb-4">Ikuti Kami di</span>
        <div className="my-4 flex gap-4 items-center justify-center flex-wrap">
          <a
            href=""
            className="inline-block hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white"
          >
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="#FFFFFF"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14.0 55.52 4.84 55.52 4.84v61h-31.28c-30.8.0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-block hover:bg-[#1da1f2] rounded-full p-2 bg-white/10 hover:text-white"
          >
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="#FFFFFF"
                d="M459.37 151.716c.325 4.548.32 9.097.325 13.645.0 138.72-105.583 298.558-298.558 298.558-59.452.0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055.0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421.0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391.0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04.0-57.828 46.782-104.934 104.934-104.934 30.213.0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-block hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white"
          >
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="telegram"
              role="img"
              viewBox="0 0 496 512"
            >
              <path
                fill="#FFFFFF"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-block hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white"
          >
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="#FFFFFF"
                d="M224.1 141c-63.6.0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1.0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9.0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9.0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9.0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9.0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8.0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
          <a
            href=""
            className="inline-block hover:bg-[#3b5998] rounded-full p-2 bg-white/10 hover:text-white"
          >
            <svg
              class="h-4 w-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="youtube"
              role="img"
              viewBox="0 0 576 512"
            >
              <path
                fill="#FFFFFF"
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78.0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
              ></path>
            </svg>
          </a>
        </div>
        
          <p className="text-white text-sm mt-3">
            &copy; {new Date().getFullYear()} Petani Kode
          </p>
          <p className="text-white text-sm  md:mt-0">
            Made with <span className="text-primary">❤️</span> by Me using React
            vite
          </p>

      </div>
    </footer>
  );
}
