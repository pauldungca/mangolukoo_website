import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Branches", path: "/branches" },
    { name: "Menu", path: "/menu" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Events", path: "/events" },
    { name: "Franchise", path: "/franchise" },
    { name: "Under Construction", path: "/under-construction" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/images/MLlogo.png"
              alt="Logo"
              className="h-12 sm:h-14 w-auto"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-mango-orange transition-colors">
              MangoLukoo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    text-base font-medium transition-all duration-300 relative
                    pb-1 inline-block
                    ${isActive(item.path) ? "text-mango-orange" : "text-gray-700"}
                    hover:text-mango-orange
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:w-0 after:h-0.5 after:bg-mango-orange after:rounded-full
                    after:transition-all after:duration-300
                    hover:after:w-full
                    ${isActive(item.path) ? "after:w-full" : ""}
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Animated Hamburger Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out
              ${menuOpen ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out
              ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out
              ${menuOpen ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>

        {/* Mobile Menu with Smooth Animation */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col space-y-3 border-t pt-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block py-2 text-base font-medium
                    ${isActive(item.path) ? "text-mango-orange" : "text-gray-700"}
                    hover:text-mango-orange
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
