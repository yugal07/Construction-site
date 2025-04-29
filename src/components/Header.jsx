import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold">Paras Construction</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a>
          <a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a>
          <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
          <a href="#testimonials" className="hover:text-yellow-300 transition duration-300">Testimonials</a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-800 p-4">
          <div className="flex flex-col space-y-3">
            <a href="#home" className="hover:text-yellow-300 transition duration-300">Home</a>
            <a href="#services" className="hover:text-yellow-300 transition duration-300">Services</a>
            <a href="#projects" className="hover:text-yellow-300 transition duration-300">Projects</a>
            <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
            <a href="#testimonials" className="hover:text-yellow-300 transition duration-300">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;