import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.h1 
            className="text-2xl md:text-3xl font-bold tracking-tight text-brand-green-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Verde Vista
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button>Get a Free Quote</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-brand-green-100 hover:text-brand-green-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container-custom pb-4 pt-2 space-y-2 bg-white">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="block py-2 font-medium text-gray-700 hover:text-brand-green-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Get a Free Quote</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
} 