import React from "react";
import MatchTabs from "./MatchTabs";
import UpcomingMatches from "./UpcomingMatches";
import MatchResults from "./MatchResults";

const ResultPage = () => {
  return (
    <div className="p-6">
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
  );
};

export default ResultPage;
