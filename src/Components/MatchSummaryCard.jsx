import React from "react";

const MatchSummaryCard = ({ player, performance }) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-50 shadow-sm flex justify-between items-center">
      <p className="text-gray-700 font-medium">{player}</p>
      <p className="text-gray-600">{performance}</p>
    </div>
  );
};

export default MatchSummaryCard;
