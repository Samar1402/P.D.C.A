import React from "react";
import MatchSummaryCard from "./MatchSummaryCard";

const MatchResult = () => {
  const matchData = {
    team1: "India",
    team2: "Australia",
    score1: "320/8",
    score2: "300/9",
    overs1: "50.0",
    overs2: "50.0",
    result: "India won by 20 runs",
    highlights: [
      { player: "Rohit Sharma", performance: "120 (102)" },
      { player: "Virat Kohli", performance: "75 (60)" },
      { player: "Jasprit Bumrah", performance: "3/45" },
    ],
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
        {`${matchData.team1} vs ${matchData.team2}`}
      </h1>
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            {matchData.team1}
          </h2>
          <p className="text-gray-600">
            {matchData.score1} ({matchData.overs1} overs)
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700">
            {matchData.team2}
          </h2>
          <p className="text-gray-600">
            {matchData.score2} ({matchData.overs2} overs)
          </p>
        </div>
      </div>
      <p className="text-center text-green-600 font-medium">
        {matchData.result}
      </p>
      <h3 className="mt-6 text-lg font-semibold text-gray-700">Highlights</h3>
      <div className="mt-4 space-y-4">
        {matchData.highlights.map((item, index) => (
          <MatchSummaryCard
            key={index}
            player={item.player}
            performance={item.performance}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchResult;
