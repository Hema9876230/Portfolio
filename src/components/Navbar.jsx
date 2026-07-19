import { useState, useEffect, useRef } from "react";
import logo from "../assets/Logo.png";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const timerHide = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Home section (first screen)
      if (currentScrollY < window.innerHeight * 0.8) {
        setVisible(true);

        if (timerHide.current) {
          clearTimeout(timerHide.current);
        }

        return;
      }

      // Other sections
      setVisible(true);

      if (timerHide.current) {
        clearTimeout(timerHide.current);
      }

      timerHide.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Run once on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timerHide.current) {
        clearTimeout(timerHide.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 z-50 transform transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8"
          />

          <div className="hidden sm:block text-xl font-bold text-white">
            Hema
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="block lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Reach Out Button */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 px-5 py-2 font-medium text-white shadow-lg transition-opacity duration-300 hover:opacity-90"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}

