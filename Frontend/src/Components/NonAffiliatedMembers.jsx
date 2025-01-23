import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "../images/club_logo.png";
import Bg from "./../images/div5.jpg"
import Back from "./../images/bi.jpg"

const NonAffliatedMembers = () => {
  const [search, setSearch] = useState("");
  const clubs = [
    {
      name: "GAC Cricket Club",
      // location: "Amar ",
      president: "Shyam Babu Rai",
      secretary: "Avinash Rai",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Crescent Cricket Club",
      // location: "Adalatganj",
      president: "Shaheen Akhtar",
      secretary: "Gulrez Akhtar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Alliance Cricket Club",
      // location: "Adalatganj",
      president: "Sachidanand Singh",
      secretary: "Bandana Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Lakshya Ingitech Cricket Club",
      // location: "Adalatganj",
      president: "S.N Raju",
      secretary: "Jaya Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "PESU Cricket Club",
      // location: "Adalatganj",
      president: "Sri Ram Singh",
      secretary: "Sanjay Kumar Sinha",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Sachivalaya Sarts Cricket Club",
      // location: "Adalatganj",
      president: "Amrit Lal Mina",
      secretary: "Mahendra Prasad",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "AG Bihar Cricket Club",
      // location: "Adalatganj",
      president: "Kamlesh Kumar Singh",
      secretary: "Santosh Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "BHPCL Cricket Club",
      // location: "Adalatganj",
      president: "Pankaj Kumar Pal",
      secretary: "Ajay Kumar Mishra",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Trimphant Cricket Club",
      // location: "Adalatganj",
      president: "Ashok Kumar",
      secretary: "Avinash Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Guru Gobind Singh College Cricket Club",
      // location: "Adalatganj",
      president: "",
      secretary: "Dr.Amit Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Citizen Cricket Club",
      // location: "Adalatganj",
      president: "Dilip Kumar Thakur",
      secretary: "Amit Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Adhikari XI Cricket Club",
      // location: "Adalatganj",
      president: "Sarwar Abdin",
      secretary: "Renuka Kumari Sinha",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Kazipur Cricket Club",
      // location: "Adalatganj",
      president: "Syed Umar Faruk Imam",
      secretary: "Rupam Saroj",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "YCC Cricket Club",
      // location: "Adalatganj",
      president: "Ritika Jain",
      secretary: "Sushma Kumari",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "Kedia XI Cricket Club",
      // location: "Adalatganj",
      president: "Neetu Davia",
      secretary: "Rishita Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
    {
      name: "PAC Cricket Club",
      // location: "Adalatganj",
      president: "Danish Abdin",
      secretary: "Murari Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/", // Example PDF URL
      type: "associated",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const handleInputChange = (e) => setSearch(e.target.value);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
      <div className="bg-blue-50"
          style={{
            backgroundImage: `url(${Back})`,
            backgroundSize: "120% 100%",
            backgroundRepeat: "no-repeat",
            position: "relative"
          }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div> {/* Blur overlay */}
          
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 relative z-10">
            <img
              src={Logo}
              alt="logo"
              className="w-32 h-32 md:w-60 md:h-60"
            />
            <h1 className="mt-4 md:mt-32 text-2xl md:text-4xl font-bold font-serif tracking-wide text-black font-outline-3">
            ASSOCIATED CLUBS
            </h1>
            <div className="flex justify-center items-center mt-6 pt-28 md:mt-0 md:ml-auto mr-8">
              <input
                type="text"
                aria-label="Search for a club"
                placeholder="Search Club"
                value={search}
                onChange={handleInputChange}
                className="w-40 md:w-60 h-10 p-2 border-2 border-black placeholder-gray-600 text-sm md:text-lg font-serif rounded-tl-md rounded-bl-md border-r-0 outline-none"
              />
              <div className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-lg flex justify-center items-center text-white rounded-tr-md rounded-br-md border-2 border-l-0 border-blue-500">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-12 mr-8 relative z-10">
            {filteredClubs.map((club, index) => (
              <a
                key={index}
                href={club.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 no-underline"
                style={{
                  backgroundImage: `url(${Bg})`,
                  backgroundSize: "120% 100%",
                  backgroundRepeat: "no-repeat",
                  
                }}
              >
              
                  <div className="w-fit h-auto mb-4 p-2 text-center font-sans rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base cursor-pointer">
                    {club.location}
                  </div>
                <h2 className="font-sans font-extralight md:text-xl text-red-600 ">
                  <b className="font-bold">{club.name}</b>
                </h2>
                <p className="mt-2 text-sm md:text-base text-white ">
                  <b>President :</b> {club.president || "Not available"}
                </p>
                <p className="mt-2 text-sm md:text-base text-white">
                  <b>Secretary :</b> {club.secretary || "Not available"}
                </p>
              </a>
            ))}
            {filteredClubs.length === 0 && (
              <p className="font-serif text-lg text-red-500 text-center col-span-full">
                No clubs match your search.
              </p>
            )}
          </div>
        </div>
      );
    };
export default NonAffliatedMembers;
