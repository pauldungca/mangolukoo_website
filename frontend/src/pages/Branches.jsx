import { useState, useEffect } from "react"; 
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export default function Branches() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const branches = [
    {
      id: 1,
      name: "Main Branch",
      address: "1 San Nicolas, Dapdap, Bamban, Tarlac",
      hours: "Mon-Sun: 9:00 AM - 9:00 PM",
      phone: "0927 965 3490",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3848.7796909518524!2d120.51961947414885!3d15.279805585291037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE2JzQ3LjMiTiAxMjDCsDMxJzE5LjkiRQ!5e0!3m2!1sen!2sph!4v1769827223010!5m2!1sen!2sph",
    },
    {
      id: 2,
      name: "Mabalacat Branch",
      address: "Madapdap, Mabalacat City, Pampanga",
      hours: "Mon-Sun: 9:00 AM - 5:00 PM",
      phone: "0927 965 3490",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15399.124064908572!2d120.60390463417758!3d15.22514571541477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ec221e2386db%3A0x985f254532629df3!2sMadapdap%20Resettlement%2C%203%20San%20Fernando%20Ave%2C%20Mabalacat%20City%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1769828262292!5m2!1sen!2sph",
    },
    {
      id: 3,
      name: "Bamban Branch",
      address: "Mc Arthur Hiway Brgy, Anupul, Bamban, 2317 Tarlac",
      hours: "Mon-Sun: 10:00 AM - 8:00 PM",
      phone: "0927 965 3490",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.6315956834396!2d120.56770223808633!3d15.287873544053587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396eb6685256cfb%3A0x923886f73ee19a1a!2sMangoLukoo!5e0!3m2!1sen!2sph!4v1769828560112!5m2!1sen!2sph",
    },
    {
      id: 4,
      name: "Xevera Branch",
      address: "Greatmall Xevera, Mabalacat, Pampanga",
      hours: "Mon-Sun: 9:00 AM - 10:00 PM",
      phone: "0927 965 3490",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5245.653730335929!2d120.56356864689431!3d15.245822504880117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396edb9dc14ecc5%3A0xc1fd1f9afb74a276!2sGREATMALL%20OF%20CENTRAL%20LUZON!5e0!3m2!1sen!2sph!4v1769830047758!5m2!1sen!2sph",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Header - Mobile Responsive */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden">
        {/* Animated Background Elements - Responsive sizes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-10 md:-top-20 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-orange-400/30 rounded-full blur-2xl md:blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-20 w-48 md:w-96 h-48 md:h-96 bg-orange-300/20 rounded-full blur-2xl md:blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-xl md:blur-2xl"
          />
        </div>

        {/* Content - Responsive padding and text */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-12 sm:py-16 md:py-20 lg:py-24 space-y-4 sm:space-y-5 md:space-y-6"
          >
            {/* Location Icon - Smaller on mobile */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </motion.div>

            {/* Heading - Responsive text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4"
            >
              Visit Our Branches
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Find the nearest MangoLukoo location and enjoy our signature
              mango-based drinks made fresh daily
            </motion.p>

            {/* Stats or Features - Stack on mobile, row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">4 Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Open Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Call for Orders</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave - Responsive height */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 md:h-16 lg:h-20"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Branches Section - Responsive Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Map Container - Responsive height */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <iframe
                  src={branch.mapSrc}
                  className="w-full h-full border-0 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Branch Info - Responsive padding */}
              <div className="p-5 sm:p-6 md:p-7 lg:p-8 space-y-4 sm:space-y-5">
                {/* Branch Name */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    MangoLukoo
                    <span className="text-orange-600"> – {branch.name}</span>
                  </h3>
                </div>

                {/* Details Grid */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                  >
                    <div className="mt-1 p-1.5 sm:p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Address
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {branch.address}
                      </p>
                    </div>
                  </motion.div>

                  {/* Operating Hours */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                  >
                    <div className="mt-1 p-1.5 sm:p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Operating Hours
                      </p>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {branch.hours}
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-2 sm:gap-3 group/item"
                  >
                    <div className="mt-1 p-1.5 sm:p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
                        Contact
                      </p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-xs sm:text-sm md:text-base text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}