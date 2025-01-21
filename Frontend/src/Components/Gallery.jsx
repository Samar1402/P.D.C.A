// import React, { useState } from "react";
// import Pic1 from "/gallery/pic1.jpeg";
// import Pic2 from "/gallery/pic2.jpeg";
// import Pic3 from "/gallery/pic3.jpeg";
// import Pic4 from "/gallery/pic4.jpeg";
// import Pic5 from "/gallery/pic5.jpeg";
// import Pic6 from "/gallery/pic6.jpeg";
// import Pic7 from "/gallery/pic7.jpeg";
// import Pic8 from "/gallery/pic8.jpeg";
// import Pic9 from "/gallery/pic9.jpeg";
// import Pic10 from "/gallery/pic10.jpeg";
// import Pic11 from "/gallery/pic11.jpeg";
// import Cricket from "./../images/abt.jpg";

// const images = [
//   Pic1,
//   Pic2,
//   Pic3,
//   Pic4,
//   Pic5,
//   Pic6,
//   Pic7,
//   Pic8,
//   Pic9,
//   Pic10,
//   Pic11,
// ];

// const Gallery = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const imagesPerPage = 9;

//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="relative p-4 sm:p-8 lg:p-20 mx-4 sm:mx-8 flex justify-center items-center flex-col">
//       {/* Background blur */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${Cricket})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(7px)", // This will blur the background
//           zIndex: -1, // Ensures background is behind the content
//         }}
//       ></div>

//       <h1
//         className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-black uppercase text-center font-serif 
//         tracking-wide font-outline-3 z-10"
//       >
//         Gallery
//       </h1>
//       <div
//         id="main"
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10"
//       >
//         {currentImages.map((image, index) => (
//           <div
//             key={index}
//             className="bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer w-full h-64 transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg z-10"
//           >
//             <img
//               src={image}
//               alt={`pic${index + 1}`}
//               className="w-full h-full object-cover"
//               onClick={() => openImage(image)}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center items-center mt-4 z-10">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 mx-2 text-white rounded ${
//             currentPage === 1 ? "bg-gray-400" : "bg-blue-500"
//           }`}
//         >
//           Prev
//         </button>
//         <span className="text-lg font-semibold">
//           {currentPage} / {totalPages}
//         </span>
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 mx-2 text-white rounded ${
//             currentPage === totalPages ? "bg-gray-400" : "bg-blue-500"
//           }`}
//         >
//           Next
//         </button>
//       </div>

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="relative w-[40rem] h-[44rem]">
//             <img
//               src={selectedImage}
//               alt="Full Size"
//               className="w-full h-full object-contain"
//             />
//             <button
//               className="relative bottom-[42rem] left-[52rem] text-white text-xl bg-gray-800 rounded-full p-2"
//               onClick={closeImage}
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;

// import React from "react";

// import { useState, useEffect } from "react";
// import axios from "axios"; // Import Axios
// import Cricket from "./../images/abt.jpg";


// const Gallery = () => {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const imagesPerPage = 9;

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/gallery");
//         setImages(response.data);
//       //  setImages(response.data.reverse()); //Agar new upload img pehle dikhana hai tab
//       } catch (err) {
//         console.error("Error fetching images:", err);
//         setError("Failed to load images. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

//   const totalPages = Math.ceil(images.length / imagesPerPage);

//   const openImage = (image) => {
//     setSelectedImage(image);
//   };

//   const closeImage = () => {
//     setSelectedImage(null);
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className="relative p-4 sm:p-8 lg:p-20 mx-4 sm:mx-8 flex justify-center items-center flex-col">
//       {/* Background blur */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${Cricket})`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           filter: "blur(7px)",
//           zIndex: -1,
//         }}
//       ></div>

//       <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-black uppercase text-center font-serif tracking-wide z-10">
//         Gallery
//       </h1>

//       {isLoading ? (
//         <div className="flex justify-center items-center">
//           <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//       ) : error ? (
//         <p className="text-red-500 text-lg">{error}</p>
//       ) : (
//         <>
//           <div
//             id="main"
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10"
//           >
//             {currentImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer w-full h-64 transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg z-10"
//                 onClick={() => openImage(image.image_url)}
//               >
//                 <img
//                   src={image.image_url}
//                   alt={`gallery-${index}`}
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center items-center mt-4 z-10">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 mx-2 text-white rounded ${
//                 currentPage === 1 ? "bg-gray-400" : "bg-blue-500"
//               }`}
//               aria-label="Previous Page"
//             >
//               Prev
//             </button>
//             <span className="text-lg font-semibold">
//               {currentPage} / {totalPages}
//             </span>
//             <button
//               onClick={nextPage}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 mx-2 text-white rounded ${
//                 currentPage === totalPages ? "bg-gray-400" : "bg-blue-500"
//               }`}
//               aria-label="Next Page"
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}

//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 fade-in"
//           onClick={closeImage}
//         >
//           <div
//             className="relative w-[90vw] max-w-4xl h-[90vh] max-h-screen"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={selectedImage}
//               alt="Full Size"
//               className="w-full h-full object-contain"
//             />
//             <button
//               className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2"
//               onClick={closeImage}
//               aria-label="Close Full Image"
//             >
//               &times;
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;











import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Cricket from "./../images/abt.jpg"; // Background image

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const imagesPerPage = 9;

  // Fetch images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/gallery");
        setImages(response.data);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Open image in modal
  const openImage = (image) => {
    setSelectedImage(image);
  };

  // Close modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="relative p-4 sm:p-8 lg:p-20 mx-4 sm:mx-8 flex justify-center items-center flex-col">
      {/* Background blur */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Cricket})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "blur(7px)",
          zIndex: -1,
        }}
      ></div>

      {/* Gallery title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-black uppercase text-center font-serif tracking-wide z-10">
        Gallery
      </h1>

      {/* Loading state */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? ( // Error state
        <p className="text-red-500 text-lg">{error}</p>
      ) : (
        <>
          {/* Image grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-10">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer w-full h-64 transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg z-10"
                onClick={() => openImage(image.image_url)}
              >
                <img
                  src={image.image_url}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex justify-center items-center mt-4 z-10">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 text-white rounded ${
                currentPage === 1 ? "bg-gray-400" : "bg-blue-500"
              }`}
              aria-label="Previous Page"
            >
              Prev
            </button>
            <span className="text-lg font-semibold">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-2 text-white rounded ${
                currentPage === totalPages ? "bg-gray-400" : "bg-blue-500"
              }`}
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Full-size image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 fade-in"
          onClick={closeImage}
        >
          <div
            className="relative w-[90vw] max-w-4xl h-[90vh] max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full Size"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-gray-800 rounded-full p-2"
              onClick={closeImage}
              aria-label="Close Full Image"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;