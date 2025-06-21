// src/components/OurCompanies.js
import React from 'react';

const companies = [
  {
    name: 'Cask and Crate',
    description: 'Providing innovative IT and software solutions.',
    logo: '../imgs/Aboutback.jpeg' // Example path
  },
  {
    name: 'Maharusi',
    description: 'Driving sustainable agriculture and agri-business.',
    logo: '/imgs/easbyagri.png'
  },
  {
    name: 'Perservia',
    description: 'Delivering affordable and sustainable housing.',
    logo: '/imgs/easbyrealty.png'
  },
  {
    name: 'NurVolt',
    description: 'Delivering affordable and sustainable housing.',
    logo: '/imgs/easbyrealty.png'
  },
  {
    name: 'AmaKuro Capital',
    description: 'Delivering affordable and sustainable housing.',
    logo: '/imgs/easbyrealty.png'
  },
  {
    name: 'Easby Road',
    description: 'Delivering affordable and sustainable housing.',
    logo: '/imgs/easbyrealty.png'
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
