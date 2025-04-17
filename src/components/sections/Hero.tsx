import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';

interface AnimatedButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  className?: string;
}

// Custom animated button component
const AnimatedButton = ({ children, href, variant = "default", className = "" }: AnimatedButtonProps) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative"
        whileHover="hover"
        initial="initial"
      >
        {/* Button shadow effect */}
        <motion.div 
          className={`absolute -inset-1 rounded-md ${variant === "default" ? "bg-brand-green-700" : "bg-white/5"} z-0`}
          variants={{
            initial: { opacity: 0, y: 0 },
            hover: { 
              opacity: 0.5, 
              y: 4,
              transition: { duration: 0.3 } 
            }
          }}
        />
        
        {/* The actual button */}
        <motion.div
          className={`relative z-10 ${className}`}
          variants={{
            hover: { 
              y: -4,
              transition: { 
                duration: 0.3,
                type: "spring", 
                stiffness: 400
              }
            },
            initial: { y: 0 }
          }}
        >
          <Button 
            size="lg" 
            variant={variant} 
            className={`group ${variant === "outline" ? "text-white border-white hover:bg-white/10" : ""}`}
          >
            {children}
          </Button>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] bg-gradient-to-br from-brand-green-900 to-brand-green-800 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-green-600 blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-brand-green-700 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative h-full container-custom flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transform Your Outdoor Space
          </motion.h1>
          
          <motion.p 
            className="text-xl text-brand-green-50 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dallas's premier landscaping service, bringing nature-inspired designs to life since 2019. From lush gardens to elegant walkways, we craft spaces you'll love to live in.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedButton href="/contact">
              Get a Free Quote
              <motion.span
                className="inline-block ml-2"
                variants={{
                  initial: { x: 0 },
                  hover: { 
                    x: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400,
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.8
                    } 
                  }
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </AnimatedButton>
            
            <AnimatedButton href="/projects" variant="outline">
              View Our Projects
            </AnimatedButton>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-white/90 text-sm font-medium">5-Star Rated</p>
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-white/90 text-sm font-medium">100+ Projects</p>
              <p className="text-white text-xs">Completed in Dallas</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <ScrollIndicator scrollTo="services-section" />
    </section>
  );
} 