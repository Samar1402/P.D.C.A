import React, { useState } from "react";

const MatchTabs = ({ tabs, defaultTab, children }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="flex gap-4 border-b-2 pb-2">
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`text-lg font-semibold ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

export default MatchTabs;
