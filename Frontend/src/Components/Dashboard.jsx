import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (example: localStorage)
    localStorage.removeItem("authToken");
    // Redirect to login page
    navigate("/login");
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
            <Link
              to="/dashboard"
              className="block p-4 hover:bg-blue-700 rounded"
            >
              Dashboard
            </Link>
            <Link to="/players" className="block p-4 hover:bg-blue-700 rounded">
              Manage Management Committee
            </Link>
            <Link to="/memberentryservice" className="block p-4 hover:bg-blue-700 rounded">
              Manage Members
            </Link>
            <Link to="/matches" className="block p-4 hover:bg-blue-700 rounded">
              Manage Matches
            </Link>
            <Link
              to="/statistics"
              className="block p-4 hover:bg-blue-700 rounded"
            >
              Manage Notifications
            </Link>
            <Link
              to="/settings"
              className="block p-4 hover:bg-blue-700 rounded"
            >
              Manage Media
            </Link>
            <Link
              to="/settings"
              className="block p-4 hover:bg-blue-700 rounded"
            >
              Manage Contact
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-4 ${
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

        {/* Logout Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <div className="bg-white shadow-md rounded p-4 mb-6">
          <h2 className="text-xl font-bold">Welcome, Samarjeet</h2>
          <p className="text-gray-600">Here’s what’s happening today:</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-lg font-semibold">Total Players</h3>
            <p className="text-2xl text-blue-600">150</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-lg font-semibold">Upcoming Matches</h3>
            <p className="text-2xl text-green-600">5</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-lg font-semibold">Match Results</h3>
            <p className="text-2xl text-purple-600">2</p>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="mt-6 bg-white shadow-md rounded p-4">
          <h3 className="text-lg font-semibold">Recent Matches</h3>
          <table className="w-full mt-4 text-left table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Match</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Team A vs Team B</td>
                <td className="border p-2">2025-01-01</td>
                <td className="border p-2">Team A won</td>
              </tr>
              <tr>
                <td className="border p-2">Team C vs Team D</td>
                <td className="border p-2">2025-01-02</td>
                <td className="border p-2">Team C won</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
