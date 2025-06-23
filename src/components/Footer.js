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
          <p className="text-gray-400 mt-4">Email: info@easbyroad.com</p>
          <p className="text-gray-400">Phone: +234 816 874 0399</p>
          <p className="text-gray-400">Phone: +233 555 344 032</p>
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
