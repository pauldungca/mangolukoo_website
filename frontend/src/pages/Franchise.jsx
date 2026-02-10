import { useState } from "react";
import { motion } from "framer-motion";

export default function Franchise() {
  const [activeTab, setActiveTab] = useState("faqs");
  const [selectedPackage, setSelectedPackage] = useState("BASIC PACKAGE");

  const faqs = [
    {
      question: "How long does the franchise process take?",
      answer: "Typically 4-8 weeks from initial application to store opening, depending on location preparation."
    },
    {
      question: "Do I need previous business experience?",
      answer: "No, we provide comprehensive training and ongoing support to ensure your success."
    },
    {
      question: "What's included in the training?",
      answer: "We cover operations, customer service, inventory management, and marketing strategies."
    },
    {
      question: "Can I choose my own location?",
      answer: "Yes, we help you evaluate and select the best location for your Mango Lukoo store."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer marketing support, operational guidance, and regular updates to keep your business thriving."
    }
  ];

  const packages = [
    {
      name: "PLATINUM PACKAGE",
      price: "PHP 350,000",
      inclusions: [
        "Franchise Fee for 2 Years",
        "Store Design",
        "Initial Supplies worth ₱50,000",
        "Training",
        "1 year use of digital system"
      ]
    },
    {
      name: "BASIC PACKAGE",
      price: "PHP 450,000",
      inclusions: [
        "Franchise Fee for 2 Years",
        "1.8 meters wide Counter, Wares, Equipment",
        "Initial Supplies worth ₱50,000",
        "Training",
        "1 year use of digital system"
      ]
    },
    {
      name: "STANDARD PACKAGE",
      price: "PHP 490,000",
      inclusions: [
        "Franchise Fee for 2 Years",
        "1.5x1.5 Cart, Wares, Equipment",
        "Initial Supplies worth ₱50,000",
        "Training",
        "1 year use of digital system"
      ]
    },
    {
      name: "PREMIUM PACKAGE",
      price: "PHP 550,000",
      inclusions: [
        "Franchise Fee for 2 Years",
        "2.5 x 2.5 Cart, Wares, Equipment",
        "Initial Supplies worth ₱50,000",
        "Training",
        "1 year use of digital system"
      ]
    }
  ];

  const requirements = [
    "A completed Letter of Intent",
    "Two (2) valid IDs (SSS, voter's ID, Postal ID, Passport, PhilHealth, Pag-IBIG, or UMID)",
    "A fully accomplished Application Form",
    "Actual photos and measurements of the proposed area",
    "Draft Lease Offer or Contract from the lessor (if renting space)",
    "Bank Statements/Payrolls"
  ];

  const processSteps = [
    "Let's Meet! - Initial Interview",
    "Site Inspection",
    "Grant Meeting - Location Award",
    "Contract Signing and Payment",
    "Store Construction or Preparation",
    "Grand Opening Day!"
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
            {/* Franchise Icon */}
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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
              Mango Lukoo Franchising
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
            >
              Start your journey to become part of the Mango Lukoo family. We've made the process simple and exciting!
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
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="font-semibold">Proven Success</span>
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-semibold">Quick Setup</span>
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
                <span className="font-semibold">Full Support</span>
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

      {/* Tab Navigation */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md shadow-sm py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center overflow-x-auto">
            {["faqs", "packages", "requirements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-8 py-3 mx-2 rounded-full font-medium transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600"
                }`}
              >
                {tab === "faqs" ? "FAQs" : tab === "packages" ? "PACKAGES" : "REQUIREMENTS"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        
        {/* FAQs Section */}
        {activeTab === "faqs" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Packages Section */}
        {activeTab === "packages" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Investment Packages</h2>
            
            {/* Package Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {packages.map((pkg) => (
                <motion.button
                  key={pkg.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPackage(pkg.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedPackage === pkg.name
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-400"
                  }`}
                >
                  {pkg.name}
                </motion.button>
              ))}
            </div>

            {/* Selected Package Details */}
            {packages
              .filter(pkg => pkg.name === selectedPackage)
              .map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold">{pkg.price}</div>
                  </div>
                  
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-gray-800">INCLUSIONS:</h4>
                      {pkg.inclusions.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-xl transition-all"
                    >
                      SELECT THIS PACKAGE
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}

        {/* Requirements Section */}
        {activeTab === "requirements" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Franchise Requirements & Process</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Requirements Column */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">REQUIRED DOCUMENTS</h3>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Column */}
              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">FRANCHISE PROCESS</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">{step}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Mango Lukoo Journey?</h3>
              <p className="mb-6 text-orange-100">Submit your documents to: <strong>mangolukoo@gmail.com</strong></p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  REQUEST A CALLBACK
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join the Mango Lukoo Family Today!
            </h2>
            
            <p className="text-orange-100 text-lg">
              Don't miss this opportunity to own a successful business. Contact us now to get started.
            </p>

            <div className="pt-6">
              <p className="text-orange-200">
                Email us at: <a href="mailto:mangolukoo@gmail.com" className="font-bold underline">mangolukoo@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}