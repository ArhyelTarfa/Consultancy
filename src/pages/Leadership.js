// src/pages/Leadership.js
import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../useIntersectionObserver';

import founderImg from '../imgs/firm.jpg'; // replace with your actual images
import boardImg from '../imgs/About.jpeg';

const leaders = [
  {
    name: 'Jane Doe',
    title: 'Founder & CEO',
    image: founderImg,
    bio: 'Jane is a visionary leader with over 15 years of experience in strategy, innovation, and cross-sector partnerships. Her leadership has shaped the core values and growth of Easby Road Ltd.',
  },
  {
    name: 'John Smith',
    title: 'Board Representative',
    image: boardImg,
    bio: 'John brings deep expertise in corporate governance, finance, and strategic consulting. He serves as a guiding force on the Board, ensuring strong oversight and impactful decision-making.',
  },
];

const Leadership = () => {
  const [isVisible, ref] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });

  return (
    <section id="leadership" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Our Leadership
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet the dynamic team driving our mission and vision forward at Easby Road Ltd.
          Their collective experience and leadership provide the foundation for growth,
          innovation, and long-term value creation.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-left flex flex-col items-center md:items-start md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6 shadow"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{leader.title}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
