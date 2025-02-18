import React, { useState, useEffect } from "react";
import MatchSummaryCard from "./MatchSummaryCard";
import axios from "axios";

const MatchResult = () => {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    // Fetch match data from the backend
    axios
      .get("http://localhost:5000/result", { withCredentials: true })
      .then((response) => {
        // Assuming response.data is an array of match results
        setMatchData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!matchData) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div className="max-w-lg lg:max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 space-y-6">
      {matchData.map((match) => (
        <div
          key={match.id}
          className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-6 border border-gray-300"
        >
          <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            {`${match.first_team} vs ${match.second_team}`}
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-4 mb-4">
            <div className="text-center mb-4 lg:mb-0 lg:mr-4">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
                {match.first_team}
              </h2>
              <p className="text-gray-600">{match.first_team_score}</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
                {match.second_team}
              </h2>
              <p className="text-gray-600">{match.second_team_score}</p>
            </div>
          </div>
          <p className="text-center text-green-600 font-medium lg:text-lg">
            {`${match.winning_team} ${match.match_description}`}
          </p>
          <h3 className="mt-6 text-lg lg:text-xl font-semibold text-gray-700">
            Highlights
          </h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                player: match.winning_team_batsone,
                performance: match.batsone_score,
              },
              {
                player: match.winning_team_batstwo,
                performance: match.batstwo_score,
              },
              {
                player: match.winning_team_bowlerone,
                performance: match.bowlerone_wicket,
              },
            ].map((item, index) => (
              <MatchSummaryCard
                key={index}
                player={item.player}
                performance={item.performance}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchResult;
