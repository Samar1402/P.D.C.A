import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const UpcomingMatchEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");
  const [message, setMessage] = useState("");
  const [entryError, setEntryError] = useState(""); // Error state for entry form
  const [serviceError, setServiceError] = useState(""); // Error state for service form
  const [matchData, setMatchData] = useState({
    first_team: "",
    second_team: "",
    date: "",
    time: "",
    location: "",
  });
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const [fetchedMatches, setFetchedMatches] = useState([]);

  // Fetch matches when the activeForm is "service"
  useEffect(() => {
    if (activeForm === "service") {
      fetchMatches();
    }
  }, [activeForm]);

  // Fetching matches from the backend
  const fetchMatches = async () => {
    try {
      const response = await axios.get("http://localhost:3000/upcomingMatch", {
        withCredentials: true,
      });
      setFetchedMatches(response.data || []);
      setServiceError(""); // Reset service error if data is fetched successfully
    } catch (err) {
      console.error("Error fetching matches: ", err);
      setServiceError(
        "Failed to fetch upcoming matches. Please try again later."
      );
    }
  };

  // Handling input change in the match entry form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchData({ ...matchData, [name]: value });
  };

  // Handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !matchData.first_team ||
      !matchData.second_team ||
      !matchData.date ||
      !matchData.time ||
      !matchData.location
    ) {
      setEntryError("All fields are required."); // Show entry form specific error
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/addmatch",
        matchData,
        { withCredentials: true }
      );
      if (response.data && response.data.message) {
        setMessage(response.data.message);
        setEntryError(""); // Clear entry form error on success
        setMatchData({
          first_team: "",
          second_team: "",
          date: "",
          time: "",
          location: "",
        });
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      } else {
        setEntryError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error: ", err);
      setEntryError(
        err.response?.data?.message || "Failed to add match. Try again later."
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
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

      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-6">
        <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          {activeForm === "entry"
            ? "Upcoming Match Entry Form"
            : "Upcoming Match Service Form"}
        </h3>

        {activeForm === "entry" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Fields for Match Entry */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <label className="block text-sm font-medium text-black w-full sm:w-48">
                Enter Team Name
              </label>
              <input
                type="text"
                name="first_team"
                value={matchData.first_team}
                onChange={handleInputChange}
                placeholder="1st Team Name"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
              <span className="text-black font-bold mx-2">VS</span>
              <input
                type="text"
                name="second_team"
                value={matchData.second_team}
                onChange={handleInputChange}
                placeholder="2nd Team Name"
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
              />
            </div>

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

            {entryError && <p className="text-red-500 text-sm">{entryError}</p>}
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
          <div>
  {serviceError && (
    <p className="text-red-500 text-sm">{serviceError}</p>
  )}
  {fetchedMatches.length > 0 ? (
    <table className="min-w-full table-auto text-left border-collapse mt-4 rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="border px-4 py-2 text-sm font-semibold">
            First Team
          </th>
          <th className="border px-4 py-2 text-sm font-semibold">
            Second Team
          </th>
          <th className="border px-4 py-2 text-sm font-semibold">
            Date
          </th>
          <th className="border px-4 py-2 text-sm font-semibold">
            Time
          </th>
          <th className="border px-4 py-2 text-sm font-semibold">
            Location
          </th>
          <th className="border px-4 py-2 text-sm font-semibold">
            Actions
          </th> {/* New Action Column */}
        </tr>
      </thead>
      <tbody>
        {fetchedMatches.map((match, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-blue-50 transition-colors duration-200`}
          >
            <td className="border px-4 py-2 text-sm">
              {match.first_team}
            </td>
            <td className="border px-4 py-2 text-sm">
              {match.second_team}
            </td>
            <td className="border px-4 py-2 text-sm">
              {formatDate(match.date)}
            </td>
            <td className="border px-4 py-2 text-sm">
              {formatTime(match.time)}
            </td>
            <td className="border px-4 py-2 text-sm">
              {match.location}
            </td>
            <td className="border px-4 py-2 text-sm flex justify-center">
              {/* Edit Button with Icon */}
              <button
                onClick={() => handleEdit(match)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faPencilAlt} className="text-white" />
              </button>
              {/* Delete Button with Icon */}
              <button
                onClick={() => handleDelete(match.id)}
                className="bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faTrash} className="text-white" />
              </button>
            </td> {/* Action buttons */}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No upcoming matches found.</p>
  )}
</div>
        )}
      </div>
    </div>
  );
};

export default UpcomingMatchEntryService;
