import React, { useState } from "react";

const MatchTabs = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="p-4 sm:p-6">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 sm:gap-4 border-b-2 pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm sm:text-lg font-semibold transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default MatchTabs;
