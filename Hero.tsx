import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-dark-bg">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-brand-blue/30 to-brand-purple/30 rounded-full blur-3xl animate-subtle-glow"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            Digital Marketing with
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">
            Precision in Motion.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
          We help ambitious brands, especially in e-commerce, achieve measurable growth through data-driven digital marketing strategies.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#contact" className="bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-transform">
            Schedule a Demo
          </a>
          <a href="#services" className="border-2 border-border-color text-gray-300 font-bold text-lg px-8 py-4 rounded-lg hover:bg-border-color hover:border-brand-blue transition-all">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;