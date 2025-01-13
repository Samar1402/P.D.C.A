import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardTabs from "./DashboardTabs";
import DashboardItem from "./DashboardItem";
import MemberEntryService from "../Entry & Service Form/MemberEntryService";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleNavigate = (path, tab) => {
    setActiveTab(tab); // Update the active tab state
    navigate(path); // Navigate after updating the tab state
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-blue-900 text-white min-h-screen md:min-h-0 fixed md:relative z-10`}
      >
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Cricket Admin</h1>
        </div>
        <nav className="mt-2">
          <div className="space-y-2">
            {/* Sidebar Buttons */}
            <button
              onClick={() => setActiveTab("Dashboard")}
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "Dashboard" ? "bg-blue-700" : ""
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() =>
                handleNavigate("/manage-committee", "ManageCommittee")
              }
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageCommittee" ? "bg-blue-700" : ""
              }`}
            >
              Manage Management Committee
            </button>
            <button
              onClick={() => setActiveTab("ManageMembers")}
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageMembers" ? "bg-blue-700" : ""
              }`}
            >
              Manage Members
            </button>
            <button
              onClick={() => setActiveTab("ManageMatches")}
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageMatches" ? "bg-blue-700" : ""
              }`}
            >
              Manage Matches
            </button>
            <button
              onClick={() =>
                handleNavigate("/statistics", "ManageNotifications")
              }
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageNotifications" ? "bg-blue-700" : ""
              }`}
            >
              Manage Notifications
            </button>
            <button
              onClick={() => handleNavigate("/settings", "ManageMedia")}
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageMedia" ? "bg-blue-700" : ""
              }`}
            >
              Manage Media
            </button>
            <button
              onClick={() => handleNavigate("/settings", "ManageContact")}
              className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                activeTab === "ManageContact" ? "bg-blue-700" : ""
              }`}
            >
              Manage Contact
            </button>

            {/* Logout Button */}
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white p-2 rounded hover:bg-red-700 "
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-4 h-full ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}
      >
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden bg-blue-900 text-white p-2 rounded mb-4"
        >
          {sidebarOpen ? "Close Menu" : "Open Menu"}
        </button>

        {/* Tab Content */}
        <DashboardTabs
          tabs={[
            "Dashboard",
            "ManageMembers",
            "ManageMatches",
            "ManageNotifications",
            "ManageMedia",
            "ManageContact",
          ]}
          activeTab={activeTab}
        >
          {{
            Dashboard: <DashboardItem />,
            ManageMembers: <MemberEntryService />,
            ManageMatches: <div>Manage Matches Content</div>,
            ManageNotifications: <div>Manage Notifications Content</div>,
            ManageMedia: <div>Manage Media Content</div>,
            ManageContact: <div>Manage Contact Content</div>,
          }}
        </DashboardTabs>
      </main>
    </div>
  );
};

export default Dashboard;
