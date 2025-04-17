import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialItem } from '@/types';

const testimonials: TestimonialItem[] = [
  {
    name: "Sarah Johnson",
    location: "Highland Park, Dallas",
    quote: "Verde Vista transformed our backyard from a plain lawn into an elegant outdoor living space. Their attention to detail and creative vision exceeded all our expectations.",
    rating: 5,
    image: "/images/testimonials/sarah-j.jpg",
    project: "Complete Backyard Renovation"
  },
  {
    name: "Michael & Karen Rodriguez",
    location: "Preston Hollow, Dallas",
    quote: "We've been using Verde Vista for lawn care and seasonal maintenance for over two years. Their team is always on time, professional, and our yard has never looked better.",
    rating: 5,
    image: "/images/testimonials/rodriguez-family.jpg",
    project: "Ongoing Maintenance"
  },
  {
    name: "David Wilson",
    location: "Lakewood, Dallas",
    quote: "The paver walkway and new retaining wall completely transformed our front yard. We've received so many compliments from neighbors, and the quality of work is outstanding.",
    rating: 5,
    image: "/images/testimonials/david-w.jpg",
    project: "Paver Walkway Installation"
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg text-brand-green-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our clients' satisfaction is our top priority. Here's what some of them have to say about their experience with Verde Vista Landscaping.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="flex text-yellow-400 text-lg">
                      {Array(testimonial.rating).fill("★").join("")}
                    </div>
                  </div>
                  
                  <blockquote className="italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-sm text-brand-green-700 font-medium">
                    Project: {testimonial.project}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-brand-green-700 font-medium">
            See more reviews on <a href="https://google.com" className="underline hover:text-brand-green-800">Google</a> and <a href="https://yelp.com" className="underline hover:text-brand-green-800">Yelp</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 