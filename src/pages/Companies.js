// src/components/OurCompanies.js
import React from 'react';
import cask from '../imgs/Op-Co Logos/Cask and Crate.png'
import Maharusi from '../imgs/Op-Co Logos/Maharusi.png'
import Easby from '../imgs/Op-Co Logos/Easby Road.png'
import Perservia from '../imgs/Op-Co Logos/Preservia.png'
import AmaKuro from '../imgs/Op-Co Logos/AmaKuro Capital.png'
import NurVolt from '../imgs/Op-Co Logos/Coming Soon.jpg'

const companies = [
  {
    name: 'Cask and Crate',
    description: 'Providing innovative IT and software solutions.',
    logo: cask // Example path
  },
  {
    name: 'Maharusi',
    description: 'Driving sustainable agriculture and agri-business.',
    logo: Maharusi
  },
  {
    name: 'Perservia',
    description: 'Delivering affordable and sustainable housing.',
    logo: Perservia
  },
  {
    name: 'NurVolt',
    description: 'Delivering affordable and sustainable housing.',
    logo: NurVolt
  },
  {
    name: 'AmaKuro Capital',
    description: 'Delivering affordable and sustainable housing.',
    logo: AmaKuro
  },
  {
    name: 'Easby Road',
    description: 'Delivering affordable and sustainable housing.',
    logo: Easby
  },
];

const Companies = () => {
  return (
    <section id='companies' className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Companies</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Easby Road Ltd is a holding company that manages a diverse group of companies committed to excellence, innovation, and sustainable growth.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 w-auto mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
              <p className="text-gray-600 mt-2">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
