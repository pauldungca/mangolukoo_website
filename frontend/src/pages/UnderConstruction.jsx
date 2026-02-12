import React from "react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex flex-col items-center justify-center px-4 sm:px-6 py-8">
      {/* Logo */}
      <img 
        src="/images/MLlogo.png" 
        alt="MangoLukoo Logo" 
        className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-auto mb-4 sm:mb-5 md:mb-6 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      />
      
      {/* Mango LUKOO Text */}
      <p className="text-orange-500 text-xs sm:text-sm md:text-base font-semibold tracking-[2px] uppercase mb-2 sm:mb-3">
        MANGO LUKOO
      </p>
      
      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-5 md:mb-6 px-2 text-center leading-tight">
        Page Under Construction
      </h1>
      
      {/* Coming Soon Badge */}
      <span className="inline-block bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold tracking-[1px] mb-6 sm:mb-8 shadow-md shadow-orange-500/20">
        Coming Soon
      </span>
      
      {/* Description */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 text-center">
        This page is currently under development. Please check back soon!
      </p>
      
      {/* Back to Home Button */}
      <button 
        onClick={() => window.location.href = '/'}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 active:scale-98 min-w-[200px] sm:min-w-[220px] md:min-w-[240px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Back to Home
      </button>
    </div>
  );
};

export default UnderConstruction;