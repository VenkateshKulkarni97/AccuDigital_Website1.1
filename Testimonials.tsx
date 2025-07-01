
import React from 'react';
import type { Testimonial } from '../types.ts';

const testimonials: Testimonial[] = [
  {
    quote: "AccuDigital transformed our online presence. Their data-driven approach doubled our e-commerce sales in just three months. They're true partners in growth.",
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'Innovate Co.',
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=0D1117&color=00A9FF&bold=true',
  },
  {
    quote: "The transparency and communication from the AccuDigital team are unmatched. We finally understand our marketing ROI, and the impact on our bottom line is impressive.",
    name: 'Michael Chen',
    title: 'Marketing Director',
    company: 'Future Gadgets',
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0D1117&color=A076F9&bold=true',
  },
  {
    quote: "Working with AccuDigital felt like hiring an entire expert marketing department overnight. Their content strategy significantly boosted our organic traffic and authority.",
    name: 'Emily Rodriguez',
    title: 'Founder',
    company: 'Sustainably Yours',
    image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=0D1117&color=00A9FF&bold=true',
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-light-bg border border-border-color rounded-xl p-8 flex flex-col h-full">
      <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
      <div className="mt-6 flex items-center">
        <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <p className="font-bold text-gray-100">{testimonial.name}</p>
          <p className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Don't Just Take Our Word For It
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            See what our partners are saying about their growth with AccuDigital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
