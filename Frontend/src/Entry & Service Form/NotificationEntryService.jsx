// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";

// const NotificationEntryService = () => {
//   const [activeForm, setActiveForm] = useState("entry");

//   const handleFormSelection = (form) => {
//     setActiveForm(form);
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
//       {/* Buttons aligned to the right */}
//       <div className="flex justify-center sm:justify-end w-full mb-4">
//         <button
//           onClick={() => handleFormSelection("entry")}
//           className={`${
//             activeForm === "entry"
//               ? "bg-blue-600"
//               : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
//           } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mr-2`}
//         >
//           Entry Form
//         </button>
//         <button
//           onClick={() => handleFormSelection("service")}
//           className={`${
//             activeForm === "service"
//               ? "bg-blue-600"
//               : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
//           } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
//         >
//           Service Form
//         </button>
//       </div>

//       {/* Form centered */}
//       <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
//         <div className="mb-6">
//           <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
//             {activeForm === "entry"
//               ? "Notification Entry Form"
//               : "Notification Service Form"}
//           </h3>
//         </div>
//         {activeForm === "entry" ? (
//           <div className="space-y-4">
//             <div className="flex flex-col items-start space-y-2">
//               {/* <label className="text-sm font-medium text-black">Enter New Notification</label> */}
//               <input
//                 type="text"
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Enter new notification"
//               />
//             </div>
//             <br />
//             <div className="relative flex-1 w-full">
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//               <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
//                 Choose a PDF file to attach....
//               </div>
//             </div>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faCheck} className="mr-2" />
//                 Submit
//               </button>
//               <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                 Reset
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="flex justify-center w-full">
//               <input
//                 type="text"
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Search by date"
//               />
//             </div>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faSearch} className="mr-2" />
//                 Search
//               </button>
//               <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                 Reset
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationEntryService;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const NotificationEntryService = () => {
//   const [activeForm, setActiveForm] = useState("entry");
//   const [notificationText, setNotificationText] = useState("");
//   const [pdfFile, setPdfFile] = useState(null);

//   const handleFormSelection = (form) => {
//     setActiveForm(form);
//   };

//   const handleFileChange = (e) => {
//     setPdfFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append("notificationText", notificationText);
//     formData.append("pdfFile", pdfFile);

//     try {
//       const response = await axios.post("http://localhost:3000/addNotification", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert(response.data.message);
//       resetForm(); // Reset the form after successful submission
//     } catch (error) {
//       console.error("Error submitting notification:", error);
//       alert("Failed to submit notification");
//     }
//   };

//   const handleReset = () => {
//     resetForm(); // Reset the form when the reset button is clicked
//   };

//   const resetForm = () => {
//     setNotificationText(""); // Clear the notification text
//     setPdfFile(null); // Clear the selected PDF file
//   };

//   return (
//     <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
//       <div className="flex justify-center sm:justify-end w-full mb-4">
//         <button
//           onClick={() => handleFormSelection("entry")}
//           className={`${
//             activeForm === "entry"
//               ? "bg-blue-600"
//               : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
//           } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 mr-2`}
//         >
//           Entry Form
//         </button>
//         <button
//           onClick={() => handleFormSelection("service")}
//           className={`${
//             activeForm === "service"
//               ? "bg-blue-600"
//               : "bg-blue-400 transform hover:scale-105 transition-all duration-300"
//           } text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300`}
//         >
//           Service Form
//         </button>
//       </div>

//       <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
//         <div className="mb-6">
//           <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
//             {activeForm === "entry"
//               ? "Notification Entry Form"
//               : "Notification Service Form"}
//           </h3>
//         </div>
//         {activeForm === "entry" ? (
//           <div className="space-y-4">
//             <div className="flex flex-col items-start space-y-2">
//               <input
//                 type="text"
//                 value={notificationText}
//                 onChange={(e) => setNotificationText(e.target.value)}
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Enter new notification"
//               />
//             </div>
//             <br />
//             <div className="relative flex-1 w-full">
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={handleFileChange}
//                 className="absolute inset-0 opacity-0 cursor-pointer"
//               />
//               <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
//                 {pdfFile ? pdfFile.name : "Choose a PDF file to attach...."}
//               </div>
//             </div>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300"
//               >
//                 <FontAwesomeIcon icon={faCheck} className="mr-2" />
//                 Submit
//               </button>
//               <button
//                 onClick={handleReset}
//                 className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
//               >
//                 <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                 Reset
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="flex justify-center w-full">
//               <input
//                 type="text"
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Search by date"
//               />
//             </div>
//             <div className="flex justify-center mt-4 space-x-4">
//               <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faSearch} className="mr-2" />
//                 Search
//               </button>
//               <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
//                 <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                 Reset
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationEntryService;





















import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const NotificationEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");
  const [notificationText, setNotificationText] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch notifications when Service Form is active
  useEffect(() => {
    if (activeForm === "service") {
      fetchNotifications();
    }
  }, [activeForm]);

  const fetchNotifications = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/notifications");
      setNotifications(response.data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
      setError("Failed to load notifications. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("notificationText", notificationText);
    formData.append("pdfFile", pdfFile);

    try {
      const response = await axios.post("http://localhost:3000/addNotification", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(response.data.message);
      resetForm();
      if (activeForm === "service") {
        fetchNotifications(); // Refresh notifications
      }
    } catch (error) {
      console.error("Error submitting notification:", error);
      alert("Failed to submit notification");
    }
  };

  const handleReset = () => {
    resetForm();
  };

  const resetForm = () => {
    setNotificationText("");
    setPdfFile(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this notification?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/notifications/${id}`);
      setNotifications(notifications.filter((notification) => notification.id !== id));
      alert("Notification deleted successfully!");
    } catch (err) {
      console.error("Error deleting notification:", err);
      alert("Failed to delete notification");
    }
  };

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

      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            {activeForm === "entry" ? "Notification Entry Form" : "Notification Service Form"}
          </h3>
        </div>

        {activeForm === "entry" ? (
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-2">
              <input
                type="text"
                value={notificationText}
                onChange={(e) => setNotificationText(e.target.value)}
                className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
                placeholder="Enter new notification"
              />
            </div>
            <br />
            <div className="relative flex-1 w-full">
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
                {pdfFile ? pdfFile.name : "Choose a PDF file to attach...."}
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                Submit
              </button>
              <button
                onClick={handleReset}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faBroom} className="mr-2" />
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <p className="text-red-500 text-lg">{error}</p>
            ) : (
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex justify-between items-center p-4 border-b border-gray-200">
                    <a
                      href={`http://localhost:3000${notification.pdf_path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {notification.text}
                    </a>
                    <button
                      onClick={() => handleDelete(notification.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationEntryService;