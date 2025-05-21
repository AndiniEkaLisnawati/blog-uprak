import { useState, useEffect } from "react";
import { Menu, X, Flower2 } from "lucide-react";
import PetaniKodeLogo from "../assets/img/petanikode-logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlinePlay } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Header({
  activeSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      className={`fixed w-full top-0 bg-teal-600 dark:bg-teal-900 z-50 shadow-sm transition-all duration-300 ${
        isScrolled ? "py-3" : "py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between lg:justify-start items-center">
          {/* Logo/Name */}
          <a
            href="#home"
            className="font-poppins font-bold text-xl text-primary flex items-center"
          >
            <img src={PetaniKodeLogo} alt="" width={35} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-90 flex pl-2 text-white dark:text-w">
            <div className="navbar flex space-x-1 text-white item">
              <a
                href="#home"
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                <IoHomeOutline className="text-xl" />
                <span className="font-semibold">Home</span>
              </a>
              <a
                href="#kelas"
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                <HiOutlinePlay className="text-xl"></HiOutlinePlay>
                <span className="font-semibold">Kelas</span>
              </a>
              <a
                href="#kelas"
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                <FaRegFileAlt className="text-xl "></FaRegFileAlt>
                <span className="font-semibold">Tutorial</span>
              </a>
              <a
                href="#kelas"
                className="p-1 gap-1 rounded px-4 py-1 
                bg-teal-600 hover:bg-teal-900 
                dark:bg-teal-900 dark:hover:bg-teal-600
                focus:ring-2 focus:ring-teal-400 
                active:bg-teal-500 
                flex items-center gap-1 font-semibold"
              >
                <FiBookOpen className="text-xl"></FiBookOpen>
                <span className="font-semibold">Buku</span>
              </a>
              <a
                href="#kelas"
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                <FaDiscord className="text-xl"></FaDiscord>
                <span>Discord</span>
              </a>
            </div>

            <div className="navbar flex gap-1">
              <a
                href=""
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                <IoSearchOutline size={20}></IoSearchOutline>
              </a>
              <button
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle Dark Mode"
                className="p-1 gap-1 rounded px-4 py-1 
  bg-teal-600 hover:bg-teal-900 
  dark:bg-teal-900 dark:hover:bg-teal-600
  focus:ring-2 focus:ring-teal-400 
  active:bg-teal-500 
  flex items-center gap-1 font-semibold"
              >
                {isDark ? (
                  <MdOutlineLightMode size={20} />
                ) : (
                  <MdOutlineDarkMode size={20} />
                )}
              </button>
              <button
                type="button"
                className="lg:items-center px-3 py-2 bg-teal-500 hover:bg-teal-900 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500"
              >
                Join Newsletter
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="md:hidden p-1 rounded px-4 py-1 pl-50
            bg-teal-600
            dark:bg-teal-900 font-semibold text-white"
          >
            {isDark ? (
              <MdOutlineLightMode size={20} />
            ) : (
              <MdOutlineDarkMode size={20} />
            )}
          </button>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-pink focus:outline-none"
            style={{ color: "#CCFBF1" }}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-1">
              {["Home", "Kelas", "Tutorial", "Buku", "Discord"].map(
                (section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`nav-link text-gray-700 hover:text-primary transition-colors duration-300 ${
                      activeSection === section ? "active" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
