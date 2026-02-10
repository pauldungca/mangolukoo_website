import { useState } from "react";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Mango Festival 2026",
      date: "March 15-17, 2026",
      image: "images/products/shake/mangomix.png",
      description: "Join us for our annual Mango Festival! Enjoy exclusive discounts, new flavor tastings, and live music performances throughout the weekend.",
    },
    {
      id: 2,
      title: "Summer Shake Series",
      date: "April 1 - May 31, 2026",
      image: "images/products/shake/strawberry.png",
      description: "Beat the heat with our limited-edition Summer Shake Series featuring 4 exclusive tropical fruit combinations.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Enhanced Header Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
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
            {/* Event Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                bounce: 0.5,
              }}
              className="inline-block"
            >
              <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Events & Promos
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
            >
              Join us for exciting happenings, special promotions, and exclusive experiences throughout the year
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 pt-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Limited Time Offers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="font-semibold">All Branches</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="font-semibold">Exclusive Perks</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave - Matching Menu Page */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(255 247 237)"
            />
          </svg>
        </div>
      </div>

      {/* Rest of your Events page content remains the same... */}
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative overflow-hidden h-80">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 text-sm font-semibold rounded-full border border-orange-200">
                      {event.date}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {event.title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      Learn More & Register
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-50/80 via-white to-orange-50/80 py-16 border-t border-orange-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Stay in the Loop
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Subscribe to get exclusive early access to events, special promotions, and member-only offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}