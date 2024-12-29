import React from 'react';
import aboutImage from '../imgs/About.jpeg';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../useIntersectionObserver';

const Home = () => {
  const [isVisible, elementRef] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  return (
    <div id="home" ref={elementRef} className="flex flex-col md:flex-row items-center justify-between py-20 pt-10 px-4 md:px-12">
      {/* Image Section */}
      <motion.div
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={aboutImage}
          alt="Consulting firm illustration"
          className="rounded-sm shadow-lg w-full max-w-sm"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="text-center md:text-left md:w-1/2"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: isVisible ? 0 : -200, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Welcome to Our Consulting Firm</h1>
        <p className="text-gray-600 mt-4">
          We provide expert solutions tailored to your needs.
        </p>
        <button className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
