import React, { useState, useEffect } from 'react';

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
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="#home">MyCompany</a>
        </div>

        {/* Hamburger Menu (Visible on smaller screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
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
          } absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex items-center`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <li>
              <a href="#home" className="hover:text-gray-400" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400" onClick={handleLinkClick}>
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
