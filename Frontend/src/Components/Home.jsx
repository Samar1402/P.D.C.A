import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cricket from "./../images/backg.jpg";

const NotificationCard = ({ title, pdf_path }) => (
  <a
    href={`http://localhost:3000${pdf_path}`}
    target="_blank"
    rel="noopener noreferrer"
    className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between transition-transform transform hover:scale-105 cursor-pointer"
  >
    <h2 className="text-lg font-semibold text-white ">{title}</h2>
  </a>
);

const MatchCard = ({ title, score, match }) => (
  <div className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between transition-transform transform hover:scale-105">
    <div className="flex flex-col gap-2 text-sm text-gray-300">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {match && (
        <p className="text-gray-200 font-medium pt-2">
          Match: <span className="text-white">{match}</span>
        </p>
      )}
      {score && <p className="text-white">Score: {score}</p>}
    </div>
  </div>
);

const NotificationSection = ({ title, link, data, isNotification }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const visibleItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="m-4">
      <Link
        to={link}
        className="text-lg sm:text-3xl p-4 text-white hover:underline"
      >
        {title}
      </Link>
      <div className="py-4 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center text-white">
        {visibleItems.map((item, index) =>
          isNotification ? (
            <NotificationCard
              key={index}
              title={item.title}
              pdf_path={item.pdf_path}
            />
          ) : (
            <MatchCard
              key={index}
              title={item.title}
              match={item.match}
              score={item.score}
            />
          )
        )}
      </div>

      {data.length > itemsPerPage && (
        <div className="flex justify-center gap-4 mt-4">
          {currentPage > 0 && (
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={handlePrevPage}
            >
              Previous
            </button>
          )}
          {(currentPage + 1) * itemsPerPage < data.length && (
            <button
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={handleNextPage}
            >
              Next
            </button>
          )}
        </div>
      )}
    </section>
  );
};

const Home = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const carouselImages = [
    "/gallery/pic1.jpeg",
    "/gallery/pic2.jpeg",
    "/gallery/pic3.jpeg",
    "/gallery/pic6.jpeg",
    "/gallery/pic9.jpeg",
    "/gallery/pic11.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
      document.querySelectorAll(".slick-slide").forEach((slide, index) => {
        if (index === newIndex) {
          slide.removeAttribute("aria-hidden");
          slide.setAttribute("tabindex", "0");
          slide.removeAttribute("inert");
        } else {
          slide.setAttribute("aria-hidden", "true");
          slide.setAttribute("tabindex", "-1");
          slide.setAttribute("inert", "true"); // Prevent focus & interactions
        }
      });
    },
    afterChange: () => {
      if (
        document.activeElement &&
        document.activeElement.closest('.slick-slide[aria-hidden="true"]')
      ) {
        document.activeElement.blur(); // 🔹 Remove focus from hidden slides
      }
    },
  };

  useEffect(() => {
    fetch("http://localhost:3000/result")
      .then((response) => response.json())
      .then((data) => {
        const formattedMatches = data.map((match) => ({
          title: `LEAGUE MATCH ${match.id}`,
          match: `${match.first_team} VS ${match.second_team}`,
          score: `${match.first_team_score}  -   ${match.second_team_score}`,
        }));
        setRecentMatches(formattedMatches);
      })
      .catch((error) => {
        console.error("Error fetching match results:", error);
      });

    fetch("http://localhost:3000/notifications")
      .then((response) => response.json())
      .then((data) => {
        const notificationData = data.map((notification) => ({
          title: notification.title,
          pdf_path: notification.pdf_path,
        }));
        setNotifications(notificationData);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <div
      className="overflow-x-hidden relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${Cricket})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full ">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-${index}`}
                className="sm:w-[65%] mx-auto sm:h-[28rem] object-fill sm:rounded-3xl  w-full h-44 sm:mt-6"
              />
            </div>
          ))}
        </Slider>
      </div>

      <NotificationSection
        title="NOTIFICATIONS"
        link="/notifications"
        data={notifications}
        isNotification={true}
      />

      <NotificationSection
        title="RECENT MATCHES"
        link="/matchresults"
        data={recentMatches}
        isNotification={false}
      />
    </div>
  );
};

export default Home;
