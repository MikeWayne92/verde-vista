import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Verde Vista Landscaping</title>
        <meta name="description" content="Learn about Verde Vista Landscaping, our story, mission, and the team behind our exceptional landscaping services in Dallas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container-custom py-16 md:py-24">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-xl text-brand-green-800 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600">
              Founded in 2019, Verde Vista Landscaping has grown from a small family business to one of Dallas's most trusted landscaping companies.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="heading-md text-brand-green-700 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Verde Vista, our mission is to create sustainable, beautiful outdoor spaces that enhance the natural environment and bring joy to our clients. We believe that thoughtful landscaping can transform not just properties, but lives.
                </p>
                <p className="text-gray-600">
                  Every project we undertake is approached with passion, precision, and a commitment to excellence that has become our hallmark in the Dallas landscaping industry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="heading-md text-brand-green-700 mb-4">Our Values</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-brand-green-100 text-brand-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                    <div>
                      <span className="font-semibold">Sustainability</span> - We design with the environment in mind, using eco-friendly practices and materials.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-green-100 text-brand-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                    <div>
                      <span className="font-semibold">Craftsmanship</span> - We take pride in attention to detail and quality workmanship in every project.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-green-100 text-brand-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                    <div>
                      <span className="font-semibold">Integrity</span> - We operate with honesty, transparency, and respect in all client relationships.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand-green-100 text-brand-green-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">4</span>
                    <div>
                      <span className="font-semibold">Innovation</span> - We continuously explore new techniques and designs to deliver unique solutions.
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="heading-lg text-brand-green-800 mb-8">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Our talented team of landscaping professionals combines years of experience with a passion for creating beautiful outdoor spaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team member placeholders - would be replaced with actual team data */}
              {[
                { name: "Michael Rodriguez", role: "Founder & Lead Designer" },
                { name: "Sarah Johnson", role: "Landscape Architect" },
                { name: "David Wilson", role: "Project Manager" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-brand-green-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
} 