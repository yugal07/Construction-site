import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1600x900/999999/FFFFFF?text=Construction+Site')",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Building <span className="text-yellow-400">Excellence</span> in Bhopal
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Paras Construction delivers quality craftsmanship, innovative solutions, and reliable service for all your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Get A Quote
            </a>
            <a 
              href="#projects" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;