import React from 'react';
import firmImage from '../imgs/firm.jpg';
import aboutBack from '../imgs/Aboutback.jpg';

const About = () => {
  return (
    <div id="about">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-6 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 leading-snug">
              About Easby Road Ltd
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Founded in 2021, Easby Road Ltd is a consultancy firm
              dedicated to delivering high-impact solutions for
              businesses, governments, and non-governmental
              organizations. With a focus on excellence and innovation,
              we specialize in addressing the unique challenges of our
              clients by offering tailored advisory services across key
              sectors such as technology, logistics, and agriculture.
              Our team of experts combines industry knowledge with a
              commitment to sustainability, ensuring that every project
              we undertake contributes to economic growth and long-term resilience. At Easby Road Ltd, we don’t just provide
              solutions; we build partnerships that empower our clients
              to achieve their goals.
            </p>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src={firmImage}
              alt="About Us"
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Background Image */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: `url(${aboutBack})` }}
      >
        <div className="container mx-auto text-center md:text-left px-6">
          <div className="max-w-3xl p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To empower businesses and communities with 
              tailored consultancy and sustainable solutions 
              that drive measurable impact across diverse 
              industries.
            </p>
          </div>

          <div className="max-w-3xl mt-10 p-6 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              To be the trusted partner for innovative, 
              transformative solutions in consultancy, 
              technology, and sustainable development, 
              recognized for creating lasting value for 
              clients and communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
