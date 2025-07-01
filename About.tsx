import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Data analytics dashboard" 
              className="rounded-xl shadow-lg w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Not just an agency.
              <br />
              <span className="text-brand-purple">Your embedded growth engine.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              At AccuDigital, we integrate seamlessly with your business, acting as an extension of your team. Our philosophy is built on transparency, data-driven strategies, and an unrelenting pursuit of your success. We believe in building partnerships, not just client lists.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <p><strong className="font-semibold text-gray-200">Data-First Approach:</strong> Every decision is backed by data, not guesswork.</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mr-4 mt-1">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <p><strong className="font-semibold text-gray-200">Radical Transparency:</strong> You see what we see. No hidden fees, no confusing reports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;