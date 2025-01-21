import React, { useState } from "react";
import Img1 from "../images/vikashSingh.jpg";
import Img2 from "../images/Rahbar-abdin.jpg";
import Img3 from "../images/Rajesh-kumar.jpg";
import Img4 from "../images/indradip-kumar.jpg";
// import Img5 from "../images/akshay-kumar.jpg";
import Cricket from "./../images/backg.jpg";
import Div from "./../images/div3.jpg";

const CommitteeMember = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    { img: Img1, name: "Dr. Vikash Kumar Singh", role: "President" },
    { img: Img2, name: "Rahbar Abdin", role: "Vice President", contact: "7759917777" },
    { img: Img3, name: "Rajesh Kumar", role: "Secretary", contact: "6201788147" },
    { img: Img4, name: "Dr. Indradip Kumar Chandrawanshi", role: "Joint Secretary" },
    { name: "Akshay Kumar", role: "Treasurer" },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (member.role && member.role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
     style={{
          backgroundImage: `url(${Cricket})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl mb-6">
        <h1 className="text-2xl md:text-4xl   text-center sm:text-left font-serif tracking-wide text-yellow-400 ">
          COMMITTEE OF MANAGEMENT
        </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 sm:mt-0 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  w-[20rem] pl-8"
        />
      </div>

      {/* Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            style={{
              backgroundImage: `url(${Div})`,
              backgroundSize: "120% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mx-auto"
            />
            <p className="font-bold mt-4 text-white text-lg">{member.name}</p>
            {member.contact && <p className="text-white">{member.contact}</p>}
            <p className="text-white">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeMember;
