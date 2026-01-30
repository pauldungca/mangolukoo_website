import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFA500 0%, #FF6B00 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo and Brand */}
          <Link to="/" className="group mb-3">
            <div className="flex items-center space-x-2">
              <img
                src="images/MLlogo.png"
                alt="MangoLukoo Logo"
                className="h-12 w-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              />
              <span className="text-2xl font-bold text-white drop-shadow-lg group-hover:tracking-wider transition-all duration-300">
                MangoLukoo
              </span>
            </div>
          </Link>

          <p className="text-white/95 text-sm font-medium mb-4 max-w-xl leading-relaxed">
            Your favorite destination for fresh and delicious mango treats
          </p>

          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/Mangolukoodapdap"
              className="group relative"
              aria-label="Facebook"
              target="_blank"
            >
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white flex items-center justify-center transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <svg
                  className="w-4 h-4 text-white group-hover:text-mango-orange transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </a>
          </div>

          <div className="w-full border-t border-white/30 pt-3">
            <p className="text-white/90 text-xs font-medium">
              &copy; {currentYear} MangoLukoo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
