import React from 'react';

const Footer = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a leading consulting firm dedicated to delivering innovative and tailored solutions for businesses worldwide.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, '#home')}
                className="text-gray-400 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, '#about')}
                className="text-gray-400 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, '#services')}
                className="text-gray-400 hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="text-gray-400 hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="text-gray-400 mt-4">Email: info@consultingfirm.com</p>
          <p className="text-gray-400">Phone: +123-456-7890</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-center text-white mb-4">Our Location</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d86510.37222164494!2d-2.111340094645534!3d7.320953901580836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1735502502958!5m2!1sen!2sng"
            width="50%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Firm Location"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
