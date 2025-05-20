import { Linkedin, Github, Instagram } from "lucide-react";
import LogoFooter from "../assets/img/petanikode-footerlogo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-800 h-full pb-10 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3">
          <div className="mb-6 md:mb-0">
            <img src={LogoFooter} alt="" width={200}/>
            <p className=" mt-2">
              Tempat belajar budidaya code (coding) dengan tutorial yang gampang
              dipahami.
            </p>
          </div>
        
          <div className="w-full flex items-start lg:justify-center">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:gap{5">
            <nav className="footer1 flex flex-col">
              <h3 className="text-xl mb-4 font-bold">Belajar</h3>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Artikel</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Buku</a>
            </nav>

            <nav className="footer2 flex flex-col">
              <h3 className="text-xl mb-4 font-bold"> Popular Tutorial</h3>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial Java</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial Bahasa C</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial Javascript</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial PHP</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Tutorial Python</a>
            </nav>

            <nav className="footer3 flex flex-col">
              <h3 className="text-xl mb-4 font-bold">Social Media</h3>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Facebook Page</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Instagram</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Twitter</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Youtube Channel</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Telegram Channel</a>
            </nav>

            <div className="footer4 flex flex-col">
              <h3 className="text-xl mb-4 font-bold ">Petani Kode</h3>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">About</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">FAQs</a>
              <a href="" className="font-medium py-1 md:py-0 hover:text-teal-400 text-slate-300">Contact</a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-600 mt-8 pt-5 flex flex-col justify-between items-center">
        <span className="text-sm mb-4">Ikuti Kami di</span>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/andiniekalisnawati/"
            className="text-gray-400 hover:text-primary/80 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/AndiniEkaLisnawati"
            className="text-gray-400 hover:text-primary/80 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/sy.andnnn"
            className="text-gray-400 hover:text-primary/80 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="text-white text-sm mt-3">
          &copy; {new Date().getFullYear()} Andiin
        </p>
        <p className="text-white text-sm  md:mt-0">
          Made with <span className="text-primary">♥</span> by Me using React vite
        </p>
      </div>
    </footer>
  );
}
