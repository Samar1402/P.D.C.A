import React from "react";
// import Dashboard from "./Dashboard";

const DashboardItem = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full py-4">
        <div className="bg-white shadow-md rounded p-4 mb-6">
          <h2 className="text-xl font-bold">Welcome, Samarjeet</h2>
          <p className="text-gray-600">Here’s what’s happening today:</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
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
      </div>
    </div>
  );
};

export default DashboardItem;
