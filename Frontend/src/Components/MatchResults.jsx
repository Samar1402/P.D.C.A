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
    <div className="max-w-lg lg:max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        {`${matchData.team1} vs ${matchData.team2}`}
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center border-b pb-4 mb-4">
        <div className="text-center mb-4 lg:mb-0 lg:mr-4">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
            {matchData.team1}
          </h2>
          <p className="text-gray-600">
            {matchData.score1} ({matchData.overs1} overs)
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
            {matchData.team2}
          </h2>
          <p className="text-gray-600">
            {matchData.score2} ({matchData.overs2} overs)
          </p>
        </div>
      </div>
      <p className="text-center text-green-600 font-medium lg:text-lg">
        {matchData.result}
      </p>
      <h3 className="mt-6 text-lg lg:text-xl font-semibold text-gray-700">
        Highlights
      </h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
