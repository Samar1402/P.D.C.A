// import React from 'react';

// const Notification = () => {
//   return (
//     <div className='bg-blue-50 max-w-full max-h-full'><br />
//         <h1 className='text-center  bg-blue-500 text-white  p-1 font-bold text-xl tracking-wider font-serif mt-5 w-3/4 ml-44'>BCCI Notification</h1>
//         <div className='border-2 border-t-0 border-blue-500  w-3/4 ml-44 pb-3 text-lg font-serif bg-gray-100 '>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_rules_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >> BCCI ODMS rules for seasons 2025-2026
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >> BCCI ODMS (2025-2026)
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>  Change in Eligibility Criteria for the BCCI's Domestics Matches
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>   BCCI Domestic 2025-2026 Schedule
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>   BCCI Election -24 DECEMBER 2020
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>   BCCI ODMS (2021-2022)
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>  BCCI Domestic Schedule 2021-2022
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>  BCCI Domestic Day-Wise Fixtures (2021-2022)
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >> IPL 2022 Auction Guidance Notes for Indian Players (2021-2022)
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >> IPL 2022 Player Auction Agreement (2021-2022)
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>  BCCI postpones Ranji Trophy, Col C K Nayudu Trophy & Senior Women’s T20 League for 2021-22 season
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>   North East & Plate Players Camp -2022
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>   U-19 (Boys) Camp by NCA - 2022
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>    U-19 (Girls) Camp by NCA - 2022
//           </a>
//         </nav>
//         <nav className='ml-12 hover:text-blue-600'>
//           <a href="/pdfs/BCCI_ODMS_2025-26.pdf" target="_blank" rel="noopener noreferrer">
//             >>    BCCI ODMS (2022-2023)
//           </a>
//         </nav>
//       </div><br /><br /><br /><br /><br /><br />
//     </div>
//   );
// };

// export default Notification;

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const notifications = [
  {
    text: "BCCI ODMS rules for seasons 2025-2026",
    href: "/pdfs/BCCI_ODMS_rules_2025-26.pdf",
  },
  {
    text: "BCCI ODMS (2025-2026)",
    href: "/pdfs/BCCI_ODMS_2025-26.pdf",
  },
  {
    text: "Change in Eligibility Criteria for the BCCI's Domestic Matches",
    href: "/pdfs/BCCI_ODMS_2025-26.pdf",
  },
  {
    text: "BCCI Domestic 2025-2026 Schedule",
    href: "/pdfs/BCCI_ODMS_2025-26.pdf",
  },
];

const Notification = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <h1 className="text-center bg-blue-500 text-white p-2 font-bold text-xl tracking-wider font-serif">
        BCCI Notification
      </h1>
      <div className="overflow-y-auto max-h-96 border-2 border-t-0 border-blue-500 max-w-screen-md mx-auto pb-3 text-lg font-serif bg-gray-100">
        {notifications.map((item, index) => (
          <nav key={index} className="ml-4 hover:text-blue-600">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ArrowRightIcon className="w-5 h-5 mr-2" />
              {item.text}
            </a>
          </nav>
        ))}
      </div>
    </div>
  );
};

export default Notification;
