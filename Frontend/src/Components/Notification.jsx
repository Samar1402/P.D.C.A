// import React from "react";
// import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
// import Cricket from "./../images/bgimg.jpg";

// const notifications = [
//   { text: "BCCI ODMS rules for seasons 2025-2026", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI ODMS (2025-2026)", href: "/pdfs/Cricket.pdf" },
//   { text: "Change in Eligibility Criteria for the BCCI's Domestic Matches", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI Domestic 2025-2026 Schedule", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI Election -24 DECEMBER 2020", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI ODMS (2021-2022)", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI Domestic Schedule 2021-2022", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI Domestic Day-Wise Fixtures (2021-2022)", href: "/pdfs/Cricket.pdf" },
//   { text: "IPL 2022 Auction Guidance Notes for Indian Players (2021-2022)", href: "/pdfs/Cricket.pdf" },
//   { text: "IPL 2022 Player Auction Agreement (2021-2022)", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI postpones Ranji Trophy, Col C K Nayudu Trophy & Senior Women’s T20 League for 2021-22 season", href: "/pdfs/Cricket.pdf" },
//   { text: "North East & Plate Players Camp -2022", href: "/pdfs/Cricket.pdf" },
//   { text: "U-19 (Boys) Camp by NCA - 2022", href: "/pdfs/Cricket.pdf" },
//   { text: "U-19 (Girls) Camp by NCA - 2022", href: "/pdfs/Cricket.pdf" },
//   { text: "BCCI ODMS (2022-2023)", href: "/pdfs/Cricket.pdf" },
// ];

// const Notification = () => {
//   return (
//     <div className="bg-blue-50 min-h-screen p-4 sm:p-8 md:p-16"
//     style={{
//           backgroundImage: `url(${Cricket})`,
//           backgroundSize: "100% 130%",
//           backgroundRepeat: "no-repeat",
//         }}>
//       <h1 className="text-center bg-blue-500 text-white p-2 font-bold text-lg sm:text-xl md:text-2xl tracking-wider font-serif max-w-4xl mx-auto border-b-0">
//         BCCI Notification
//       </h1>
//       <div className="overflow-y-auto max-h-96 border-2 border-t-0 border-blue-500 pb-3 text-sm sm:text-base md:text-lg font-serif bg-gray-100 max-w-4xl mx-auto">
//         {notifications.map((item, index) => (
//           <nav key={index} className="hover:text-blue-600">
//             <a
//               href={item.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center p-2 sm:p-3 hover:bg-gray-200 transition duration-200"
//             >
//               <ChevronDoubleRightIcon className="h-5 sm:h-6 md:h-7 ml-2 sm:ml-4 mr-2 sm:mr-4 text-blue-500" />
//               <span className="truncate">{item.text}</span>
//             </a>
//           </nav>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Notification;


import React, { useEffect, useState } from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Cricket from "./../images/bgimg.jpg";
import axios from "axios";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3000/notifications");
        setNotifications(response.data.reverse());
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-4 sm:p-8 md:p-16"
      style={{
        backgroundImage: `url(${Cricket})`,
        backgroundSize: "100% 130%",
        backgroundRepeat: "no-repeat",
      }}>
      <h1 className="text-center bg-blue-500 text-white p-2 font-bold text-lg sm:text-xl md:text-2xl tracking-wider font-serif max-w-4xl mx-auto border-b-0">
        BCCI Notification
      </h1>
      <div className="overflow-y-auto max-h-96 border-2 border-t-0 border-blue-500 pb-3 text-sm sm:text-base md:text-lg font-serif bg-gray-100 max-w-4xl mx-auto">
        {notifications.map((item, index) => (
          <nav key={index} className="hover:text-blue-600">
            <a
              href={`http://localhost:3000${item.pdf_path}`} // Full URL to the PDF file
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="flex items-center p-2 sm:p-3 hover:bg-gray-200 transition duration-200"
            >
              <ChevronDoubleRightIcon className="h-5 sm:h-6 md:h-7 ml-2 sm:ml-4 mr-2 sm:mr-4 text-blue-500" />
              <span className="truncate">{item.text}</span>
            </a>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Notification;