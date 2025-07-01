
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

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
