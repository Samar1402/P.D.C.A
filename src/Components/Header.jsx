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
    <div>
      <div className="flex px-8 py-4 bg-blue-950 justify-between">
        <div className="flex flex-row items-center">
          <img src={pdcalogo} alt="PDCA" className="w-28 h-24" />
          <p className="text-white ml-4">Patna District Cricket Association</p>
        </div>
        <div className="flex flex-col">
          <div>
            <button
              onClick={handleLoginClick} // Handle login click
              className="w-52 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 h-10"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center gap-2 ml-6">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-xl text-white mt-3 mr-5 hover:text-green-400 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl text-white mt-3 mr-5 hover:text-blue-400 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-xl text-white mt-3 mr-5 hover:text-gray-900 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-xl text-white mt-3 mr-5 hover:text-red-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
