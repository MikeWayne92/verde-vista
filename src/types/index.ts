import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  project: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  [key: string]: string | undefined;
} 