import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
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
  // const location = useLocation(); // Get the current location

  // Handle login button click to navigate to the login page
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page when the button is clicked
  };

  // Check if the current path is the dashboard route
  if (location.pathname === "/dashboard") {
    return null; // Do not render the header
  }

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

        <div className="flex flex-col items-center sm:items-end">
          <div className="hidden sm:mb-2 sm:block">
            <button
              onClick={handleLoginClick} // Handle login click
              className="w-40 sm:w-42 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 h-10"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
