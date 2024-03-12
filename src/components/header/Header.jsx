import React, { useState } from "react";
// import logo from "../images/logo.svg"; // Replace with your logo
import logo from "../../assets/logo.png";
import chromeIcon from "../../assets/chromeIcon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("Clicked");
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold flex items-center text-gray-800"
        >
          <img src={logo} alt="Your Brand Logo" className="h-8 w-auto mr-2" />
          Wizardshot
        </Link>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            Help Center & Community
          </a>
        </nav>
        <div>
          <button className="install-btn hidden md:flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:ml-4">
            <img
              className="px-1 chrome-icon"
              src={chromeIcon}
              alt="Chrome browser icon"
            />
            <span className="install-text">Install Wizardshot</span>
          </button>
        </div>
        <button
          className="md:hidden focus:outline-none text-gray-600 hover:text-gray-800"
          onClick={handleToggle}
        >
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
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 p-4">
            <a
              href="#"
              className="block text-gray py-2  hover:text-gray-800 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray py-2 hover:text-gray-800 font-medium"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray py-2 hover:text-gray-800 font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray py-2 hover:text-gray-800 font-medium"
            >
              Help Center & Community
            </a>
            <div>
              <button className="install-btn flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:ml-4">
                <img
                  className="px-1 chrome-icon"
                  src={chromeIcon}
                  alt="Chrome browser icon"
                />{" "}
                <span className="install-text">Install Wizardshot</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
