import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {};

  const handleToggle = () => {
    console.log("Clicked");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-gray-800 px-4 py-2 flex justify-between items-center">
      {/* Brand Section (1/3 width) */}
      <div className="w-1/3 flex items-center">
        <Link to="/">
          <span className="font-bold text-xl text-white">Your Brand Name</span>
        </Link>
      </div>

      {/* menu button */}
      <button className="md:hidden focus:outline-none" onClick={handleToggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navigation Links (2/3 width) */}
      <div className="hidden md:flex w-2/3 justify-end space-x-4">
        <Link to="/about" className="text-white hover:text-gray-400">
          About
        </Link>
        <Link to="/features" className="text-white hover:text-gray-400">
          Features
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-400">
          Contact
        </Link>
        {/* Add more links as needed */}
      </div>
      {/* Mobile Menu Dropdown (Absolute Positioning) */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-20 left-0 right-0 w-full bg-gray-900 opacity-75 z-50 transition-all duration-300 ease-in-out"
          onClick={toggleMobileMenu} // Close on background click
        >
          <div className="fixed top-0 left-0 h-screen w-full overflow-auto bg-white p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
