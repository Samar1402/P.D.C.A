import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotificationCard = ({ title, date, match }) => (
  <div className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between">
    <div className="flex flex-col gap-2 text-sm text-gray-300">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faClock} />
        <p>{date}</p>
      </div>
      {match && (
        <p className="text-gray-200 font-medium pt-2">
          Match: <span className="text-white">{match}</span>
        </p>
      )}
    </div>
  </div>
);

const NotificationSection = ({ title, link, data }) => (
  <section className="m-4">
    <Link
      to={link}
      className="text-3xl font-semibold p-4 text-red-800 hover:underline"
    >
      {title}
    </Link>
    <div className="py-4 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center text-white">
      {data.map((item, index) => (
        <NotificationCard
          key={index}
          title={item.title}
          date={item.date}
          match={item.match} // Pass the match field if available
        />
      ))}
    </div>
  </section>
);

const Home = () => {
  const notifications = [
    { title: "Corrigendum of PDCA Meeting", date: "28/12/2023" },
    { title: "New Updates on Project Timelines", date: "27/12/2023" },
    { title: "Holiday Schedule Announced", date: "26/12/2023" },
  ];

  const pdcaNotification = [
    { title: "PDCA Senior Super League Group B Fixture", date: "18/05/2024" },
    { title: "SHORTLISTED PLAYERS", date: "27/05/2024" },
    { title: "CORIENDUM", date: "26/06/2024" },
  ];

  const recentMatches = [
    {
      title: "LEAGUE MATCH 01",
      date: "16/07/2024",
      match: "PMCH CC VS BLUE STAR",
    },
    {
      title: "LEAGUE MATCH 02",
      date: "17/07/2024",
      match: "EAGLE CC VS JP CC",
    },
    {
      title: "LEAGUE MATCH 03",
      date: "28/07/2024",
      match: "VAISHLI CC VS AN CC",
    },
  ];

  return (
    <div>
      <NotificationSection
        title="NOTIFICATIONS"
        link="/notification"
        data={notifications}
      />

      <NotificationSection
        title="NOTIFICATION OF PDCA MATCHES"
        link="/pdca-matches"
        data={pdcaNotification}
      />
      <NotificationSection
        title="RECENT MATCHES"
        link="/recent-match"
        data={recentMatches}
      />
    </div>
  );
};

export default Home;
