import React from "react";
import { Link, useLocation } from "react-router-dom";
import pdcalogo from "../images/logo.png";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const FooterSection = ({ title, links }) => (
  <div className="py-4 px-2 flex flex-col">
    <h1 className="text-xl font-serif text-white">{title}</h1>
    <div className="mt-4 text-zinc-400 flex flex-col gap-3 pl-1">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="hover:text-red-600 flex items-center gap-2"
        >
          <ChevronRightIcon className="w-6 h-6 text-red-500 font-extrabold" />
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/dashboard") {
    return null; // Do not render the header
  }

  const sections = [
    {
      title: "About",
      links: [
        { label: "History of PDCA", path: "/about/history" },
        { label: "Management Committee", path: "/about/committeeMembers" },
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
        { label: "Affliated Clubs", path: "/affliatedmembers" },
        { label: "Non-Affliated Clubs", path: "/nonaffliatedmembers" },
      ],
    },
  ];

   


  return (
    <footer className="bg-blue-950 text-white py-8 px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mx-4">
        {/* Logo Section */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img src={pdcalogo} alt="PDCA Logo" className="w-28 h-24 mb-4" />
          <p className="text-center lg:text-left">
            Patna District Cricket Association
          </p>
          <p className="text-center lg:text-left mt-2 text-sm">
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
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Patna District Cricket Association.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
