import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill in all required fields" });
      return;
    }

    // Simulate form submission
    setFormStatus({ type: "success", message: "Sending your message..." });
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({ type: "success", message: "Thank you for your message! We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: "", message: "" });
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "chuchayie30@gmail.com",
      action: "mailto:chuchayie30@gmail.com",
      description: "For inquiries and partnership"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+63 927 965 3490",
      action: "tel:+639279653490",
      description: "Call us directly"
    },
    {
      icon: "📍",
      title: "Main Branch",
      value: "San Nicolas Dapdap",
      description: "Blk 38 Lot 1, Bamban, Tarlac"
    },
    {
      icon: "⏰",
      title: "Business Hours",
      value: "9:00 AM - 9:00 PM",
      description: "Open daily including weekends"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Header Section - Mobile Responsive */}
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
            {/* Contact Icon - Smaller on mobile */}
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Heading - Responsive text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4"
            >
              Contact Us
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed px-2"
            >
              We're here to help! Reach out to us for any questions, feedback, or partnership opportunities
            </motion.p>

            {/* Feature Badges - Stack on mobile, row on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full w-full sm:w-auto justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Multiple Locations</span>
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
              fill="rgb(255 247 237)"
            />
          </svg>
        </div>
      </div>

      {/* Contact Content - Responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 max-w-7xl">
        {/* Contact Methods */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">
            Multiple Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{method.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">{method.title}</h3>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-orange-600 hover:text-orange-700 font-medium block mb-1 text-sm sm:text-base break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">{method.value}</p>
                )}
                <p className="text-gray-500 text-xs sm:text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold">Send us a message</h2>
              <p className="text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base">We'll get back to you within 24 hours</p>
            </div>
            
            <div className="p-6 sm:p-8">
              <AnimatePresence>
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mb-5 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm sm:text-base ${
                      formStatus.type === "error" 
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-green-50 text-green-700 border border-green-200"
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all text-sm sm:text-base"
                      placeholder="+63 927 965 3490"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 sm:mb-2 font-medium text-sm sm:text-base">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none text-sm sm:text-base"
                    placeholder="How can we help you today?"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg sm:rounded-xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                >
                  {formStatus.type === "success" && formStatus.message.includes("Sending") ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Quick Contact */}
          <div className="flex flex-col space-y-6 sm:space-y-7 md:space-y-8">
            {/* Main Contact Info */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Our Main Location</h3>
              
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">San Nicolas Dapdap Main</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Blk 38 Lot 1, San Nicolas Dapdap, Bamban, Tarlac</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">⏰</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Business Hours</h4>
                    <p className="text-gray-600 text-sm sm:text-base">9:00 AM - 9:00 PM Daily</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Open 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Contact Number</h4>
                    <a href="tel:+639279653490" className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base break-all">
                      +63 927 965 3490
                    </a>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Available during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Need Immediate Assistance?</h3>
              <p className="text-orange-100 mb-4 sm:mb-6 text-sm sm:text-base">Contact us directly through these channels:</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.a
                  href="tel:+639279653490"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white text-orange-600 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-center hover:shadow-xl transition-all text-sm sm:text-base"
                >
                  📞 Call Now
                </motion.a>
                <motion.a
                  href="mailto:chuchayie30@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="bg-orange-700 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl text-center hover:bg-orange-800 transition-all text-sm sm:text-base"
                >
                  📧 Email Us
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}