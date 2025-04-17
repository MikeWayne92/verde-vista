import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

// Mock project data
const projects = [
  {
    id: 1,
    title: 'Modern Backyard Retreat',
    description: 'Complete transformation of a barren backyard into a modern outdoor living space with custom patio, fire pit, and native plantings.',
    location: 'Highland Park, Dallas',
    tags: ['Landscape Design', 'Hardscaping', 'Planting'],
    imageUrl: '/images/projects/project1.jpg',
  },
  {
    id: 2,
    title: 'Water-Efficient Front Yard',
    description: 'Drought-resistant landscape renovation featuring native Texas plants, efficient irrigation, and decorative rock features.',
    location: 'Preston Hollow, Dallas',
    tags: ['Xeriscaping', 'Irrigation', 'Sustainable'],
    imageUrl: '/images/projects/project2.jpg',
  },
  {
    id: 3,
    title: 'Terraced Garden Hillside',
    description: 'Engineering challenge solved with beautiful terraced gardens on a steep hillside property, including retaining walls and steps.',
    location: 'Lakewood, Dallas',
    tags: ['Retaining Walls', 'Garden Design', 'Slope Management'],
    imageUrl: '/images/projects/project3.jpg',
  },
  {
    id: 4,
    title: 'Commercial Plaza Redesign',
    description: 'Inviting outdoor space for a commercial plaza with seating areas, shade trees, and low-maintenance plantings.',
    location: 'Downtown Dallas',
    tags: ['Commercial', 'Public Space', 'Urban Design'],
    imageUrl: '/images/projects/project4.jpg',
  },
  {
    id: 5,
    title: 'Zen Garden Retreat',
    description: 'Peaceful meditation garden with Japanese-inspired elements including a dry creek bed, specimen trees, and natural stone.',
    location: 'North Dallas',
    tags: ['Asian-Inspired', 'Specialty Garden', 'Stone Work'],
    imageUrl: '/images/projects/project5.jpg',
  },
  {
    id: 6,
    title: 'Poolside Paradise',
    description: 'Lush tropical landscaping surrounding a custom pool, featuring palm trees, vibrant flowers, and evening lighting.',
    location: 'University Park, Dallas',
    tags: ['Pool Landscaping', 'Tropical', 'Lighting'],
    imageUrl: '/images/projects/project6.jpg',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Our Projects | Verde Vista Landscaping</title>
        <meta name="description" content="Explore our portfolio of landscaping projects across Dallas, from backyard renovations to commercial landscapes." />
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
              <h1 className="heading-xl text-brand-green-800 mb-6">Our Projects</h1>
              <p className="text-xl text-gray-600">
                Explore our carefully crafted landscapes and outdoor transformations across Dallas.
                Each project tells a unique story of collaboration with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="relative bg-white rounded-xl shadow-md overflow-hidden h-[450px] group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] // custom ease for smooth movement
                  }}
                >
                  <div className="h-56 bg-brand-green-200 overflow-hidden">
                    <motion.div 
                      className="w-full h-full bg-gray-400 flex items-center justify-center"
                      whileInView={{
                        scale: 1.05,
                        transition: { duration: 1.2, ease: "easeOut" }
                      }}
                      initial={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-white font-medium">Project Image {project.id}</p>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-brand-green-800 group-hover:text-brand-green-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs bg-brand-green-100 text-brand-green-800 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="absolute bottom-6 right-6"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button 
                        className="bg-brand-green-600 hover:bg-brand-green-700 text-white px-3 py-1 rounded 
                                  transition-colors duration-300 text-sm font-medium flex items-center"
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
} 