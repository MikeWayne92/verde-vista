import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, Hammer, Trees, Wrench, Droplets, Fence } from 'lucide-react';
import Link from 'next/link';
import { ServiceItem } from '@/types';

const services: ServiceItem[] = [
  { 
    icon: <Flower className="h-10 w-10" />, 
    title: "Lawn Care", 
    description: "Professional mowing, fertilization, and weed control to maintain a lush, healthy lawn year-round.",
    href: "/services#lawn-care",
    color: "text-brand-green-600"
  },
  { 
    icon: <Hammer className="h-10 w-10" />, 
    title: "Pavers & Walkways", 
    description: "Custom stonework and elegant paths that enhance the beauty and functionality of your outdoor spaces.",
    href: "/services#walkways",
    color: "text-brand-green-700"
  },
  { 
    icon: <Trees className="h-10 w-10" />, 
    title: "Retaining Walls", 
    description: "Expertly engineered walls that prevent erosion while adding visual interest to sloped landscapes.",
    href: "/services#retaining-walls",
    color: "text-brand-green-800"
  },
  { 
    icon: <Wrench className="h-10 w-10" />, 
    title: "Tree Trimming", 
    description: "Precision pruning to promote tree health, enhance aesthetics, and ensure safety around your property.",
    href: "/services#tree-service",
    color: "text-brand-green-700"
  },
  { 
    icon: <Droplets className="h-10 w-10" />, 
    title: "Sod/Turf Installation", 
    description: "Transform your yard with fresh sod or artificial turf for an instantly green and low-maintenance lawn.",
    href: "/services#sod",
    color: "text-brand-green-600"
  },
  { 
    icon: <Fence className="h-10 w-10" />, 
    title: "Sprinkler Repair", 
    description: "Expert diagnosis and repair of irrigation systems to keep your landscape properly watered.",
    href: "/services#irrigation",
    color: "text-brand-green-700"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Enhanced service card with hover animations
const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  return (
    <Link href={service.href} className="block">
      <motion.div 
        variants={itemVariants}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="h-full"
      >
        <motion.div
          className="h-full"
          initial="initial"
          whileHover="hover"
        >
          <Card className="h-full border-t-4 border-t-brand-green-500 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6 relative z-10 h-full">
              {/* Icon with hover animation */}
              <motion.div 
                className={`${service.color} mb-4 relative`}
                variants={{
                  hover: { 
                    scale: 1.1,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  },
                  initial: { scale: 1 }
                }}
              >
                {service.icon}
                
                {/* Subtle circle background that expands on hover */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-brand-green-50 -z-10"
                  variants={{
                    initial: { opacity: 0, scale: 0.2 },
                    hover: { 
                      opacity: 0.6, 
                      scale: 1.2,
                      transition: { duration: 0.4 } 
                    }
                  }}
                />
              </motion.div>
              
              {/* Text with subtle animations */}
              <motion.h3 
                className="text-xl font-semibold mb-2"
                variants={{
                  hover: { 
                    color: "#447a3d", // brand-green-600
                    transition: { duration: 0.2 }
                  }
                }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600"
                variants={{
                  hover: { 
                    y: 0,
                    transition: { duration: 0.3, delay: 0.1 }
                  },
                  initial: { y: 0 }
                }}
              >
                {service.description}
              </motion.p>
              
              {/* Add a subtle arrow that appears on hover */}
              <motion.div 
                className="absolute bottom-4 right-4 text-brand-green-600"
                variants={{
                  initial: { opacity: 0, x: -10 },
                  hover: { 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3, delay: 0.1 } 
                  }
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function Services() {
  return (
    <section id="services-section" className="py-20 bg-brand-green-50/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg text-brand-green-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer comprehensive landscaping solutions tailored to your specific needs and preferences.
            From regular maintenance to complete transformations, our team delivers exceptional results.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 