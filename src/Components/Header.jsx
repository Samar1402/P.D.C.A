import React from "react";
import pdcalogo from "../images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="flex px-12 py-4 bg-blue-950 justify-between">
        <div className="flex flex-row items-center">
          <img src={pdcalogo} alt="PDCA" className="w-28 h-24  " />
          <p className="text-white ml-4">Patna District Cricket Association</p>
        </div>
        <div className="flex flex-col ">
          <div>
            <button className="w-52 text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 h-10">
              Login
            </button>
          </div>

          <div className="flex justify-center gap-2">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-xl text-white mt-3 mr-5 "
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl text-white mt-3 mr-5"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-xl text-white mt-3 mr-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
