import React from "react";
import person4 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";
import person1 from "../images/person4.jpg";
import Cricket from "./../images/abt.jpg";

const About = () => {
  const aboutUsData = [
    {
      id: 1,
      image: person1,
      name: "",
      description:
        "The Patna District Cricket Association (PDCA), established in 1972, is a proud institution dedicated to promoting cricket in the Patna district. Founded by visionaries Prem Kumar Verma, Dr. Ajay Bhagat, Jai Narayan Sharma, and Ajiteshwar Prasad Jittu, PDCA initially operated under the Bihar Cricket Association (BCA), headquartered at Keenan Stadium, Jamshedpur.",
    },
    {
      id: 2,
      image: person2,
      name: "",
      description:
        "Following the bifurcation of Bihar and Jharkhand in 2000, the Bihar Cricket Association merged into the Jharkhand Cricket Association. This led to a prolonged legal struggle by the stakeholders of the erstwhile BCA to re-establish its independent identity. After years of dedication and perseverance, the Bihar Cricket Association was officially recognized by the Honorable Apex Court in 2018.",
    },
    {
      id: 3,
      image: person3,
      name: "",
      description:
        "Since then, the PDCA has regularized its operations under the guidance and control of the Bihar Cricket Association. Despite facing numerous challenges, including internal and external litigations between 2000 and 2017, the PDCA has emerged stronger, resolving disputes through the intervention of the Ombudsman and the Honorable Court.",
    },
    {
      id: 4,
      image: person4,
      name: "",
      description:
        "Currently headquartered in Patna, the Patna District Cricket Association continues its unwavering commitment to nurturing cricketing talent and fostering a spirit of sportsmanship in both men’s and women’s categories across the district. Several players have proudly represented the state in various age-group cricket competitions.",
    },
  ];

  const underlineRest = (name) => {
    const firstChar = name[0];
    const remainingChars = name.slice(1);
    return (
      <>
        <span>{firstChar}</span>
        <span className="underline decoration-orange-500">{remainingChars}</span>
      </>
    );
  };

  return (
    <div
      className="py-16 px-4 relative"
      style={{
        backgroundImage: `url(${Cricket})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Blur Effect Overlay */}
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-md z-0"
        style={{ backdropFilter: "blur(5px)" }}
      ></div>

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-5xl font-bold text-center text-white mb-12 font-outline-4">
          About Us
        </h2>

        {aboutUsData.map((person, index) => (
          <div
            key={person.id}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } mb-12`}
          >
            {/* Left Side - Image */}
            <div className="flex-shrink-0 w-48 h-48 mx-auto mb-6 md:mb-0 md:w-56 md:h-56">
              <div className="relative w-full h-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-700"
                />
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="flex-grow text-center md:text-left md:ml-8">
              <h3 className="text-3xl font-extrabold text-white tracking-wide font-outline-4 mb-2">
                {underlineRest(person.name)}
              </h3>
              <p className="text-2xl text-white font-normal ">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
