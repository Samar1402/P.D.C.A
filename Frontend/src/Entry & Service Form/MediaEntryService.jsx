import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";

const MediaEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
      {/* Buttons aligned to the right */}
      <div className="flex justify-center sm:justify-end w-full mb-4">
        <button
          onClick={() => handleFormSelection("entry")}
          className={`${
            activeForm === "entry"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mr-2`}
        >
          Entry Form
        </button>
        <button
          onClick={() => handleFormSelection("service")}
          className={`${
            activeForm === "service"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
        >
          Service Form
        </button>
      </div>

      {/* Form centered */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            {activeForm === "entry" ? "Media Entry Form" : "Media Service Form"}
          </h3>
        </div>
        {activeForm === "entry" ? (
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              {/* File input */}
              <div className="relative flex-1 w-full">
                <input
                  type="file"
                  accept=".jpg"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
                  Choose a JPG file to attach...
                </div>
              </div>
              {/* Buttons centered */}
              <div className="flex justify-center mt-4 space-x-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
                  <FontAwesomeIcon icon={faCheck} className="mr-2" />
                  Submit
                </button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
                  <FontAwesomeIcon icon={faBroom} className="mr-2" />
                  Reset
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Search input */}
            <div className="flex justify-center w-full">
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
                placeholder="Search by date"
              />
            </div>
            {/* Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
              </button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
                <FontAwesomeIcon icon={faBroom} className="mr-2" />
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaEntryService;
