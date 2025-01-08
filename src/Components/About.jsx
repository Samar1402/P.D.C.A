import React from "react";
import person4 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg"; // Corrected image path
import person1 from "../images/person4.jpg";

const About = () => {
  const aboutUsData = [
    {
      id: 1,
      image: person1,
      name: "About",
      description:
        "BIHAR CRICKET ASSOCIATION  was established in the year 1935 having its registered Head Office at Jamshedpur with Late Mr. A. M. Hayman as President, Mr. K. A. D. Naoroji and Professor Moin-ul-Haq as Vice-President, Mr. N. Quereshi as Secretary and Mr. Nagarwala as Honorary Treasurer.",
    },
    {
      id: 2,
      image: person2,
      name: "History",
      description:
        "In 1937 the Bihar Cricket Association (BCA) played its first Ranji Trophy match against the Cricket Association of Bengal and Assam at Calcutta and got a first-innings lead. A very creditable achievement indeed, though Bihar lost the match to a far better side. The First Ranji Trophy match was played in Bihar at the Keenan Stadium, Jamshedpur in 1939-40 against the Cricket Association of Bengal. Bihar had to wait till the 23rd of January 1948 to record its first victory when it beat Delhi and District Cricket Association at Keenan Stadium, Jamshedpur. Delhi and District Association had to score 32 runs with 8 wickets and one full day left a register a win. But the glorious uncertainties of cricket, 8 wickets tumbled for 17 runs in less than one hour! In 1959-60 Bihar defeated Bengal to become the East-Zone champion and entered into the semi-final of the Ranji Trophy against Mysore, Bihar had a good chance of winning the match if it had taken a lead in the first innings. The actual scores were Bihar 307 & 146 and Mysore 314.",
    },
    {
      id: 3,
      image: person3,
      name: "Basic",
      description:
        "Bihar Cricket Association organized National and International Cricket events at Patna. Teams of Zimbabwe and Kenya played in the world cup in 1996 at Moin-ul-Haq Stadium Patna. Teams of Zimbabwe and Sri Lanka also played in Hero Cup. The Women’s Cricket World Cup was also held at Patna under the supervision of BCA",
    },
    {
      id: 4,
      image: person4,
      name: "Note",
      description:
        "After the bifurcation of the erstwhile State of Bihar in the year 2000 into the State of Jharkhand and the president State of Bihar, the original BCA having registered office at Jamshedpur also bifurcated into two Associations. The association in the president State of Bihar had the name Bihar Cricket Association whereas the Association in the State of Jharkhand had the name Cricket Association of Jharkhand (now Jharkhand State Cricket Association).",
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
    <div className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">About Us</h2>

        {aboutUsData.map((person, index) => (
          <div
            key={person.id}
            className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-12`}
          >
            {/* Left Side - Image with Circular Border and Animation */}
            <div className="flex-shrink-0 w-48 h-48 mx-auto mb-6 md:mb-0 md:w-56 md:h-56">
              <div className="relative w-full h-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-500 animate-pulse"
                />
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="flex-grow text-center md:text-left md:ml-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {underlineRest(person.name)}
              </h3>
              <p className="text-lg text-gray-700">{person.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
