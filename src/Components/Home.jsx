import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NotificationCard = ({ title, date, match }) => (
  <div className="h-60 w-full sm:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between">
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
    <div className="py-4 px-10 flex  gap-10 justify-center text-white">
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
  return <div>Home</div>;
};

export default Home;
