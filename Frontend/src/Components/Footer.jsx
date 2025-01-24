import React from "react";
import { Link, useLocation } from "react-router-dom";
import pdcalogo from "../images/logo.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const FooterSection = ({ title, links }) => (
  <div className="py-4 px-2 flex flex-col ">
    <h1 className="text-base sm:text-xl font-serif text-white">{title}</h1>
    <div className="mt-4 text-zinc-400 flex flex-col gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="hover:text-red-600 flex items-center sm:gap-3" // Adjusted gap for alignment
        >
          <ChevronRightIcon className="sm:w-6 sm:h-6 w-5 h-5 text-red-500 font-extrabold" />
          <span className="text-xs sm:text-sm md:text-base">{link.label}</span>
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/dashboard") {
    return null; // Do not render the footer on the dashboard page
  }

  const sections = [
    {
      title: "About",
      links: [
        { label: "History of PDCA", path: "/about/history" },
        { label: "Management Comm", path: "/about/committeeMembers" },
      ],
    },
    {
      title: "Notifications",
      links: [
        { label: "Latest Notification", path: "/notifications" },
        { label: "PDCA Matches", path: "/notifications" },
      ],
    },
    {
      title: "Matches",
      links: [
        { label: "Upcoming Matches", path: "/upcomingmatches" },
        { label: "Match Results", path: "/matchresults" },
      ],
    },
    {
      title: "Clubs",
      links: [
        { label: "Affiliated Clubs", path: "/affiliatedmembers" },
        { label: "Non-Affiliated Clubs", path: "/nonaffiliatedmembers" },
      ],
    },
  ];

  return (
    <footer className="bg-blue-950 text-white py-8 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mx-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={pdcalogo} alt="PDCA Logo" className="w-28 h-24 mb-4" />
          <p className="text-center lg:text-left text-sm sm:text-base md:text-lg">
            Patna District Cricket Association
          </p>
          <p className="text-center lg:text-left mt-2 text-sm sm:text-base md:text-lg">
            Affiliated to: <br /> Bihar Cricket Association
          </p>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-sm text-gray-400 flex flex-col sm:flex-row justify-center sm:justify-end sm:gap-72 px-4 sm:px-10">
        <p className="mb-2 sm:mb-0 text-sm sm:text-base">
          All rights reserved &copy; {new Date().getFullYear()} Patna District
          Cricket Association.
        </p>
        <p className="text-center sm:text-right sm:text-sm text-xs">
          DEVELOPED BY TEAM <span className="text-red-600"> S.K.A 💛</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
