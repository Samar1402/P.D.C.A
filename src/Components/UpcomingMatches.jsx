import React, { useState } from "react";
import MatchCard from "./MatchCard";

const UpcomingMatches = () => {
  // Match data
  const [matches, setMatches] = useState([
    {
      id: 1,
      team1: "India",
      team2: "Pakistan",
      date: "2025-01-15",
      time: "14:00",
      venue: "Wankhede Stadium, Mumbai",
    },
    {
      id: 2,
      team1: "Australia",
      team2: "England",
      date: "2025-01-18",
      time: "18:00",
      venue: "Sydney Cricket Ground, Sydney",
    },
    {
      id: 3,
      team1: "South Africa",
      team2: "New Zealand",
      date: "2025-01-20",
      time: "16:00",
      venue: "Newlands, Cape Town",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Upcoming Matches
      </h1>
      <div className="max-w-4xl mx-auto space-y-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMatches;
