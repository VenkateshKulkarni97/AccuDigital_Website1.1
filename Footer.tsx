
import React from 'react';
import { LinkedinIcon, TwitterIcon, DribbbleIcon } from './icons.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-border-color">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              Accu<span className="text-brand-blue">Digital</span>
            </a>
            <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} AccuDigital. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-brand-blue transition-colors">
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-brand-blue transition-colors">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Dribbble" className="text-gray-400 hover:text-brand-blue transition-colors">
              <DribbbleIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
