import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "../images/club_logo.png";

const AffiliatedMembers = () => {
  const [search, setSearch] = useState("");
  const clubs = [
    {
      name: "Anisabad Cricket Club",
      // location: "Anisabad ",
      president: "Om Prakash Kumar",
      secretary: "Sarvesh Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Amar Cricket Club",
      // location: "Amar ",
      president: "Ajit Kumar Sinha",
      secretary: "Abhimanyu Prasad Ray",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Adalatganj Cricket Club",
      // location: "Adalatganj",
      president: "Shaista Parveen",
      secretary: "Mahfuz Qamar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Bata Cricket Club",
      // location: "Bata",
      president: "Gunjan Kumar",
      secretary: "Saroj Devi",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "YM Cricket Club",
      // location: "Y.M",
      president: "Rahbar Abdin",
      secretary: "Kunal Sahi",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Panchsheel Cricket Club",
      // location: "Panchsheel",
      president: "Vinod Singh",
      secretary: "Sajeev Ranjan",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "ER Cricket Club",
      // location: "Panchsheel",
      president: "Dilip Kumar",
      secretary: "Siraj-Ul-Haq",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "RBNYAC Cricket Club",
      // location: "Panchsheel",
      president: "Mrityunjay Kumar Singh",
      secretary: "Dhananjay Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Hercules Cricket Club",
      // location: "Panchsheel",
      president: "Arvind Kumar Sharma",
      secretary: "Nitin Abhishek",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Rising Star Cricket Club",
      // location: "Panchsheel",
      president: "Manoj Kumar Singh",
      secretary: "Sunil Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Moon Light Cricket Club",
      // location: "Panchsheel",
      president: "Sanjeev Kumar Singh",
      secretary: "Ranju Kumari",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "KN Cricket Club",
      // location: "Panchsheel",
      president: "Rakesh Kumar",
      secretary: "Naresh Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Malsalami XI Cricket Club",
      // location: "Panchsheel",
      president: "Ujjwal Kumar",
      secretary: "Ajay Narayan Sharma",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Blue Star Cricket Club",
      // location: "Panchsheel",
      president: "Ranjit Kumar",
      secretary: "Madhu Rai",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Pirmuhani Cricket Club",
      // location: "Panchsheel",
      president: "Amardeep",
      secretary: "Amrita Bhushan Rathore",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Sharma Sporting Cricket Club",
      // location: "Panchsheel",
      president: "Pawan Kumar",
      secretary: "Madhu Sharma",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "YAC Rajendra Nagar Cricket Club",
      // location: "Panchsheel",
      president: "Syed Khurshid Imam ",
      secretary: "Syed Sarik Gilani",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Vidyarthi Cricket Club",
      // location: "Panchsheel",
      president: "Ashok Kumar Singh",
      secretary: "Shailendra Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Eagle Cricket Club",
      // location: "Panchsheel",
      president: "Kumar Abhishek",
      secretary: "Dheeraj Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Pioneer Cricket Club",
      // location: "Panchsheel",
      president: "Rameshwar Prasad",
      secretary: "Saurabh Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "City Student Cricket Club",
      // location: "Panchsheel",
      president: "Sushmita Ratan",
      secretary: "Chandra Mohan",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "YAC City Cricket Club",
      // location: "Panchsheel",
      president: "",
      secretary: "",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },

    {
      name: "Khagaul Cricket Club",
      // location: "Panchsheel",
      president: "Prakash Kumar Mishra",
      secretary: "Abhinav",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "JPCC Cricket Club",
      // location: "Panchsheel",
      president: "Ashish Kumar Sinha",
      secretary: "Dr.Vinay Kumar Sinha",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Vaishali Cricket Club",
      // location: "Panchsheel",
      president: "Raj Kumar",
      secretary: "Varun Pratap Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Navshakti Niketan Cricket Club",
      // location: "Panchsheel",
      president: "Rama Shankar Prasad",
      secretary: "Kamal Narayan Shrivastav",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Bhanwar Pokhar Cricket Club",
      // location: "Panchsheel",
      president: "Mrityunjay Kumar",
      secretary: "Nitesh Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Kadam Kuan Cricket Club",
      // location: "Panchsheel",
      president: "Aman Pandey",
      secretary: "Uma Devi",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "LBS Cricket Club",
      // location: "Panchsheel",
      president: "Rajesh Kumar",
      secretary: "Saryug Kumar Singh",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Western Cricket Club",
      // location: "Panchsheel",
      president: "Risika Raj",
      secretary: "Rajesh Kumar",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "MCC Cricket Club",
      // location: "Panchsheel",
      president: "Amitabh Sinha",
      secretary: "Kumar Abhimanyu",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Nehru Memorial Cricket Club",
      // location: "Panchsheel",
      president: "",
      secretary: "",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
    {
      name: "Evergreen Cricket Club",
      // location: "Panchsheel",
      president: "",
      secretary: "",
      // email: "arariadca@biharcricketassociation.com",
      pdf: "/pdfs/Cricket.pdf", // Example PDF URL
      type: "affiliated",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const handleInputChange = (e) => setSearch(e.target.value);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-blue-50">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8">
        <img
          src={Logo}
          alt="logo"
          className="w-32 h-32 md:w-60 md:h-60 animate-pulse"
        />
        <h1 className="mt-4 md:mt-32 text-2xl md:text-4xl font-bold font-serif tracking-wide text-black font-outline-3">
          AFFILIATED CLUBS
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
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-12 mr-8">
        {filteredClubs.map((club, index) => (
          <a
            key={index}
            href={club.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 no-underline"
          >
            {club.location && (
              <div className="w-fit h-auto mb-4 p-2 text-center font-sans rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base cursor-pointer">
                {club.location}
              </div>
            )}
             <div
              className="w-fit h-auto mb-4 p-2 text-center font-sans rounded-lg bg-blue-500 hover:bg-blue-600 
            text-white text-sm md:text-base cursor-pointer"
            >
              {club.location}
            </div>
            
            <h2 className="font-sans font-extralight md:text-xl">
              <b className="font-bold">{club.name}</b>
            </h2>
            <p className="mt-2 text-sm md:text-base">
              <b>President :</b> {club.president || "Not available"}
            </p>
            <p className="mt-2 text-sm md:text-base">
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
export default AffiliatedMembers;
