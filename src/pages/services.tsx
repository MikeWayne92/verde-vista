import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ServiceItem } from '@/types';
import { Flower, Hammer, Trees, Wrench, Droplets, Fence } from 'lucide-react';
import Link from 'next/link';

// Service data with detailed descriptions
const serviceDetails: (ServiceItem & { fullDescription: string[] })[] = [
  { 
    icon: <Flower className="h-10 w-10" />, 
    title: "Lawn Care", 
    description: "Professional mowing, fertilization, and weed control to maintain a lush, healthy lawn year-round.",
    href: "/services#lawn-care",
    color: "text-brand-green-600",
    fullDescription: [
      "Regular professional mowing at optimal heights to promote lawn health",
      "Custom fertilization programs tailored to your soil's specific needs",
      "Preventative and reactive weed control treatments",
      "Aeration services to reduce soil compaction and improve nutrient absorption",
      "Disease diagnosis and treatment to protect your turf investment"
    ]
  },
  { 
    icon: <Hammer className="h-10 w-10" />, 
    title: "Pavers & Walkways", 
    description: "Custom stonework and elegant paths that enhance the beauty and functionality of your outdoor spaces.",
    href: "/services#walkways",
    color: "text-brand-green-700",
    fullDescription: [
      "Design consultation to create pathways that complement your landscape",
      "Premium materials including natural stone, concrete pavers, and brick",
      "Expert installation with proper drainage and foundation preparation",
      "Permeable paver options for environmentally-conscious homeowners",
      "Sealing and maintenance services to protect your investment"
    ]
  },
  { 
    icon: <Trees className="h-10 w-10" />, 
    title: "Retaining Walls", 
    description: "Expertly engineered walls that prevent erosion while adding visual interest to sloped landscapes.",
    href: "/services#retaining-walls",
    color: "text-brand-green-800",
    fullDescription: [
      "Engineering assessment to determine proper wall specifications",
      "Various material options including stone, block, and timber",
      "Proper drainage installation to prevent water damage",
      "Built to code with necessary permits for larger structures",
      "Decorative options that blend beautifully with your landscape"
    ]
  },
  { 
    icon: <Wrench className="h-10 w-10" />, 
    title: "Tree Trimming", 
    description: "Precision pruning to promote tree health, enhance aesthetics, and ensure safety around your property.",
    href: "/services#tree-service",
    color: "text-brand-green-700",
    fullDescription: [
      "Certified arborists trained in proper pruning techniques",
      "Crown thinning to improve light penetration and air circulation",
      "Deadwood removal to prevent disease spread and property damage",
      "Aesthetic shaping to enhance your landscape's visual appeal",
      "Emergency services for storm-damaged trees"
    ]
  },
  { 
    icon: <Droplets className="h-10 w-10" />, 
    title: "Sod/Turf Installation", 
    description: "Transform your yard with fresh sod or artificial turf for an instantly green and low-maintenance lawn.",
    href: "/services#sod",
    color: "text-brand-green-600",
    fullDescription: [
      "Site preparation including removal of old turf and soil amendments",
      "Premium-grade sod varieties selected for our Dallas climate",
      "Artificial turf options that look natural while saving water",
      "Professional installation ensuring proper root contact",
      "Post-installation care instructions and services"
    ]
  },
  { 
    icon: <Fence className="h-10 w-10" />, 
    title: "Sprinkler Repair", 
    description: "Expert diagnosis and repair of irrigation systems to keep your landscape properly watered.",
    href: "/services#irrigation",
    color: "text-brand-green-700",
    fullDescription: [
      "Comprehensive system diagnostics to identify inefficiencies",
      "Repair of broken heads, pipes, valves, and controllers",
      "System upgrades to improve water conservation",
      "Seasonal maintenance including winterization and spring startup",
      "Smart controller installation for optimal watering schedules"
    ]
  }
];

// Animation variants
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
      duration: 0.6
    }
  }
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Our Services | Verde Vista Landscaping</title>
        <meta name="description" content="Explore our complete range of landscaping and lawn care services for residential and commercial properties in Dallas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-brand-green-50/30 py-16 md:py-24">
          <div className="container-custom">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="heading-xl text-brand-green-800 mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Verde Vista provides comprehensive landscaping services tailored to your specific needs.
                From routine maintenance to complete transformations, we bring your outdoor vision to life.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-24"
            >
              {serviceDetails.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  id={service.href.split('#')[1]}
                  className="scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Service icon and title for mobile */}
                    <div className="lg:hidden flex items-center mb-4">
                      <div className={`${service.color} mr-4`}>
                        {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-brand-green-800">{service.title}</h2>
                    </div>
                    
                    {/* Image placeholder - in a real project, we'd use an actual image */}
                    <div className="lg:col-span-6 bg-gray-200 rounded-lg overflow-hidden h-80 flex items-center justify-center">
                      <p className="text-gray-600 font-medium">Service Image for {service.title}</p>
                    </div>
                    
                    {/* Service details */}
                    <div className="lg:col-span-6">
                      {/* Service icon and title for desktop */}
                      <div className="hidden lg:flex items-center mb-6">
                        <div className={`${service.color} mr-4`}>
                          {service.icon}
                        </div>
                        <h2 className="text-3xl font-bold text-brand-green-800">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                      
                      <h3 className="text-xl font-semibold text-brand-green-700 mb-4">What We Offer:</h3>
                      <ul className="space-y-3">
                        {service.fullDescription.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-brand-green-600 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-green-600 hover:bg-brand-green-700 text-white px-6 py-3 rounded-md 
                                      font-medium transition-colors duration-300"
                          >
                            Request a Quote
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Section */}
            <motion.div 
              className="mt-24 bg-brand-green-800 text-white p-10 rounded-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Landscape?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Our team is ready to bring your outdoor vision to life.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-brand-green-800 hover:bg-brand-green-50 px-8 py-3 rounded-md 
                            font-medium transition-colors duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
} 