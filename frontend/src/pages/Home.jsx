import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const carouselInterval = useRef(null);

  const images = [
    "images/products/coffee/matcha.png",
    "images/products/shake/mangomix.png",
    "images/products/soda/kiwi.png",
    "images/products/yogurt/lemon.png",
    "images/products/milktea/okinawa.png",
  ];

  // Smooth auto-rotation with longer interval
  useEffect(() => {
    carouselInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(carouselInterval.current);
  }, [images.length]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % images.length);
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    clearInterval(carouselInterval.current);
    carouselInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  // Enhanced smooth animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 30 : -30,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -30 : 30,
      filter: "blur(4px)",
    }),
  };

  // Smooth spring configuration
  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-orange-50 via-orange-50/30 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:pr-8 relative z-10"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-block"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 rounded-full text-sm font-semibold shadow-md border border-orange-200/50 backdrop-blur-sm inline-flex items-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🥭
                  </motion.span>
                  Fresh & Authentic Mango Drinks
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="text-gray-800">Mango</span>
                <br />
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 bg-[length:200%_auto]"
                >
                  Lukoo
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-600 text-xl leading-relaxed max-w-xl"
              >
                Fresh mango-based shakes and milk teas crafted for everyday
                refreshment. Real fruit flavor, balanced sweetness, and
                consistent quality in every cup.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link to="/menu">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Menu
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                </Link>
                <Link to ="/branches">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Find a Branch
                </motion.button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8"
              >
                {[
                  { value: "18+", label: "Flavors", icon: "🍹" },
                  { value: "4", label: "Branches", icon: "🏪" },
                  { value: "100%", label: "Real Mango", icon: "🥭" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-3xl font-bold text-orange-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Premium Smooth 3D Carousel */}
            <div className="relative perspective-1000">
              {/* Animated Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-orange-300/15 rounded-[60px] blur-3xl"
              />

              {/* Carousel Container */}
              <div className="relative z-10 h-[380px] sm:h-[450px] md:h-[520px] lg:h-[550px] flex items-center justify-center">
                {/* Main Carousel */}
                <div className="relative 
                  w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
                  h-[320px] sm:h-[380px] md:h-[440px] lg:h-[480px]"
                style={{ transformStyle: "preserve-3d" }}>
                  {/* Smooth Floating Shadow Effect */}
                  <motion.div
                    animate={{
                      y: [0, -25, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-orange-400/40 to-transparent rounded-[60px] blur-2xl"
                  />

                  {/* Animated Image with Smooth Transitions */}
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={currentImage}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: spring,
                        opacity: { duration: 0.4, ease: "easeInOut" },
                        scale: { duration: 0.5, ease: "easeOut" },
                        rotateY: spring,
                        filter: { duration: 0.3 },
                      }}
                      className="absolute w-full h-full"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Main Image Container */}
                      <div className="relative w-full h-full">
                        {/* Enhanced Gradient Frame with Glow */}
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 30px rgba(249, 115, 22, 0.3)",
                              "0 0 50px rgba(249, 115, 22, 0.5)",
                              "0 0 30px rgba(249, 115, 22, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-500 rounded-[50px] p-[4px]"
                        >
                          <div className="relative w-full h-full bg-white rounded-[47px] overflow-hidden shadow-2xl">
                            {/* Image with Smooth Zoom */}
                            <motion.img
                              initial={{ scale: 1.1 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              whileHover={{ scale: 1.05 }}
                              src={images[currentImage]}
                              alt={`Product ${currentImage + 1}`}
                              className="w-full h-full object-cover"
                            />
                            
                            {/* Smooth Gradient Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.6 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-[47px]"
                            />
                            
                            {/* Animated Shine Effect */}
                            <motion.div
                              animate={{
                                x: ["-100%", "200%"],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2,
                                ease: "easeInOut",
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                              style={{ width: "50%" }}
                            />
                          </div>
                        </motion.div>

                        {/* Decorative Rotating Corners */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                          className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl p-1.5 shadow-xl"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-white rounded-xl" />
                        </motion.div>

                        <motion.div
                          animate={{ rotate: -360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl p-1.5 shadow-xl"
                        >
                          <div className="w-full h-full bg-gradient-to-br from-orange-100 to-white rounded-xl" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Smooth Preview Cards */}
                  <motion.div
                    animate={{
                      x: [-25, -15, -25],
                      y: [15, 5, 15],
                      rotateY: [8, 12, 8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="hidden lg:block absolute -left-28 top-1/2 transform -translate-y-1/2 z-0"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-52 h-64 bg-gradient-to-br from-orange-200/90 to-orange-100/90 backdrop-blur-md rounded-3xl p-2.5 shadow-2xl border-2 border-white/30">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <motion.img
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          src={images[(currentImage - 1 + images.length) % images.length]}
                          alt="Previous"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [25, 15, 25],
                      y: [15, 5, 15],
                      rotateY: [-8, -12, -8],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="hidden lg:block absolute -right-28 top-1/2 transform -translate-y-1/2 z-0"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-52 h-64 bg-gradient-to-br from-orange-200/90 to-orange-100/90 backdrop-blur-md rounded-3xl p-2.5 shadow-2xl border-2 border-white/30">
                      <div className="w-full h-full rounded-2xl overflow-hidden">
                        <motion.img
                          initial={{ opacity: 0.7 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          src={images[(currentImage + 1) % images.length]}
                          alt="Next"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Enhanced Smooth Indicators */}
              <div className="flex justify-center gap-4 mt-10">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentImage ? 1 : -1);
                      setCurrentImage(index);
                      clearInterval(carouselInterval.current);
                      carouselInterval.current = setInterval(() => {
                        setDirection(1);
                        setCurrentImage((prev) => (prev + 1) % images.length);
                      }, 5000);
                    }}
                    whileHover={{ scale: 1.4, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                  >
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`h-3.5 rounded-full transition-all duration-500 ${
                        index === currentImage
                          ? "w-16 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500"
                          : "w-3.5 bg-gradient-to-r from-orange-300/60 to-orange-200/60"
                      }`}
                    />
                    
                    {index === currentImage && (
                      <>
                        <motion.div
                          layoutId="indicator-glow"
                          className="absolute inset-0 w-16 h-3.5 bg-gradient-to-r from-orange-500/40 to-orange-400/40 rounded-full blur-lg"
                        />
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 w-16 h-3.5 bg-gradient-to-r from-orange-400/30 to-orange-300/30 rounded-full blur-md"
                        />
                      </>
                    )}
                    
                    <div className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-30 group-hover:bg-orange-300 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>

              {/* Smooth Navigation Areas */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <motion.div
                  whileHover={{ backgroundColor: "rgba(249, 115, 22, 0.03)" }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer pointer-events-auto"
                  onClick={prevImage}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl hover:bg-white/30 transition-all duration-300">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  whileHover={{ backgroundColor: "rgba(249, 115, 22, 0.03)" }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer pointer-events-auto"
                  onClick={nextImage}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl hover:bg-white/30 transition-all duration-300">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="bg-gradient-to-b from-white to-orange-50/30 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-6xl mb-4"
            >
              📍
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold text-gray-800"
            >
              Our Branches
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Visit MangoLukoo at our conveniently located branches and enjoy
              freshly made mango shakes and milk teas, crafted daily with real
              fruit ingredients and consistent quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6"
            >
              <Link to="/branches">  
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 shadow-lg"
              >
                View All Branches
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

       {/* Featured Items Section */}
      <div className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Best Sellers
            </h2>
            <p className="text-gray-600 text-lg">
              Customer favorites made with real mangoes and carefully balanced
              flavors.
            </p>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "images/products/shake/mangomix.png",
                title: "Mango Mix Overload",
                desc: "Pure mango flavor blended smooth for a refreshing finish.",
              },
              {
                img: "images/products/shake/graham.png",
                title: "Mango Graham",
                desc: "Creamy milk tea infused with ripe mango sweetness.",
              },
              {
                img: "images/products/shake/oreo.png",
                title: "Mango Oreo Shake",
                desc: "Rich mango shake layered with crushed oreo goodness.",
              },
              {
                img: "images/products/shake/strawberry.png",
                title: "Mango Strawberry Puroo",
                desc: "Smooth, creamy mango drink with a dessert-like finish.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View All Menu Button */}
        <div className="flex justify-center mt-16">
        <Link to="/menu">
        <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl">
            View All Menu
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}