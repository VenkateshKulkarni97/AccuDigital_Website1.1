
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import ContactCTA from './components/ContactCTA.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
