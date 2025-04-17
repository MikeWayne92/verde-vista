import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Verde Vista Landscaping</h3>
            <p className="text-brand-green-100 max-w-xs">
              Rooted in care. Grown with passion. Transforming outdoor spaces across Dallas since 2019.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="text-brand-green-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-brand-green-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-brand-green-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-green-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-brand-green-200 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-green-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#lawn-care" className="text-brand-green-200 hover:text-white transition-colors">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services#walkways" className="text-brand-green-200 hover:text-white transition-colors">
                  Pavers & Walkways
                </Link>
              </li>
              <li>
                <Link href="/services#tree-service" className="text-brand-green-200 hover:text-white transition-colors">
                  Tree Services
                </Link>
              </li>
              <li>
                <Link href="/services#sod" className="text-brand-green-200 hover:text-white transition-colors">
                  Sod Installation
                </Link>
              </li>
              <li>
                <Link href="/services#irrigation" className="text-brand-green-200 hover:text-white transition-colors">
                  Irrigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-brand-green-100">
                  1234 Green Valley Rd<br />
                  Dallas, TX 75001
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-green-300" />
                <a href="tel:+12145551234" className="text-brand-green-100 hover:text-white transition-colors">
                  (214) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-green-300" />
                <a href="mailto:info@verdevista.com" className="text-brand-green-100 hover:text-white transition-colors">
                  info@verdevista.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-green-800 mt-10 pt-6 text-center text-sm text-brand-green-200">
          <p>&copy; {currentYear} Verde Vista Landscaping. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 