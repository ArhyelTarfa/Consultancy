import React, { useState, useEffect } from 'react';
import logo from '../imgs/Op-Co Logos/Easby Road.png';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
          {/* Logo & Slogan */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Link to="/" className="flex flex-col md:flex-row items-center">
              <img src={logo} alt="logo" className="h-12 w-auto" />
              <span className="text-gray-900 text-sm md:text-sm md:mt-5 font-bold italic md:ml-5">
                Taking You There
              </span>
            </Link>
          </div>


        {/* Hamburger Menu (Visible on smaller screens) */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
              <li>
                <a href="/#about" className="hover:text-gray-500" onClick={handleLinkClick}>
                  About
                </a>
              </li>
              {/* <li>
                <a href="/#services" className="hover:text-gray-500" onClick={handleLinkClick}>
                  Services
                </a>
              </li> */}
              <li>
                <a href="/#companies" className="hover:text-gray-500" onClick={handleLinkClick}>
                  Our Companies
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-gray-500" onClick={handleLinkClick}>
                  Contact
                </a>
              </li>
            </ul>

        </nav>
      </div>
    </header>
  );
};

export default Header;
