
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from "./../images/club_logo.png";

const Members = () => {
  const [search, setSearch] = useState("");

  const clubs = [
    {
      name: "Araria District Cricket Association",
      location: "Araria",
      president: "P.K Biswas (Basu)",
      email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/araria_district_cricket_association.pdf", // Example PDF URL
    },
    {
      name: "Aurangabad District Cricket Association",
      location: "Aurangabad",
      president: "Ajay Kumar - Chairman (Ad-hoc Committee)",
      email: "arwaldca@biharcricketassociation.com",
      pdf: "/pdfs/aurangabad_district_cricket_association.pdf",
    },
    {
      name: "Arwal District Cricket Association",
      location: "Arwal",
      president: "Rohit Kumar",
      email: "aurangabaddca@biharcricketassociation.com",
      pdf: "/pdfs/arwal_district_cricket_association.pdf",
    },
    {
      name: "Banka District Cricket Association",
      location: "Banka",
      president: "Rajeev Kumar Singh  - Chairman (Ad-hoc Committee)",
      email: "bankadca@biharcricketassociation.com",
      pdf: "/pdfs/banka_district_cricket_association.pdf",
    },
    {
      name: "Begusarai District Cricket Association",
      location: "Begusarai",
      president: "Mritunjay Kumar Viresh - Chairman (Ad-hoc Committee)",
      email: "begusaraidca@biharcricketassociation.com",
      pdf: "/pdfs/begusarai_district_cricket_association.pdf",
    },
    {
      name: "Bhagalpur  District Cricket Association",
      location: "Bhagalpur ",
      president: " Amresh Kumar",
      email: "bhagalpurdca@biharcricketassociation.com",
      pdf: "/pdfs/bhagalpur_district_cricket_association.pdf",
    },
  ];

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase()) ||
    club.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='bg-blue-50'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-8'>

        <img src={Logo} alt="logo" className='w-32 h-32 md:w-60 md:h-60 animate-pulse' />
        <h1 className='mt-4 md:mt-32 text-2xl md:text-4xl font-bold font-serif 
        tracking-wide text-black font-outline-3'>
          CLUBS
        </h1>

        <div className='flex justify-center items-center mt-6 pt-28 md:mt-0 md:ml-auto mr-8'>
          <input
            type="text"
            placeholder='Search Club'
            value={search}
            className='w-40 md:w-60 h-10 p-2  border-2 border-black placeholder-gray-600 text-sm md:text-lg 
            font-serif rounded-tl-md rounded-bl-md border-r-0 outline-none'
            onChange={handleInputChange}
          />
          <div
            className='w-10 h-10 bg-blue-500 hover:bg-blue-600 text-lg flex justify-center items-center
             text-white rounded-tr-md rounded-br-md border-2 border-l-0 border-blue-500'
          >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-12 mr-8">
        {filteredClubs.map((club, index) => (
          <a 
            key={index} 
            href={club.pdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 no-underline"
          >
            <div className='w-fit h-auto mb-4 p-2 text-center font-sans rounded-lg bg-blue-500 hover:bg-blue-600 
            text-white text-sm md:text-base cursor-pointer'>
              {club.location}
            </div>
            <h2 className=' font-sans font-extralight md:text-xl'><b className='font-bold'>{club.name}</b></h2>
            <p className='mt-2 text-sm md:text-base'>
              <b>President:</b> {club.president}
            </p>
            <p className='mt-2 text-sm md:text-base flex items-center flex-wrap'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2 break-words' /> {club.email}
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

export default Members;

