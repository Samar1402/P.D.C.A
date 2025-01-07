import React from "react";
import Tabs from "./Tabs"; // Ensure the Tabs component is imported
import UpcomingMatches from "./UpcomingMatches"; // Ensure the UpcomingMatches component is imported
import MatchResults from "./MatchResults"; // Ensure the MatchResults component is imported

const ResultPage = () => {
  return (
    <div className="p-6">
      <Tabs
        tabs={["Upcoming Matches", "Match Results"]}
        defaultTab="Upcoming Matches"
      >
        {{
          "Upcoming Matches": <UpcomingMatches />,
          "Match Results": <MatchResults />,
        }}
      </Tabs>
    </div>
  );
};

export default ResultPage;
