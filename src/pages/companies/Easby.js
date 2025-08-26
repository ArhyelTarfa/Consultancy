// src/pages/companies/EasbyRoadPage.js
import React, { useState } from 'react';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import { motion } from 'framer-motion';
import Grows from '../../imgs/Grows In Rows.jpg';
import Morning from '../../imgs/Morning-Dew-Farms-Logo-TRANSPARENT-02.png';
import Still from '../../imgs/Sill Design Architect Ltd.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./client.css"; // 🔹 We'll create this file for custom styles
// ------------------ HERO SECTION ------------------
const Hero = () => (
  <section className="bg-gradient-to-r from-orange-700 to-gray-800 text-white py-20 text-center">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Easby Road</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Turning ideas into ventures. Turning ventures into impact.
        Easby Road Consulting helps ambitious founders, organisations, and ecosystems unlock growth
        through strategy, structure, and execution.
      </p>
    </motion.div>
  </section>
);

// ------------------ CLIENTS SECTION ------------------


const Clients = () => {
  const [expanded, setExpanded] = useState(null);

  const clients = [
    {
      name: "Morning Dew Farms Ltd",
      logo: Morning,
      shortSummary:
        "Morning Dew Farms Ltd (MD Farms) is a leading integrated poultry and livestock farm based in Ibadan, Oyo State, Nigeria.",
      fullSummary:
        "Morning Dew Farms Ltd (MD Farms) is a leading integrated poultry and livestock farm based in Ibadan, Oyo State, Nigeria. We specialise in the production of high-quality poultry products, eggs, broilers, and premium livestock—while also operating a modern feed mill that supplies nutritious feed to farmers across the region. With a strong commitment to responsible farming practices, we ensure our birds and animals are raised in a stress-free environment, producing healthier, tastier, and more sustainable food. At MD Farms, we are passionate about supporting the growth of the Nigerian poultry industry by providing reliable products, sharing knowledge, and building lasting partnerships with customers and fellow farmers."
    },
    {
      name: "Sill Designs Architect Ltd.",
      logo: Still,
      shortSummary:
        "Sill Designs Architect Ltd. is a forward-thinking architectural practice driven by innovation and sustainable design solutions.",
      fullSummary:
        "Sill Designs Architect Ltd. is a forward-thinking architectural practice driven by the passion to deliver quality, innovative, and sustainable design solutions to our diverse clientele. Our philosophy is rooted in excellence, creativity, and integrity—values that guide every stage of our work from concept development to project execution.\n\nAt the heart of our success is a team of highly talented, resourceful, and committed professionals who bring together a wealth of expertise across architecture, design, and project management. Their dedication enables us to consistently exceed client expectations while balancing aesthetics, functionality, and cost-effectiveness.\n\nOver the years, we have built a reputation for delivering projects that respond to context, culture, and client needs while embracing modern technology and design innovation. Whether residential, commercial, or institutional, each project is approached with precision and a strong commitment to quality, ensuring that we create spaces that are not only beautiful but also sustainable and enduring."
    },
    {
      name: "Grows In Rows Limited (GIR)",
      logo: Grows,
      shortSummary:
        "Grows In Rows Limited is a Nigerian agribusiness consultancy dedicated to unlocking value across agricultural value chains.",
      fullSummary:
        "Grows In Rows Limited is a Nigerian agribusiness consultancy dedicated to unlocking value across agricultural value chains. We provide transaction advisory, market access solutions, and project implementation support for farmers, cooperatives, and agribusiness stakeholders. Our focus is on sustainable practices, compliance with regulatory frameworks, and innovative financing models that empower smallholder farmers and strengthen food systems."
    },
    {
      name: "Build My House Africa",
      logo: "https://via.placeholder.com/150",
      shortSummary: "Build My House Africa – description coming soon.",
      fullSummary:
        "Build My House Africa is committed to providing innovative solutions in real estate and housing development across Africa. (Insert full description here once ready)."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Clients
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          We’ve worked with a diverse range of clients including startups, development partners,
          governments, and investment firms. Our solutions are tailored, strategic, and results-driven.
        </p>

        {/* Swiper Slideshow */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-auto mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {expanded === index ? client.fullSummary : client.shortSummary}
                </p>
                <button
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-orange-600 hover:text-black font-medium text-sm transition-colors self-center"
                >
                  {expanded === index ? "Show Less" : "Read More"}
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};


// ------------------ INSIGHTS & PROJECTS ------------------
const InsightsAndProjects = () => (
  <section className="py-20 bg-white text-center">
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Insights & Projects
      </motion.h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-6">
        From whitepapers to pilot programs, here are a few highlights of the work we’ve done across
        industries and regions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Urban Mobility Pilot</h3>
          <p className="text-sm text-gray-600">
            Designed and implemented a clean mobility framework for a fast-growing African city.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">AgriTech Roadmap</h3>
          <p className="text-sm text-gray-600">
            Developed a post-harvest preservation solution to address supply chain losses.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Investment Readiness Bootcamp</h3>
          <p className="text-sm text-gray-600">
            Trained MSMEs on funding strategy, business models, and pitch design in collaboration with an NGO.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// ------------------ PAGE EXPORT ------------------
const EasbyRoadPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Clients />
      <InsightsAndProjects />
      <Contact />
    </div>
  );
};

export default EasbyRoadPage;
