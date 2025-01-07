import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import pdcalogo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle login button click to navigate to the login page
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page when the button is clicked
  };

  return (
    <header>
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 bg-blue-950">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img
            src={pdcalogo}
            alt="PDCA"
            className="w-20 sm:w-28 h-20 sm:h-24"
          />
          <p className="text-white text-center sm:text-left text-sm sm:text-lg ml-4">
            Patna District Cricket Association
          </p>
        </div>

        {/* Login Button and Social Media Icons */}
        <div className="flex flex-col items-center sm:items-end">
          {/* Login Button */}
          <div className="mb-4 sm:mb-2">
            <button
              onClick={handleLoginClick} // Handle login click
              className="w-40 sm:w-52 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 h-10"
            >
              Login
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-end gap-3">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-lg sm:text-xl text-white hover:text-green-400 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-lg sm:text-xl text-white hover:text-blue-400 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-lg sm:text-xl text-white hover:text-gray-900 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-lg sm:text-xl text-white hover:text-red-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
