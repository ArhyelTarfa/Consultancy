// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-2xl font-semibold text-gray-800 mt-6">{title}</h3>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
