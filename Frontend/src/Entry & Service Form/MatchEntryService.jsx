import React, { useState } from "react";
import ResultMatchEntryService from "./ResultMatchEntryService.jsx";
import UpcomingMatchEntryService from "./UpcomingMatchEntryService";

const MatchEntryService = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
      {/* Tabs for switching components */}
      <div className="flex justify-center w-full mb-4 border-b-2 border-gray-300">
        <button
          onClick={() => handleTabChange("upcoming")}
          className={`${
            activeTab === "upcoming" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-600"
          } text-lg px-6 py-2 focus:outline-none hover:text-blue-500 transition-all duration-300`}
        >
          Upcoming Match Entry
        </button>
        <button
          onClick={() => handleTabChange("result")}
          className={`${
            activeTab === "result" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-600"
          } text-lg px-6 py-2 focus:outline-none hover:text-blue-500 transition-all duration-300`}
        >
          Result Match Entry
        </button>
      </div>

      {/* Render the selected component */}
      <div className="w-full max-w-4xl">
        {activeTab === "result" ? (
            <ResultMatchEntryService />
        ) : (
            <UpcomingMatchEntryService />
        )}
      </div>
    </div>
  );
};

export default MatchEntryService;
