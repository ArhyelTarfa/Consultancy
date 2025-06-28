// src/pages/Services.js
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Business Development & Growth Strategy',
    description:
      'We help organizations identify opportunities, expand into new markets, and implement scalable strategies to accelerate growth and resilience.'
  },
  {
    title: 'Investor Readiness & Capital Scouting',
    description:
      'We prepare businesses for investment by enhancing pitch materials, refining financials, and connecting them with aligned funding sources.'
  },
  {
    title: 'Sustainable Real Estate Advisory',
    description:
      'We provide tailored advice on environmentally conscious development, investment structuring, and market positioning for real estate ventures.'
  },
  {
    title: 'Tech & Agritech for SMEs/MSMEs',
    description:
      'We enable small businesses to integrate innovative technologies and agritech solutions that drive efficiency and unlock growth.'
  },
  {
    title: 'Brand Building & Market Entry Planning',
    description:
      'We craft compelling brand identities and entry strategies that position businesses to succeed in new and competitive markets.'
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our core services are built to support bold, forward-looking businesses and institutions.
          We deliver hands-on strategy, advisory, and execution support across growth, capital, tech, and market expansion.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 shadow-lg rounded-xl hover:shadow-xl transition duration-300 text-left"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
