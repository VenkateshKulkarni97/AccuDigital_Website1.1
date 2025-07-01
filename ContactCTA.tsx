import React, { useState } from 'react';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const ContactCTA: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate a successful response
    console.log('Form submitted:', formData);
    setFormState('success');
    
    // In a real app, you might have error handling:
    // setFormState('error');
  };

  return (
    <section id="contact" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to Put <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-purple">Precision in Motion</span>?
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Let's talk about your goals. Schedule a complimentary demo and strategy session. We'll analyze your current strategy and show you exactly where the opportunities for growth are.
          </p>
          
          <div className="mt-10 text-left">
            {formState === 'success' ? (
              <div className="bg-dark-bg border border-green-500/50 rounded-xl p-8 text-center animate-fade-in-up">
                <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
                <p className="text-gray-300 mt-2">Your message has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-dark-bg border border-border-color rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-dark-bg border border-border-color rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                    <input type="text" name="company" id="company" required value={formData.company} onChange={handleChange} className="w-full bg-dark-bg border border-border-color rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all" />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">What are your goals?</label>
                    <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-dark-bg border border-border-color rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                    <button 
                        type="submit" 
                        disabled={formState === 'sending'}
                        className="bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold text-lg px-10 py-4 rounded-lg hover:scale-105 transition-transform inline-block shadow-lg shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {formState === 'sending' ? 'Sending...' : 'Schedule Your Demo'}
                    </button>
                    {formState === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
