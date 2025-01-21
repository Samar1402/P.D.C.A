import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ResultMatchEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");
  const [matchResultData, setMatchResultData] = useState({
    first_team: "",
    second_team: "",
    first_team_score: "",
    second_team_score: "",
    winning_team: "",
    match_description: "",
    winning_team_batsone: "",
    batsone_score: "",
    winning_team_batstwo: "",
    batstwo_score: "",
    winning_team_bowlerone: "",
    bowlerone_wicket: "",
  });
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    if (activeForm === "service") {
      axios
        .get("http://localhost:3000/result", { withCredentials: true })
        .then((response) => {
          console.log("Fetched data:", response.data);
          setServiceData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("An error occurred while fetching data.");
        });
    }
  }, [activeForm]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchResultData({ ...matchResultData, [name]: value });
  };

  const handleSubmit = async () => {
    // Validation logic
    console.log("Data to be sent:", matchResultData); // Log the data before sending
    try {
      const response = await axios.post(
        "http://localhost:3000/addresult",
        matchResultData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Data submitted successfully!");
        setMatchResultData({
          first_team: "",
          second_team: "",
          first_team_score: "",
          second_team_score: "",
          winning_team: "",
          match_description: "",
          winning_team_batsone: "",
          batsone_score: "",
          winning_team_batstwo: "",
          batstwo_score: "",
          winning_team_bowlerone: "",
          bowlerone_wicket: "",
        });
      } else {
        alert("Failed to submit data. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting data.");
    }
  };

  const handleReset = () => {
    setMatchResultData({
      first_team: "",
      second_team: "",
      first_team_score: "",
      second_team_score: "",
      winning_team: "",
      match_description: "",
      winning_team_batsone: "",
      batsone_score: "",
      winning_team_batstwo: "",
      batstwo_score: "",
      winning_team_bowlerone: "",
      bowlerone_wicket: "",
    });
  };

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/deleteresult/${id}`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        alert("Match result deleted successfully!");
        setServiceData(serviceData.filter((item) => item.id !== id)); // Update local state
      } else {
        alert("Failed to delete match result.");
      }
    } catch (error) {
      console.error("Error deleting match result:", error);
      alert("An error occurred while deleting the match result.");
    }
  };

  const entryFormFields = [
    {
      label: "First Team",
      name: "first_team",
      placeholder: "Enter first team name",
    },
    {
      label: "Second Team",
      name: "second_team",
      placeholder: "Enter second team name",
    },
    {
      label: "First Team Score",
      name: "first_team_score",
      placeholder: "Enter first team score",
    },
    {
      label: "Second Team Score",
      name: "second_team_score",
      placeholder: "Enter second team score",
    },
    {
      label: "Winning Team",
      name: "winning_team",
      placeholder: "Enter winning team",
    },
    {
      label: "Match Description",
      name: "match_description",
      placeholder: "Enter match description (optional)",
    },
    {
      label: "Winning Team Batsman One",
      name: "winning_team_batsone",
      placeholder: "Enter winning team batsman one",
    },
    {
      label: "Batsman One Score",
      name: "batsone_score",
      placeholder: "Enter batsman one score",
    },
    {
      label: "Winning Team Batsman Two",
      name: "winning_team_batstwo",
      placeholder: "Enter winning team batsman two",
    },
    {
      label: "Batsman Two Score",
      name: "batstwo_score",
      placeholder: "Enter batsman two score",
    },
    {
      label: "Winning Team Bowler One",
      name: "winning_team_bowlerone",
      placeholder: "Enter winning team bowler one",
    },
    {
      label: "Bowler One Wicket Count",
      name: "bowlerone_wicket",
      placeholder: "Enter bowler one wicket count (wickets/runs(overs))",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
      <div className="flex justify-center sm:justify-end w-full mb-4">
        <button
          onClick={() => handleFormSelection("entry")}
          className={`${
            activeForm === "entry"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mr-2`}
        >
          Entry Form
        </button>
        <button
          onClick={() => handleFormSelection("service")}
          className={`${
            activeForm === "service"
              ? "bg-blue-600"
              : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
          } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
        >
          Service Form
        </button>
      </div>

      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-4">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            {activeForm === "entry"
              ? "Match Result Entry Form"
              : "Match Result Service Form"}
          </h3>
        </div>
        {activeForm === "entry" ? (
          <div className="space-y-4">
            {entryFormFields.map(({ label, name, placeholder }, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4"
              >
                <label className="block text-sm font-medium text-black w-full sm:w-48 pb-1">
                  {label}
                </label>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                  <input
                    type="text"
                    name={name}
                    value={matchResultData[name]}
                    onChange={handleInputChange}
                    className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-gray-300"
                    placeholder={placeholder}
                  />
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleSubmit}
                className="flex items-center space-x-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
              >
                <FontAwesomeIcon icon={faCheck} />
                <span>Submit</span>
              </button>
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white rounded-md focus:outline-none"
              >
                <FontAwesomeIcon icon={faBroom} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {serviceData.length > 0 ? (
              <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-2 px-4 text-left">Match</th>
                    <th className="py-2 px-4 text-left">Scores</th>
                    <th className="py-2 px-4 text-left">Details</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceData.map((item, index) => (
                    <tr key={index} className="border-t hover:bg-gray-100">
                      <td className="py-2 px-4">
                        {item.first_team} vs {item.second_team}
                      </td>
                      <td className="py-2 px-4">
                        <ul>
                          <li>
                            {item.first_team_score} - {item.second_team_score}
                          </li>
                          <li>{item.winning_team} won</li>
                        </ul>
                      </td>
                      <td className="py-2 px-4">
                        <ul>
                          <li>
                            Batsman 1: {item.winning_team_batsone} -{" "}
                            {item.batsone_score}
                          </li>
                          <li>
                            Batsman 2: {item.winning_team_batstwo} -{" "}
                            {item.batstwo_score}
                          </li>
                          <li>
                            Bowler: {item.winning_team_bowlerone} -{" "}
                            {item.bowlerone_wicket}
                          </li>
                        </ul>
                      </td>
                      <td className="py-2 px-4">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="flex items-center space-x-2 py-1 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultMatchEntryService;
