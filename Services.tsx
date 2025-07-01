import React from 'react';
import type { Service } from '../types';
import { SEOMarketingIcon, PPCIcon, SocialMediaIcon, ContentCreationIcon, AnalyticsIcon, EmailMarketingIcon } from './icons';

const services: Service[] = [
  {
    icon: <SEOMarketingIcon className="h-8 w-8 text-brand-blue" />,
    title: 'SEO & Organic Search',
    description: 'Dominate search engine rankings and drive sustainable, high-quality traffic to your website.',
  },
  {
    icon: <PPCIcon className="h-8 w-8 text-brand-blue" />,
    title: 'PPC & Paid Ads',
    description: 'Get instant, targeted traffic with expertly managed pay-per-click campaigns on Google and social media.',
  },
  {
    icon: <SocialMediaIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Social Media Marketing',
    description: 'Build your brand, engage your community, and drive conversions through strategic social media management.',
  },
  {
    icon: <ContentCreationIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Content Creation',
    description: 'Fuel your marketing with high-quality, engaging content that resonates with your audience and builds authority.',
  },
  {
    icon: <AnalyticsIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Data & Analytics',
    description: 'Make informed decisions with deep-dive analytics, performance tracking, and actionable insights.',
  },
  {
    icon: <EmailMarketingIcon className="h-8 w-8 text-brand-blue" />,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that convert.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-light-bg border border-border-color rounded-xl p-8 transform hover:-translate-y-2 transition-all duration-300 group hover:border-brand-blue/50 hover:shadow-2xl hover:shadow-brand-purple/10">
    <div className="mb-4 text-brand-blue group-hover:scale-110 transition-transform">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-100">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Capabilities to <span className="text-brand-blue">Drive Growth</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            From awareness to conversion, we offer a complete suite of services designed for e-commerce and SMB growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;