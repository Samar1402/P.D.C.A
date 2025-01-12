import React, { useState } from "react";
import Cricketer from "../images/cricketer.png";
import {
  faSignInAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    password: "",
  });
  const [message, setMessage] = useState(""); // Success message
  const [error, setError] = useState(""); // Error message
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [showPassword, setShowPassword] = useState(false); // Password visibility toggle

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the contact field, allow only digits and limit the length to 10
    if (name === "contact") {
      const digitValue = value.replace(/\D/g, "").slice(0, 10); // Allow only digits, limit to 10 digits
      setFormData({ ...formData, [name]: digitValue });
    } else {
      // Trim spaces for all fields except email
      const trimmedValue = name === "email" ? value : value.trim();
      setFormData({ ...formData, [name]: trimmedValue });
    }

    // Reset error message when input changes
    setError("");
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setError(""); // Clear previous errors

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (formData.contact.length !== 10) {
      setError("Contact number must be exactly 10 digits");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:3000/addmember",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data && response.data.message) {
        setMessage(response.data.message); // Display success message
        setTimeout(() => navigate("/login"), 3000);
        // Clear the form fields after successful submission
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          contact: "",
          password: "",
        });

        // Optionally, you can focus back to the first input field
        document.querySelector('[name="first_name"]').focus();
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Error: ", err);
      if (err.response) {
        setError(
          err.response?.data?.message ||
            "Failed to create account. Try again later."
        );
      } else {
        setError("Network error, please check your connection");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-950 rounded-lg shadow-md">
        <h2 className="flex flex-row items-center justify-center text-2xl font-bold text-center text-white">
          Sign Up{" "}
          <img
            src={Cricketer}
            alt="logo"
            className="h-16 sm:h-20 pb-3 ml-2 animate-bounce"
          />
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block text-l font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your First Name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-l font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter Your Last Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-l font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                error && "border-red-500"
              }`}
              required
              placeholder="Enter Your Email"
            />
            {error && name === "email" && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-l font-medium text-white">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              onBlur={(e) => {
                if (
                  e.target.value.length !== 10 ||
                  !/^\d{10}$/.test(e.target.value)
                ) {
                  setError("Contact number must be exactly 10 digits");
                  e.target.focus(); // Keeps the cursor in the contact field
                } else {
                  setError(""); // Clears the error message if valid
                }
              }}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Contact No"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-l font-medium text-white">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
              required
              placeholder="Enter Your Password"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer mt-3"
            >
              {showPassword ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-lg sm:text-sm  cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="text-lg sm:text-sm  cursor-pointer"
                />
              )}
            </span>
          </div>

          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md transform transition-transform hover:scale-105 hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              "Submitting..."
            ) : (
              <>
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className="mr-2 animate-pulse"
                />
                Sign Up
              </>
            )}
          </button>
        </form>

        <p className="text-m text-center text-white">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
