import React, { useState } from "react";
import AffiliatedMembers from "./AffiliatedMembers";
import NonAffiliatedMembers from "./NonAffiliatedMembers";
import Bg from "./../images/div2.jpg"

const MembersPage = () => {
  const [activeTab, setActiveTab] = useState("affiliated");

  return (
    <div className="bg-blue-50 min-h-screen p-4"
    >
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setActiveTab("affiliated")}
          className={`text-sm sm:text-lg font-semibold transition-colors ${
            activeTab === "affiliated"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          AFFILIATED MEMBERS
        </button>
        <button
          onClick={() => setActiveTab("non-affiliated")}
          className={`text-sm sm:text-lg font-semibold transition-colors ${
            activeTab === "non-affiliated"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-800"
          }`}
        >
          ASSOCIATED MEMBERS
        </button>
      </div>

      <div className="mt-4">
        {activeTab === "affiliated" && <AffiliatedMembers />}
        {activeTab === "non-affiliated" && <NonAffiliatedMembers />}
      </div>
    </div>
  );
};

export default MembersPage;
