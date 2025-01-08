import React, { useState } from 'react';
import Pic1 from "../images/gallery/pic1.jpeg";
import Pic2 from "../images/gallery/pic2.jpeg";
import Pic3 from "../images/gallery/pic3.jpeg";
import Pic4 from "../images/gallery/pic4.jpeg";
import Pic5 from "../images/gallery/pic5.jpeg";
import Pic6 from "../images/gallery/pic6.jpeg";
import Pic7 from "../images/gallery/pic7.jpeg";
import Pic8 from "../images/gallery/pic8.jpeg";
import Pic9 from "../images/gallery/pic9.jpeg";
import Pic10 from "../images/gallery/pic10.jpeg";
import Pic11 from "../images/gallery/pic11.jpeg";



const images = [
  Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9, Pic10, Pic11
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 sm:p-8 lg:p-20 mx-4 sm:mx-8 flex justify-center items-center flex-col">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-gray-800 uppercase underline text-center">Gallery</h1>
      <div id="main" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentImages.map((image, index) => (
          <div 
            key={index} 
            className="bg-gray-200 rounded-lg overflow-hidden shadow-md cursor-pointer w-full h-64 transform transition duration-200 ease-in-out hover:scale-105 hover:shadow-lg">
            <img 
              src={image} 
              alt={`pic${index + 1}`} 
              className="w-full h-full object-cover" 
              onClick={() => openImage(image)}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-4">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-2 text-white rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500'}`}>
          Prev
        </button>
        <span className="text-lg font-semibold">{currentPage} / {totalPages}</span>
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-2 text-white rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-500'}`}>
          Next
        </button>
      </div>

      {selectedImage && (
         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
         <div className="relative w-[40rem] h-[44rem]">
           <img src={selectedImage} alt="Full Size" className="w-full h-full object-contain" />
           <button 
             className="relative bottom-[42rem] left-[52rem] text-white text-xl bg-gray-800 rounded-full p-2"
             onClick={closeImage}>
             &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;