import React from 'react'
import Img1 from "../images/vikashSingh.jpg"
import Img2 from "../images/Rahbar-abdin.jpg"
import Img3 from "../images/Rajesh-kumar.jpg"
import Img4 from "../images/indradip-kumar.jpg"
import Img5 from "../images/akshay-kumar.jpg"

const CommitteeMember = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-700"> COMMITTEE OF MANAGEMENT </h1>
      <div id="main" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-evenly">  
        <div className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={Img1} alt="Vikash-Singh" className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">Dr. Vikash Kumar Singh</p>
            <p className="text-gray-500">President</p>
        </div>  
        <div className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={Img2} alt="Rahbar-abdin" className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">Rahbar Abdin</p>
            <p className="text-gray-500">7759917777</p>
            <p className="text-gray-500">Vice President</p>
        </div>  
        <div className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={Img3} alt="Rajesh-kumar" className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">Rajesh Kumar</p>
            <p className="text-gray-500">6201788147</p>
            <p className="text-gray-500">Secretary</p>
        </div>  
        <div className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={Img4} alt="Indradip-kumar" className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">Dr. Indradip Kumar Chandrawanshi</p>
            <p className="text-gray-500">Joint Secretary</p>
        </div>  
        <div className="bg-white p-4 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <img src={Img5} alt="Akshay-kumar" className="w-48 h-48 object-cover rounded-full mx-auto" />
            <p className="font-bold mt-2 text-red-600">Akshay Kumar</p>
            <p className="text-gray-500">Treasurer</p>
        </div>  
      </div>
    </div>
  )
}

export default CommitteeMember;