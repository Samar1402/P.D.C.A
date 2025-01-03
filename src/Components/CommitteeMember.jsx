import React, { useState } from 'react'
import Img1 from "../images/vikashSingh.jpg"
import Img2 from "../images/Rahbar-abdin.jpg"
import Img3 from "../images/Rajesh-kumar.jpg"
import Img4 from "../images/indradip-kumar.jpg"
import Img5 from "../images/akshay-kumar.jpg"

const CommitteeMember = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    { img: Img1, name: "Dr. Vikash Kumar Singh", role: "President" },
    { img: Img2, name: "Rahbar Abdin", role: "Vice President", contact: "7759917777" },
    { img: Img3, name: "Rajesh Kumar", role: "Secretary", contact: "6201788147" },
    { img: Img4, name: "Dr. Indradip Kumar Chandrawanshi", role: "Joint Secretary" },
    { img: Img5, name: "Akshay Kumar", role: "Treasurer" },
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (member.role && member.role.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="flex justify-between w-full max-w-6xl mb-4">
        <h1 className="text-3xl font-bold text-gray-700"> COMMITTEE OF MANAGEMENT </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div id="main" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-evenly">  
        {filteredMembers.map((member, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={member.img} alt={member.name} className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">{member.name}</p>
            {member.contact && <p className="text-gray-500">{member.contact}</p>}
            <p className="text-gray-500">{member.role}</p>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default CommitteeMember;
