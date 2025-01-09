

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NotificationCard = ({ title, date, match, pdfUrl }) => (
  <a
    href={pdfUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between transition-transform transform hover:scale-105"
  >
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
  </a>
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
          match={item.match}
          pdfUrl={item.pdfUrl}
        />
      ))}
    </div>
  </section>
);

const Home = () => {
  const notifications = [
    {
      title: "Corrigendum of PDCA Meeting",
      date: "28/12/2023",
      pdfUrl: "/pdfs/Cricket.pdf",
    },
    {
      title: "New Updates on Project Timelines",
      date: "27/12/2023",
      pdfUrl: "/pdfs/Cricket.pdf",
    },
    {
      title: "Holiday Schedule Announced",
      date: "26/12/2023",
      pdfUrl: "/pdfs/Cricket.pdf",
    },
  ];

  const pdcaNotification = [
    {
      title: "PDCA Senior Super League Group B Fixture",
      date: "18/05/2024",
    },
    {
      title: "SHORTLISTED PLAYERS",
      date: "27/05/2024",
    },
    {
      title: "CORIENDUM",
      date: "26/06/2024",
    },
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

  const carouselImages = [
    "src/images/gallery/pic1.jpeg",
    "src/images/gallery/pic2.jpeg",
    "src/images/gallery/pic3.jpeg",
    "src/images/gallery/pic6.jpeg",
    "src/images/gallery/pic9.jpeg",
    "src/images/gallery/pic11.jpeg",
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
    pauseOnHover: false, // Ensures autoplay doesn't stop on hover
  };

  return (
    <div className="overflow-x-hidden relative">
      <div className="relative -z-10 w-full mt-6">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-[90%] mx-auto h-[28rem] object-fill"
              />
            </div>
          ))}
        </Slider>
      </div>

      <NotificationSection
        title="NOTIFICATIONS"
        link="/notifications"
        data={notifications}
      />

      <NotificationSection
        title="NOTIFICATION OF PDCA MATCHES"
        link="/notifications"
        data={pdcaNotification}
      />

      <NotificationSection
        title="RECENT MATCHES"
        link="/matchresults"
        data={recentMatches}
      />
    </div>
  );
};

export default Home;
