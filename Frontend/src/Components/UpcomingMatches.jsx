import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/upcomingMatch",
          {
            withCredentials: true,
          }
        );
        setMatches(response.data || []);
        setError("");
      } catch (err) {
        console.error("Error fetching matches:", err);
        setError("Failed to load matches. Please try again later.");
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="max-w-4xl mx-auto space-y-4">
        {matches.length > 0 ? (
          matches.map((match) => <MatchCard key={match.id} match={match} />)
        ) : (
          <p className="text-center text-gray-500">No matches available.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingMatches;
