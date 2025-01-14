import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";

const ResultMatchEntryService = () => {
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
            {activeForm === "entry"
              ? "Match Result Entry Form"
              : "Match Result Service Form"}
          </h3>
        </div>
        {activeForm === "entry" ? (
          <div className="space-y-4">
            {[
              {
                label: "Enter Clubs Name",
                inputs: [
                  { placeholder: "1st Club Name" },
                  { placeholder: "2nd Club Name" },
                ],
              },
              {
                label: "Enter 1st Club Score",
                inputs: [{ placeholder: "Example: India 321/8 (50.0 over)" }],
              },
              {
                label: "Enter 2nd Club Score",
                inputs: [
                  { placeholder: "Example: Australia 300/10 (48.5 over)" },
                ],
              },
              {
                label: "Won Club",
                inputs: [{ placeholder: "Example: India Won by 20 runs" }],
              },
              ...["Player 1", "Player 2", "Player 3"].map((player, index) => ({
                label: `${player} Name and Score`,
                inputs: [
                  { placeholder: "Enter Player Name" },
                  { placeholder: "Enter Player Score" },
                ],
              })),
            ].map(({ label, inputs }, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
              >
                <label className="block text-sm font-medium text-black w-full sm:w-48  border-black pb-1">
                  {label}
                </label>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                  {inputs.map(({ placeholder }, inputIndex) => (
                    <input
                      key={inputIndex}
                      type="text"
                      className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
                      placeholder={placeholder}
                    />
                  ))}
                </div>
              </div>
            ))}
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
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
              {["Search by Won Club", "Search by Place"].map((placeholder) => (
                <input
                  key={placeholder}
                  type="text"
                  className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
                  placeholder={placeholder}
                />
              ))}
            </div>
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

export default ResultMatchEntryService;
