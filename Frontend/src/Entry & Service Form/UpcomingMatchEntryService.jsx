import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faTrash } from "@fortawesome/free-solid-svg-icons";
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

  // Handling delete action
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/deleteUpcomingMatch/${id}`,
        {
          withCredentials: true,
        }
      );

      if (response.data && response.data.success) {
        // Remove the deleted match from the state
        setFetchedMatches(fetchedMatches.filter((match) => match.id !== id));
        setMessage("Match deleted successfully.");
        setTimeout(() => setMessage(""), 3000); // Clear success message after 3 seconds
      } else {
        setServiceError("Failed to delete match. Please try again.");
      }
    } catch (err) {
      console.error("Error deleting match: ", err);
      setServiceError(err.response?.data?.message || "An error occurred.");
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
                <FontAwesomeIcon icon={faCheck} />
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
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faBroom} />
                Clear
              </button>
            </div>
          </form>
        ) : (
          <div>
            {/* Displaying the list of upcoming matches */}
            {serviceError && (
              <p className="text-red-500 text-sm">{serviceError}</p>
            )}
            {message && <p className="text-green-500 text-sm">{message}</p>}
            <table className="min-w-full table-auto mt-6 rounded-lg overflow-hidden shadow-lg w-full sm:w-10/12 md:w-9/12 lg:w-8/12">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">First Team</th>
                  <th className="px-6 py-3 text-left">Second Team</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Time</th>
                  <th className="px-6 py-3 text-left">Location</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fetchedMatches.map((match) => (
                  <tr
                    key={match.id}
                    className="hover:bg-blue-100 transition-all duration-300 ease-in-out"
                  >
                    <td className="px-6 py-4 text-gray-800">
                      {match.first_team}
                    </td>
                    <td className="px-6 py-4 text-gray-800">
                      {match.second_team}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatDate(match.date)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {formatTime(match.time)}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {match.location}
                    </td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <button
                        onClick={() => handleDelete(match.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingMatchEntryService;
