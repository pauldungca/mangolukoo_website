import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Branches", path: "/branches" },
    { name: "Menu", path: "/menu" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Events", path: "/events" },
    { name: "Franchise", path: "/franchise" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <img src="images/MLlogo.png" alt="Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-gray-800 group-hover:text-mango-orange transition-colors duration-300">
              MangoLukoo
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    text-lg font-medium transition-all duration-300 relative
                    pb-1 inline-block
                    ${
                      isActive(item.path)
                        ? "text-mango-orange"
                        : "text-gray-700"
                    }
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
        </div>
      </nav>
    </header>
  );
}
