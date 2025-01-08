import React from "react";

const MatchCard = ({ match }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          {match.team1} vs {match.team2}
        </h2>
        <p className="text-gray-600">
          {match.date} at {match.time}
        </p>
        <p className="text-gray-500 text-sm">{match.venue}</p>
      </div>
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
