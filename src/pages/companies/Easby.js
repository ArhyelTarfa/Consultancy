// src/pages/companies/EasbyRoadPage.js
import React from 'react';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="bg-gradient-to-r from-orange-700 to-gray-800 text-white py-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Easby Road</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Turning ideas into ventures. Turning ventures into impact.
        Easby Road Consulting helps ambitious founders, organisations, and ecosystems unlock growth through strategy, structure, and execution.
      </p>
    </motion.div>
  </section>
);

const Clients = () => (
  <section className="py-20 bg-gray-50 text-center">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Clients
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-600">
        We’ve worked with a diverse range of clients including startups, development partners, governments,
        and investment firms. Our solutions are tailored, strategic, and results-driven.
      </p>
      {/* Add client logos later */}
    </div>
  </section>
);

const InsightsAndProjects = () => (
  <section className="py-20 bg-white text-center">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Insights & Projects
      </motion.h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        From whitepapers to pilot programs, here are a few highlights of the work we’ve done across
        industries and regions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Urban Mobility Pilot</h3>
          <p className="text-sm text-gray-600">
            Designed and implemented a clean mobility framework for a fast-growing African city.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">AgriTech Roadmap</h3>
          <p className="text-sm text-gray-600">
            Developed a post-harvest preservation solution to address supply chain losses.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Investment Readiness Bootcamp</h3>
          <p className="text-sm text-gray-600">
            Trained MSMEs on funding strategy, business models, and pitch design in collaboration with an NGO.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const EasbyRoadPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Clients />
      <InsightsAndProjects />
      <Contact />
    </div>
  );
};

export default EasbyRoadPage;
