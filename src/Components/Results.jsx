import React from "react";
import MatchTabs from "./MatchTabs"; // Ensure the Tabs component is imported
import UpcomingMatches from "./UpcomingMatches"; // Ensure the UpcomingMatches component is imported
import MatchResults from "./MatchResults"; // Ensure the MatchResults component is imported

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
