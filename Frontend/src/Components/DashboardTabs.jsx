import React from "react";

const DashboardTabs = ({ activeTab, children }) => {
  return (
    <div className="p-4 sm:p-6">
      {/* Tab Content */}
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
};

export default DashboardTabs;
