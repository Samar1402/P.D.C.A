import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UpcomingMatchEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [matchData, setMatchData] = useState({
    first_team: "",
    second_team: "",
    date: "",
    time: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchData({ ...matchData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !matchData.first_team ||
      !matchData.second_team ||
      !matchData.date ||
      !matchData.time ||
      !matchData.location
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/addmatch",
        matchData,
        {
          withCredentials: true,
        }
      );

      if (response.data && response.data.message) {
        setMessage(response.data.message);
        setError("");
        setMatchData({
          first_team: "",
          second_team: "",
          date: "",
          time: "",
          location: "",
        });
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error: ", err);
      setError(
        err.response?.data?.message || "Failed to add match. Try again later."
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
      {/* Buttons to toggle forms */}
      <div className="flex justify-center sm:justify-end w-full mb-4">
        <button
          onClick={() => setActiveForm("entry")}
          className={`${
            activeForm === "entry"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mr-2`}
        >
          Entry Form
        </button>
        <button
          onClick={() => setActiveForm("service")}
          className={`${
            activeForm === "service"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
        >
          Service Form
        </button>
      </div>

      {/* Form content */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          {activeForm === "entry"
            ? "Upcoming Match Entry Form"
            : "Upcoming Match Service Form"}
        </h3>

        {activeForm === "entry" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Club Names */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Enter Clubs Name
              </label>
              <input
                type="text"
                name="first_team"
                value={matchData.first_team}
                onChange={handleInputChange}
                placeholder="1st Club Name"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
              <span className="text-black font-bold mx-2">VS</span>
              <input
                type="text"
                name="second_team"
                value={matchData.second_team}
                onChange={handleInputChange}
                placeholder="2nd Club Name"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>

            {/* Date and Time */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Enter Date and Time
              </label>
              <input
                type="date"
                name="date"
                value={matchData.date}
                onChange={handleInputChange}
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
              <input
                type="time"
                name="time"
                value={matchData.time}
                onChange={handleInputChange}
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Place
              </label>
              <input
                type="text"
                name="location"
                value={matchData.location}
                onChange={handleInputChange}
                placeholder="Enter Place"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-500 text-sm">{message}</p>}

            <div className="flex justify-center mt-4 space-x-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Submit
              </button>
              <button
                type="button"
                onClick={() =>
                  setMatchData({
                    first_team: "",
                    second_team: "",
                    date: "",
                    time: "",
                    location: "",
                  })
                }
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faBroom} className="mr-2" />
                Reset
              </button>
            </div>
          </form>
        ) : (
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Search by Team
              </label>
              <input
                type="text"
                placeholder="Enter Team Name"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Search by Date
              </label>
              <input
                type="date"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                Search
              </button>
              <button
                type="reset"
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faBroom} className="mr-2" />
                Reset
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpcomingMatchEntryService;
