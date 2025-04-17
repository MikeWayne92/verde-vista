import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/sections/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Verde Vista Landscaping</title>
        <meta name="description" content="Get in touch with Verde Vista Landscaping for a free quote or to discuss your landscaping project in Dallas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="bg-brand-green-50/50 py-16">
          <div className="container-custom">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl text-brand-green-800 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600">
                We're here to answer your questions and discuss how we can transform your outdoor space.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="h-64 bg-gray-200">
                  {/* Map would go here in a real implementation */}
                  <div className="h-full flex items-center justify-center bg-brand-green-100">
                    <p className="text-brand-green-800 font-medium">Interactive Map</p>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-brand-green-800 mb-4">Visit Our Office</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-brand-green-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">1234 Green Valley Rd, Dallas, TX 75001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-brand-green-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8AM - 6PM</p>
                        <p className="text-gray-600">Saturday: 9AM - 2PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-brand-green-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">(214) 555-1234</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-md p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold text-brand-green-800 mb-4">Service Areas</h2>
                <p className="text-gray-600 mb-6">
                  We proudly serve the greater Dallas area, including the following communities:
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Highland Park", "University Park", "Preston Hollow", 
                    "Lakewood", "Uptown", "Oak Lawn", "North Dallas", 
                    "Lake Highlands", "Richardson", "Plano"
                  ].map((area, index) => (
                    <div 
                      key={index}
                      className="bg-brand-green-50 text-brand-green-800 rounded-md px-3 py-2 text-center"
                    >
                      {area}
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-gray-600">
                  Don't see your neighborhood listed? Contact us anyway - we likely serve your area!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        <ContactForm />
      </Layout>
    </>
  );
} 