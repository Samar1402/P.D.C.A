import React, { useEffect, useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Cricket from "./../images/bgimg.jpg";
import axios from "axios";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/notifications");
        setNotifications(response.data.reverse());
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div
      className="bg-blue-50 min-h-screen p-4 sm:p-8 md:p-16"
      style={{
        backgroundImage: `url(${Cricket})`,
        backgroundSize: "100% 130%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center bg-blue-500 text-white p-2 font-bold text-lg sm:text-xl md:text-2xl tracking-wider font-serif max-w-4xl mx-auto border-b-0">
        PDCA Notification
      </h1>
      <div className="overflow-y-auto max-h-96 border-2 border-t-0 border-blue-500 pb-3 text-sm sm:text-base md:text-lg font-serif bg-gray-100 max-w-4xl mx-auto">
        {notifications.map((item, index) => (
          <nav key={index} className="hover:text-blue-600">
            <a
              href={`http://localhost:5000${item.pdf_path}`} // Full URL to the PDF file
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="flex items-center p-2 sm:p-3 hover:bg-gray-200 transition duration-200"
            >
              <ChevronDoubleRightIcon className="h-5 sm:h-6 md:h-7 ml-2 sm:ml-4 mr-2 sm:mr-4 text-blue-500" />
              <span className="truncate">{item.title}</span>
            </a>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Notification;
