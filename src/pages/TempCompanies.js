// src/components/OurCompanies.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // ✅ Import motion
import cask from '../imgs/Op-Co Logos/Cask and Crate.png';
import Maharusi from '../imgs/Op-Co Logos/Maharusi.png';
import Easby from '../imgs/Op-Co Logos/Easby Road.png';
import Perservia from '../imgs/Op-Co Logos/Preservia.png';
import AmaKuro from '../imgs/Op-Co Logos/AmaKuro Capital.png';
import NurVolt from '../imgs/Op-Co Logos/Coming Soon.jpg';

const companies = [
  {
    name: 'Cask and Crate',
    description: 'Sip Better. Shop Smarter.',
    info: 'An e-commerce spirits retailer and market expansion agency delivering curated alcoholic beverages across Africa.',
    logo: cask,
    external: 'https://caskandcrate.ng/' // 👈 Add this instead of internal path
  },
  {
    name: 'Maharusi',
    description: 'Every bride. Every story.',
    info: 'A modern bridal fashion house curating elegant, high-quality dresses for the African bride.',
    logo: Maharusi,
    path: '/companies/maharusi'
  },
  {
    name: 'Perservia',
    description: 'Preserving freshness. Preventing waste.',
    info: 'A food-tech startup tackling post-harvest loss with innovative dehydration and preservation techniques.',
    logo: Perservia,
    path: '/companies/preservia'
  },
  {
    name: 'NurVolt',
    description: 'Powering the ride to tomorrow.',
    info: 'A clean mobility company focused on EV battery swap stations, lease-to-own electric bicycles, and last-mile logistics.',
    logo: NurVolt,
    path: '/companies/nurvolt'
  },
  {
    name: 'AmaKuro Capital',
    description: 'Backing bold ideas for a better Africa.',
    info: 'Our venture and impact investing arm, supporting early-stage MSMEs with capital and capacity to scale.',
    logo: AmaKuro,
    path: '/companies/amakuro-capital'
  },
  {
    name: 'Easby Road',
    description: 'Bridging Gaps. Building Futures.',
    info: 'A specialised Op-Co focused on business development, real estate advisory, tech innovation, and investor readiness.',
    logo: Easby,
    path: '/companies/easby-road'
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Companies = () => {
  return (
    <section id="companies" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Companies</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Easby Road Ltd is a holding company that manages a diverse group of companies committed to excellence, innovation, and sustainable growth.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {companies.map((company, index) => {
            const cardContent = (
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-left h-full">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-20 w-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-xs mt-2 italic text-center">{company.description}</p>
                <p className="text-gray-600 mt-2 text-sm">{company.info}</p>
              </div>
            );

            return company.external ? (
              <a
                href={company.external}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full"
              >
                {cardContent}
              </a>
            ) : (
              <Link to={company.path} key={index} className="h-full">
                {cardContent}
              </Link>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
};

export default Companies;
