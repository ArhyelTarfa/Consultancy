import React from 'react';
import ServiceCard from '../components/ServiceCard';
import AuditImg from '../imgs/Audit.jpeg';
import AdvisoryImg from '../imgs/Advisory.jpeg';
import TaxImg from '../imgs/Tax.jpeg';
import OilAndGasImg from '../imgs/Oil.jpeg';
import FinancingImg from '../imgs/Financing.jpeg';
import ConstructionImg from '../imgs/Construction.jpeg';

const services = [
  {
    title: 'Audit',
    description:
      'Our audit services provide a detailed, independent review of your financial statements, helping businesses ensure transparency, accuracy, and compliance with applicable standards.',
    image: AuditImg,
  },
  {
    title: 'Advisory',
    description:
      'Our advisory services help organizations navigate complex business challenges with customized solutions. We provide strategic guidance to drive growth and improve efficiency.',
    image: AdvisoryImg,
  },
  {
    title: 'Tax',
    description:
      'Our tax services ensure your business complies with tax regulations while optimizing your tax strategy for maximum efficiency. We guide you through complex tax laws and help minimize your liabilities.',
    image: TaxImg,
  },
  {
    title: 'Oil & Gas',
    description:
      'We offer specialized consulting for the oil and gas industry, providing insights into regulatory compliance, exploration, production, and risk management to ensure optimal performance and profitability.',
    image: OilAndGasImg,
  },
  {
    title: 'Financing',
    description:
      'Our financing services help businesses secure the capital they need for growth. We offer financial planning, risk management, and funding solutions to match your business objectives.',
    image: FinancingImg,
  },
  {
    title: 'Construction',
    description:
      'Our construction services provide end-to-end support, from project planning and design to construction management and execution. We ensure that your construction projects are completed on time and within budget.',
    image: ConstructionImg,
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4 mb-10">
          We offer a wide range of services to help your business grow and succeed.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
