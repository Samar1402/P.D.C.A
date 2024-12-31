import React, { useState } from "react";
import asset2 from "../images/asset 2.jpeg";
// import asset3 from "../images/asset 3.jpeg";
import map from "../images/map.png";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div>
        <img
          src={asset2}
          alt="Asset 2"
          className="w-full h-[50px] object-cover shadow-lg"
        />
      </div>

      {/* <div
  className="relative bg-cover bg-center"
  style={{
    backgroundImage: `url(${asset3})`,
    minHeight: "100vh",
  }}
>
</div> */}

      <div className="px-20 py-2 bg-gray-100">
        <h1 className="text-4xl text-left mb-2 text-[35px]">
          Contact Information
        </h1>

        <div className="flex gap-8 py-4 pt-2 pb-4 bg-gray-100">
          {/* Address Box */}
          <div className="w-1/3 bg-white shadow-md p-4 rounded-lg">
            <div className="mb-3">
              <h5 className="text-xl font-semibold mb-2 text-red-500">
                Address:
              </h5>
              <p className="text-gray-500">
                45-C, Near Sahyog Hospital, Patliputra
                <br />
                <span>Colony, Patna-800013</span>
              </p>
            </div>
          </div>

          {/* For More Information Box */}
          <div className="w-1/2 bg-white shadow-md p-4 rounded-md border border-gray-300">
            <h5 className="text-xl font-semibold mb-2 text-red-500">
              For More Information:
            </h5>
            <p className="text-gray-500">
              Email: info@biharcricketassociation.com
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-2">
            <h2 className="text-4xl mb-6 text-[35px]">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="flex-1 min-w-[200px] px-6 py-3 border rounded-md focus:ring focus:ring-blue-200"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 min-w-[200px] px-6 py-3 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Contact"
                  className="flex-1 min-w-[200px] px-6 py-3 border rounded-md focus:ring focus:ring-blue-200"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="flex-1 min-w-[200px] px-6 py-3 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message"
                className="w-full h-40 px-6 py-3 border rounded-md resize focus:ring focus:ring-blue-200"
              ></textarea>
              <button
                type="submit"
                className="w-full font-bold bg-red-600 text-white py-4 rounded-md hover:bg-black transition"
              >
                Contact us Now
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 p-4 flex justify-center items-center">
  <a
    href="https://www.google.com/maps/place/Pushpanjali+Complex,+बोरिंग+रोड,+आनंदपुरी,+पटना,+बिहार+800013/@25.6159151,85.1153152,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed58256c2484a9:0x9169409ece07c25b!8m2!3d25.6159151!4d85.1153152!16s%2Fg%2F11bxfs2ppn?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={map}
      alt="Map"
      className="w-full h-96 object-cover rounded-lg shadow-lg"
    />
  </a>
</div>
        </div>
      </div>

    
    
    </>
  );
}

export default Contact;


