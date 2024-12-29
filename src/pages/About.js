import React from 'react';
import firmImage from '../imgs/firm.jpeg';

const About = () => {
  return (
    <div id="about">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
              About Our Consulting Firm
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We are a team of dedicated professionals providing innovative and tailored solutions to businesses worldwide.
            </p>
          </div>
          <div className="md:w-1/2 px-6 mt-10 md:mt-0 flex justify-center">
            <img
              src={firmImage}
              alt="About Us"
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
