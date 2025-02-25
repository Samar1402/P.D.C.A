// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import DashboardTabs from "./DashboardTabs";
// import DashboardItem from "./DashboardItem";
// import MemberEntryService from "../Entry & Service Form/MemberEntryService";
// import MatchEntryService from "../Entry & Service Form/MatchEntryService";
// import NotificationEntryService from "../Entry & Service Form/NotificationEntryService";
// import MediaEntryService from "../Entry & Service Form/MediaEntryService";
// import ContactEntryService from "../Entry & Service Form/ContactEntryService";
// import CommitteeEntryService from "../Entry & Service Form/CommitteeEntryService";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("Dashboard");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside
//         className={`w-64 bg-blue-900 text-white h-screen fixed z-10 overflow-y-auto`}
//       >
//         <div className="p-4 text-center">
//           <h1 className="text-2xl font-bold">Cricket Admin</h1>
//         </div>
//         <nav className="mt-2">
//           <div className="space-y-2">
//             {[
//               { name: "Dashboard", label: "Dashboard" },
//               { name: "ManageCommittee", label: "Manage Management Committee" },
//               { name: "ManageMembers", label: "Manage Members" },
//               { name: "ManageMatches", label: "Manage Matches" },
//               { name: "ManageNotifications", label: "Manage Notifications" },
//               { name: "ManageMedia", label: "Manage Media" },
//               { name: "ManageContact", label: "Manage Contact" },
//             ].map((tab) => (
//               <button
//                 key={tab.name}
//                 onClick={() => setActiveTab(tab.name)}
//                 className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
//                   activeTab === tab.name ? "bg-blue-700" : ""
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//             <div className="flex justify-center">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white p-2 rounded-2xl hover:bg-red-700 w-48 mt-8"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className={`flex-1 p-4 ml-64 transition-all duration-300`}>
//         {/* Mobile Toggle Button */}
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="md:hidden bg-blue-900 text-white p-2 rounded mb-4"
//         >
//           {sidebarOpen ? "Close Menu" : "Open Menu"}
//         </button>

//         {/* Tab Content */}
//         <DashboardTabs
//           tabs={[
//             "Dashboard",
//             "ManageCommittee",
//             "ManageMembers",
//             "ManageMatches",
//             "ManageNotifications",
//             "ManageMedia",
//             "ManageContact",
//           ]}
//           activeTab={activeTab}
//         >
//           {{
//             Dashboard: <DashboardItem />,
//             ManageCommittee: <DashboardItem />,
//             ManageMembers: <DashboardItem />,
//             ManageMatches: <MatchEntryService />,
//             ManageNotifications: <NotificationEntryService />,
//             ManageMedia: <MediaEntryService />,
//             ManageContact: <DashboardItem />,
//           }}
//         </DashboardTabs>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardTabs from "./DashboardTabs";
import DashboardItem from "./DashboardItem";
import MemberEntryService from "../Entry & Service Form/MemberEntryService";
import MatchEntryService from "../Entry & Service Form/MatchEntryService";
import NotificationEntryService from "../Entry & Service Form/NotificationEntryService";
import MediaEntryService from "../Entry & Service Form/MediaEntryService";
import ContactEntryService from "../Entry & Service Form/ContactEntryService";
import CommitteeEntryService from "../Entry & Service Form/CommitteeEntryService";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-blue-900 text-white h-screen fixed z-10 overflow-y-auto`}
      >
        <div className="p-4 text-center">
          <h1 className="text-2xl font-bold">Cricket Admin</h1>
        </div>
        <nav className="mt-2">
          <div className="space-y-2">
            {[
              { name: "Dashboard", label: "Dashboard" },
              { name: "ManageCommittee", label: "Manage Management Committee" },
              { name: "ManageMembers", label: "Manage Members" },
              { name: "ManageMatches", label: "Manage Matches" },
              { name: "ManageNotifications", label: "Manage Notifications" },
              { name: "ManageMedia", label: "Manage Media" },
              { name: "ManageContact", label: "Manage Contact" },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`block p-4 hover:bg-blue-700 rounded w-full text-left ${
                  activeTab === tab.name ? "bg-blue-700" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="flex justify-center">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white p-2 rounded-2xl hover:bg-red-700 w-48 mt-8"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 p-4 ml-64 transition-all duration-300`}>
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
            "ManageCommittee",
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
            ManageCommittee: <DashboardItem />,
            ManageMembers: <DashboardItem />,
            ManageMatches: <MatchEntryService />,
            ManageNotifications: <NotificationEntryService />,
            ManageMedia: <MediaEntryService />,
            ManageContact: <DashboardItem />,
          }}
        </DashboardTabs>
      </main>
    </div>
  );
};

export default Dashboard;
