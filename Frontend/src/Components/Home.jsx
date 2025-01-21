// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cricket from "./../images/backg.jpg";



// const NotificationCard = ({ title, date, match, pdfUrl }) => (
//   <a
//     href={pdfUrl}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between transition-transform transform hover:scale-105"
//   >
//     <div className="flex flex-col gap-2 text-sm text-gray-300">
//       <h2 className="text-lg font-semibold text-white">{title}</h2>
//       <div className="flex items-center gap-3">
//         <FontAwesomeIcon icon={faClock} />
//         <p>{date}</p>
//       </div>
//       {match && (
//         <p className="text-gray-200 font-medium pt-2">
//           Match: <span className="text-white">{match}</span>
//         </p>
//       )}
//     </div>
//   </a>
// );

// const NotificationSection = ({ title, link, data }) => (
//   <section className="m-4">
//     <Link
//       to={link}
//       className="text-3xl p-4 text-white hover:underline "
//     >
//       {title}
//     </Link>
//     <div className="py-4 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center text-white">
//       {data.map((item, index) => (
//         <NotificationCard
//           key={index}
//           title={item.title}
//           date={item.date}
//           match={item.match}
//           pdfUrl={item.pdfUrl}
//         />
//       ))}
//     </div>
//   </section>
// );

// const Home = () => {
//   const notifications = [
//     {
//       title: "Corrigendum of PDCA Meeting",
//       date: "28/12/2023",
//       pdfUrl: "/pdfs/Cricket.pdf",
//     },
//     {
//       title: "New Updates on Project Timelines",
//       date: "27/12/2023",
//       pdfUrl: "/pdfs/Cricket.pdf",
//     },
//     {
//       title: "Holiday Schedule Announced",
//       date: "26/12/2023",
//       pdfUrl: "/pdfs/Cricket.pdf",
//     },
//   ];

//   // const pdcaNotification = [
//   //   {
//   //     title: "PDCA Senior Super League Group B Fixture",
//   //     date: "18/05/2024",
//   //   },
//   //   {
//   //     title: "SHORTLISTED PLAYERS",
//   //     date: "27/05/2024",
//   //   },
//   //   {
//   //     title: "CORIENDUM",
//   //     date: "26/06/2024",
//   //   },
//   // ];

//   const recentMatches = [
//     {
//       title: "LEAGUE MATCH 01",
//       date: "16/07/2024",
//       match: "PMCH CC VS BLUE STAR",
//     },
//     {
//       title: "LEAGUE MATCH 02",
//       date: "17/07/2024",
//       match: "EAGLE CC VS JP CC",
//     },
//     {
//       title: "LEAGUE MATCH 03",
//       date: "28/07/2024",
//       match: "VAISHLI CC VS AN CC",
//     },
//   ];

//   const carouselImages = [
//     "/gallery/pic1.jpeg",
//     "/gallery/pic2.jpeg",
//     "/gallery/pic3.jpeg",
//     "/gallery/pic6.jpeg",
//     "/gallery/pic9.jpeg",
//     "/gallery/pic11.jpeg",
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 400,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     pauseOnHover: false, // Ensures autoplay doesn't stop on hover
//   };

//   return (
//     <div className="overflow-x-hidden relative bg-cover bg-center"
//     style={{
//       backgroundImage: `url(${Cricket})`,
//       backgroundSize: "100% 100%",
//       backgroundRepeat: "no-repeat",
//     }}>
//       <div className="relative w-full mt-6 ">
//         <Slider {...settings}>
//           {carouselImages.map((image, index) => (
//             <div key={index}>
//               <img
//                 src={image}
//                 alt={`carousel-${index}`}
//                 className="w-[90%] mx-auto h-[28rem] object-fill rounded-3xl"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       <NotificationSection
//         title="NOTIFICATIONS"
//         link="/notifications"
//         data={notifications}
//       />

//       {/* <NotificationSection
//         title="NOTIFICATION OF PDCA MATCHES"
//         link="/notifications"
//         data={pdcaNotification}
//       /> */}

//       <NotificationSection
//         title="RECENT MATCHES"
//         link="/matchresults"
//         data={recentMatches}
//       />
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cricket from "./../images/backg.jpg";

const NotificationCard = ({ title, score, match, pdfUrl }) => (
  <a
    href={pdfUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="h-60 w-full sm:w-96 md:w-80 lg:w-96 border border-slate-950 bg-blue-950 p-6 rounded-3xl flex flex-col justify-between transition-transform transform hover:scale-105"
  >
    <div className="flex flex-col gap-2 text-sm text-gray-300">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      
      {match && (
        <p className="text-gray-200 font-medium pt-2">
          Match: <span className="text-white">{match}</span>
          <p>Score : {score}</p>
        </p>
      )}
      
    </div>
  </a>
);

const NotificationSection = ({ title, link, data }) => (
  <section className="m-4">
    <Link
      to={link}
      className="text-3xl p-4 text-white hover:underline "
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
          score={item.score}
          pdfUrl={item.pdfUrl}
        />
      ))}
    </div>
  </section>
);

const Home = () => {
  const [recentMatches, setRecentMatches] = useState([]);
  const [notifications, setNotifications] = useState([
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
  ]);

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
    pauseOnHover: false, // Ensures autoplay doesn't stop on hover
  };

  // Fetch data from backend
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
  }, []);

  return (
    <div className="overflow-x-hidden relative bg-cover bg-center"
    style={{
      backgroundImage: `url(${Cricket})`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="relative w-full mt-6 ">
        <Slider {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-[90%] mx-auto h-[28rem] object-fill rounded-3xl"
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
        title="RECENT MATCHES"
        link="/matchresults"
        data={recentMatches}
      />
    </div>
  );
};

export default Home;
