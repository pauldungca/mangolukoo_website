import { useState, useEffect} from "react"; 
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
      hours: "Mon-Sun: 10:00 AM - -8:00 PM",
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
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 overflow-hidden">
        {/* Decorative Background Elements */}
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
            className="absolute -top-20 -left-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"
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
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"
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
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Location Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="inline-block"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Visit Our Branches
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
            >
              Find the nearest MangoLukoo location and enjoy our signature
              mango-based drinks made fresh daily
            </motion.p>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">4 Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Open Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Call for Orders</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Branches Section */}
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Map Container */}
              <div className="relative w-full h-80 overflow-hidden">
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

              {/* Branch Info */}
              <div className="p-8 space-y-5">
                {/* Branch Name */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    MangoLukoo
                    <span className="text-orange-600"> – {branch.name}</span>
                  </h3>
                </div>

                {/* Details Grid */}
                <div className="space-y-4">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1 p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Address
                      </p>
                      <p className="text-gray-600">{branch.address}</p>
                    </div>
                  </motion.div>

                  {/* Operating Hours */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1 p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors">
                      <Clock className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Operating Hours
                      </p>
                      <p className="text-gray-600">{branch.hours}</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="mt-1 p-2 bg-orange-100 rounded-lg group-hover/item:bg-orange-200 transition-colors">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Contact
                      </p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-gray-600 hover:text-orange-600 transition-colors"
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
