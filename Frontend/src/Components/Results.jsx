import React from "react";
import MatchTabs from "./MatchTabs";
import UpcomingMatches from "./UpcomingMatches";
import MatchResults from "./MatchResults";
import Cricket from "./../images/backg.jpg";

const ResultPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen"
     style={{
          backgroundImage: `url(${Cricket})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 py-4">
          Cricket Matches
        </h1>
        <MatchTabs
          tabs={["Upcoming Matches", "Match Results"]}
          defaultTab="Upcoming Matches"
        >
          {{
            "Upcoming Matches": <UpcomingMatches />,
            "Match Results": <MatchResults />,
          }}
        </MatchTabs>
      </div>
    </div>
  );
};

export default ResultPage;
