import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/menu", label: "Our Menu" },
    { to: "/branches", label: "Branches" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-700 to-orange-600 text-white">
      <div className="container mx-auto px-6 py-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src="/images/MLlogo.png"
                  alt="MangoLukoo Logo"
                  className="h-12 w-auto"
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    Mango<span className="text-orange-200">Lukoo</span>
                  </h2>
                  <p className="text-orange-100 text-sm">Fresh Mango Delights</p>
                </div>
              </div>
            </Link>

            <p className="text-orange-50 text-sm leading-relaxed">
              Your destination for fresh, handcrafted mango delights.
            </p>

            <div className="pt-2">
              <a
                href="https://www.facebook.com/Mangolukoodapdap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-100 hover:text-white transition-colors text-sm"
              >
                <Facebook size={18} />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-100">Quick Links</h3>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-orange-50 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-100">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-orange-200 flex-shrink-0" />
                <p className="text-sm text-orange-50">
                  Dapdap, Bamban, Tarlac, Philippines
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-200 flex-shrink-0" />
                <a
                  href="tel:+639279653490"
                  className="text-sm hover:text-white transition-colors"
                >
                  +63 927 965 3490
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-200 flex-shrink-0" />
                <a
                  href="mailto:mangolukoo@gmail.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  mangolukoo@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-orange-100">Hours</h3>
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 text-orange-200 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white mb-1">Monday - Sunday</p>
                  <p className="text-orange-100">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Bar */}
        <div className="mt-1 bg-orange-700 py-8 border-t border-orange-700">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-1">

            {/* Developed By Inline */}
            <div className="flex justify-center items-center gap-3">
              <span className="text-orange-200 text-sm tracking-wide">
                Developed by
              </span>

              <a
                href="https://emberwebsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-100 opacity-90 transition-opacity"
              >
                <img
                  src="/images/ember-logo.png"
                  alt="Ember Web Solutions"
                  className="h-14 w-auto"
                />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-orange-200 text-sm">
              © {currentYear} MangoLukoo. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}