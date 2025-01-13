import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";

const MemberEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  return (
    <div className="flex flex-col items-center bg-blue-100 min-h-screen">
      <header className="bg-blue-950 shadow-md rounded-md p-6 w-full flex justify-end items-center px-48">
        <div>
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
      </header>

      <div className="bg-white shadow-md rounded-md p-6 px-48 w-[70%] mt-8 flex-1">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-center text-gray-800">
            {activeForm === "entry"
              ? "Member Entry Form"
              : "Member Service Form"}
          </h3>
        </div>
        {activeForm === "entry" ? (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-black w-72 border-b-2 border-black pb-1">
                Club Name
              </label>
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 text-md border-x-0 border-t-0"
                placeholder="Enter name"
              />
            </div>
            <br />
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-black w-72 border-b-2 border-black pb-1">
                President
              </label>
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 text-md border-x-0 border-t-0"
                placeholder="Enter president"
              />
            </div>
            <br />
            <div className="flex items-center space-x-4">
              <label className="block text-sm font-medium text-black w-72 border-b-2 border-black pb-1">
                Secretary
              </label>
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 text-md border-x-0 border-t-0"
                placeholder="Enter secretary"
              />
            </div>
            <br />
            <div className="flex justify-around mt-4">
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
        ) : (
          <div className="space-y-4 -mx-20">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 border-x-0 border-t-0"
                placeholder="Search by ID"
              />
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 border-x-0 border-t-0"
                placeholder="Search by Club Name"
              />
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 border-x-0 border-t-0"
                placeholder="Search by PresidentName"
              />
              <input
                type="text"
                className="flex-1 border border-black border-b-2 h-[25px] outline-none px-3 pb-1 border-x-0 border-t-0"
                placeholder="Search by Secretary"
              />
            </div>
            <br />
            <div className="flex justify-around mt-4">
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

export default MemberEntryService;
