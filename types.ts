
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}
