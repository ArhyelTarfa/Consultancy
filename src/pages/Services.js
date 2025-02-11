import React from 'react';
import Technology from '../imgs/Technology.jpeg';
import Agriculture from '../imgs/Agricuulture.jpg';
import Housing from '../imgs/Housing.jpg';

const services = [
  {
    title: 'TECHNOLOGY AND INNOVATION',
    image: Technology,
    description:
      'We help businesses leverage cutting-edge technology to enhance efficiency and sustainability. Our expertise includes IT project consultancy, as well as software and hardware development, ensuring organizations remain competitive in an evolving digital landscape.'
  },
  {
    title: 'AGRICULTURE AND AGRO-ALLIED SERVICES',
    image: Agriculture,
    description:
      'We support food security initiatives and empower local farmers by connecting them to global markets. Our services encompass agri-value chain development and advisory on sustainable agriculture practices, driving innovation in the sector.'
  },
  {
    title: 'REAL ESTATE AND SUSTAINABLE HOUSING',
    image: Housing,
    description:
      'We advance sustainable housing solutions through strategic consultancy, facilitating partnerships between investors, developers, and communities. Our expertise spans resource mobilization, project execution, and impact measurement, ensuring environmentally sustainable and affordable housing developments.'
  },
];

const Services = () => {
  return (
    <div id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-4 mb-10">
          Our consultancy services are designed to empower organizations to excel in a dynamic and evolving landscape. We specialize in strategic planning to drive sustainable growth, management consulting to optimize operations and enhance governance, and IT and knowledge management to deliver cutting-edge digital solutions.
          Additionally, we provide trade and industry advisory, offering market entry strategies and sectoral analysis to help businesses navigate and succeed in competitive markets.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-left space-y-4 hover:shadow-xl transition-shadow">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
