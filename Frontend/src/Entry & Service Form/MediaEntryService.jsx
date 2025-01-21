// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";

// const MediaEntryService = () => {
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
//             {activeForm === "entry" ? "Media Entry Form" : "Media Service Form"}
//           </h3>
//         </div>
//         {activeForm === "entry" ? (
//           <div className="space-y-4">
//             <div className="flex flex-col space-y-2">
//               {/* File input */}
//               <div className="relative flex-1 w-full">
//                 <input
//                   type="file"
//                   accept=".jpg"
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />
//                 <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
//                   Choose a JPG file to attach...
//                 </div>
//               </div>
//               {/* Buttons centered */}
//               <div className="flex justify-center mt-4 space-x-4">
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300">
//                   <FontAwesomeIcon icon={faCheck} className="mr-2" />
//                   Submit
//                 </button>
//                 <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300">
//                   <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {/* Search input */}
//             <div className="flex justify-center w-full">
//               <input
//                 type="text"
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Search by date"
//               />
//             </div>
//             {/* Buttons */}
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

// export default MediaEntryService;


























// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faBroom, faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios"; // Import Axios

// const MediaEntryService = () => {
//   const [activeForm, setActiveForm] = useState("entry");
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFormSelection = (form) => {
//     setActiveForm(form);
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (!selectedFile) {
//       alert("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', selectedFile);

//     try {
//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data', // Required for file uploads
//         },
//       });

//       if (response.status === 200) {
//         alert('Image uploaded successfully!');
//         console.log('Image URL:', response.data.imageUrl);
//         setSelectedFile(null); // Clear the input field after successful submission
//       } else {
//         alert('Failed to upload image.');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('Error uploading image.');
//     }
//   };

//   const handleReset = () => {
//     setSelectedFile(null); // Clear the input field on reset button click
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
//             {activeForm === "entry" ? "Media Entry Form" : "Media Service Form"}
//           </h3>
//         </div>
//         {activeForm === "entry" ? (
//           <div className="space-y-4">
//             <div className="flex flex-col space-y-2">
//               {/* File input */}
//               <div className="relative flex-1 w-full">
//                 <input
//                   type="file"
//                   accept=".jpg,.jpeg,.png"
//                   onChange={handleFileChange}
//                   className="absolute inset-0 opacity-0 cursor-pointer"
//                 />
//                 <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
//                   {selectedFile ? selectedFile.name : "Choose a JPG/PNG file to attach..."}
//                 </div>
//               </div>
//               {/* Buttons centered */}
//               <div className="flex justify-center mt-4 space-x-4">
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300"
//                 >
//                   <FontAwesomeIcon icon={faCheck} className="mr-2" />
//                   Submit
//                 </button>
//                 <button
//                   onClick={handleReset}
//                   className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-300 transform hover:scale-105 transition-all duration-300"
//                 >
//                   <FontAwesomeIcon icon={faBroom} className="mr-2" />
//                   Reset
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             {/* Search input */}
//             <div className="flex justify-center w-full">
//               <input
//                 type="text"
//                 className="flex-1 border border-black border-b-2 h-[30px] outline-none px-3 pb-1 text-sm border-x-0 border-t-0 w-full"
//                 placeholder="Search by date"
//               />
//             </div>
//             {/* Buttons */}
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

// export default MediaEntryService;












import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBroom, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const MediaEntryService = () => {
  const [activeForm, setActiveForm] = useState("entry");
  const [selectedFile, setSelectedFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch images from the backend
  useEffect(() => {
    if (activeForm === "service") {
      fetchImages();
    }
  }, [activeForm]);

  const fetchImages = async () => {
    setIsLoading(true);
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

  const handleFormSelection = (form) => {
    setActiveForm(form);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Image uploaded successfully!");
        setSelectedFile(null); // Clear the input field
        if (activeForm === "service") {
          fetchImages(); // Refresh the image list
        }
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image.");
    }
  };

  const handleReset = () => {
    setSelectedFile(null); // Clear the input field
  };

  const handleDelete = async (id) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return; // Stop if the user cancels

    try {
      await axios.delete(`http://localhost:3000/gallery/${id}`);
      setImages(images.filter((image) => image.id !== id)); // Update state
      alert("Image deleted successfully!");
    } catch (err) {
      console.error("Error deleting image:", err);
      alert("Failed to delete image.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4 sm:px-8">
      {/* Buttons aligned to the right */}
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

      {/* Form centered */}
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-3xl mt-11">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            {activeForm === "entry" ? "Media Entry Form" : "Media Service Form"}
          </h3>
        </div>

        {activeForm === "entry" ? (
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              {/* File input */}
              <div className="relative flex-1 w-full">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <div className="border border-black h-[30px] text-sm text-gray-400 px-3 flex items-center">
                  {selectedFile ? selectedFile.name : "Choose a JPG/PNG file to attach..."}
                </div>
              </div>
              {/* Buttons centered */}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.image_url}
                      alt={`gallery-${image.id}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
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

export default MediaEntryService;