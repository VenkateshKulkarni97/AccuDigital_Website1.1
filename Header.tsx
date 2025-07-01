import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-bg/80 backdrop-blur-lg border-b border-border-color' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter">
          Accu<span className="text-brand-blue">Digital</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-300 hover:text-brand-blue transition-colors">Services</a>
          <a href="#about" className="text-gray-300 hover:text-brand-blue transition-colors">About</a>
          <a href="#testimonials" className="text-gray-300 hover:text-brand-blue transition-colors">Testimonials</a>
        </nav>
        <a href="#contact" className="hidden md:block bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
          Schedule a Demo
        </a>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;