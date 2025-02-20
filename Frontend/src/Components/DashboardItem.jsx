import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardItem = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [totalMatches, setTotalMatches] = useState(0);
  const [totalUpcomingMatches, setTotalUpcomingMatches] = useState(0);

  useEffect(() => {
    // Fetch recent match results and total match count from the backend
    axios
      .get("http://localhost:3000/dashboardResult", { withCredentials: true })
      .then((response) => {
        setRecentMatches(response.data.recentMatches); // Store recent match results
        setTotalMatches(response.data.totalMatches); // Store total match count
        setTotalUpcomingMatches(response.data.totalUpcomingMatches);
      })
      .catch((error) => {
        console.error("Error fetching recent match data:", error);
      });
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col w-full py-4">
        <div className="bg-white shadow-md rounded p-4 mb-6">
          <h2 className="text-xl font-bold">Welcome, PDCA</h2>
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
            <p className="text-2xl text-green-600">{totalUpcomingMatches}</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded">
            <h3 className="text-lg font-semibold">Match Results</h3>
            <p className="text-2xl text-purple-600">{totalMatches}</p>{" "}
            {/* Display total matches */}
          </div>
        </div>

        {/* Recent Matches */}
        <div className="mt-6 bg-white shadow-md rounded p-4">
          <h3 className="text-lg font-semibold">Recent Matches</h3>
          <table className="w-full mt-4 text-left table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Match</th>
                <th className="border p-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {recentMatches.length > 0 ? (
                recentMatches.map((match, index) => (
                  <tr key={index}>
                    <td className="border p-2">
                      {match.first_team} vs {match.second_team}
                    </td>
                    <td className="border p-2">
                      {match.winning_team} {match.match_description}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="border p-2 text-center">
                    No recent matches
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
