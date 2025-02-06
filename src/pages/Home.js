import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../useIntersectionObserver';
import easyimg from "../imgs/Easy.jpg"
const Home = () => {
  const [isVisible, elementRef] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

    // Function to handle smooth scroll to the About section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      id="home" 
      ref={elementRef} 
      className="flex flex-col items-center justify-center text-white text-center py-20 px-4 md:px-12"
      style={{
        backgroundImage: `url(${easyimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      {/* Text Section */}
      <motion.div
        className="md:w-2/3 lg:w-1/2 bg-black bg-opacity-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Welcome to EASBY ROAD</h1>
        <p className="mt-4 text-lg">
          We provide expert solutions tailored to your needs.
        </p>
        <button 
          onClick={handleScrollToAbout}  // 🔹 Add smooth scrolling function
          className="mt-8 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};


export default Home;