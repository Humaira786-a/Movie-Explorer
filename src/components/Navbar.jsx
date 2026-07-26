import { Link, NavLink } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import DarkModeToggle from "./DarkModeToggle";

function Navbar({ openSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-300
          backdrop-blur-md
          ${
            scrolled
              ? "bg-white dark:bg-gray-950/90 shadow-xl py-3"
              : "bg-transparent py-5"
          }
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/clapperboard_3355866.png"
              alt="Logo"
              className={`
                transition-all
                duration-300
                w-12
                h-12
                sm:w-16
                sm:h-16
                ${
                  scrolled
                    ? "md:w-14 md:h-14"
                    : "md:w-20 md:h-20"
                }
              `}
            />

            <span
              className={`
                font-bold
                text-red-500
                transition-all
                duration-300
                text-xl
                sm:text-2xl
                md:${scrolled ? "text-2xl" : "text-3xl"}
              `}
            >
              Movie
              <span className="text-red-300">
                Explorer
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-red-600  hover:bg-red-600 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-red-600  hover:bg-red-600 hover:text-white"
                }`
              }
            >
              <FaHeart />
              Favorites
            </NavLink>

            <button
              onClick={openSearch}
              className="
                p-3
                rounded-full
                bg-red-600
                text-white
                hover:scale-110
                transition
              "
            >
              <FaSearch />
            </button>

            <DarkModeToggle />
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={openSearch}
              className="text-red-600 text-xl"
            >
              <FaSearch />
            </button>

            <DarkModeToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-red-600 text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            overflow-hidden
            transition-all
            duration-300
            ${
              menuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              bg-white
              dark:bg-gray-900
              shadow-xl
              px-6
              py-6
              space-y-5
            "
          >
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block  font-semibold hover:bg-red-300 hover:text-white text-lg  text-red-600"
            >
            Home
            </NavLink>

            <NavLink
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className="block  font-semibold hover:bg-red-300 hover:text-white text-lg  text-red-600"
            >
            Favorites
            </NavLink>

            <button
              onClick={() => {
                openSearch();
                setMenuOpen(false);
              }}
              className="
                flex
                items-center
                gap-3
                text-lg
                
                text-red-600
              "
            >
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-24 bg-white font-semibold hover:bg-red-300 hover:text-white  dark:bg-black"></div>
    </>
  );
}

export default Navbar;