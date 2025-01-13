import React from "react";

const MatchSummaryCard = ({ player, performance }) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-50 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
      <p className="text-gray-700 font-medium text-base sm:text-lg">
        {player}
      </p>
      <p className="text-gray-600 text-sm sm:text-base">{performance}</p>
    </div>
  );
};

export default MatchSummaryCard;
