import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import cricketer from "../images/cricketer.png";
import axios from "axios";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [message, setMessage] = useState(""); // For success or error messages from the server
  const [isLoading, setIsLoading] = useState(false); // For loading state

  // Handle Input
  const handleInput = (e) => {
    e.preventDefault();
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Validate the form
  const validate = () => {
    let formErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const contactRegex = /^\d{10}$/;

    if (!value.email) {
      formErrors.email = "Email or contact number is required";
    } else if (
      !emailRegex.test(value.email) &&
      !contactRegex.test(value.email)
    ) {
      formErrors.email =
        "Enter a valid email address or 10-digit contact number";
    }

    if (!value.password) {
      formErrors.password = "Password is required";
    }

    return formErrors;
  };

  // Handle form submission
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true); // Show loading state
      try {
        // Send login request to the backend
        const response = await axios.post(
          "http://localhost:3000/login",
          value,
          { withCredentials: true }
        );

        if (response.data && response.data.message) {
          setMessage(response.data.message); // Show server response message
          setTimeout(() => navigate("/dashboard"), 500); // Redirect after a delay
        }
      } catch (err) {
        console.error("Error: ", err);
        setError(
          err.response?.data?.message || "Failed to login. Try again later."
        );
      } finally {
        setIsLoading(false); // Hide loading state
      }
    } else {
      setError(formErrors); // Set form validation errors
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 sm:p-10 bg-blue-950 shadow-lg rounded-xl">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <h2 className="text-3xl font-bold text-center text-white">Login</h2>
          <img
            src={cricketer}
            alt="Cricketer"
            className="w-11 animate-bounce"
          />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-l font-medium text-white">
              Email/Contact No.
            </label>
            <input
              type="text"
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                error.email ? "border-red-500" : ""
              }`}
              placeholder="Enter your username"
              name="email"
              onChange={handleInput}
              value={value.email}
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          <div>
            <label className="block text-l font-medium text-white">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                error.password ? "border-red-500" : ""
              }`}
              placeholder="Enter your password"
              name="password"
              onChange={handleInput}
              value={value.password}
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>

          {/* General error message */}
          {typeof error === "string" && (
            <div className="text-red-500 text-sm mt-1">{error}</div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full flex items-center justify-center px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="animate-spin">🔄</span>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    className="mr-2 animate-pulse"
                  />
                  Login
                </>
              )}
            </button>
          </div>
        </form>

        {/* Success/Error Messages */}
        {message && <p className="text-green-500 text-sm mt-2">{message}</p>}

        {/* Links for Forgot Password and Register */}
        <div className="flex flex-col sm:flex-row justify-between text-sm text-slate-50 mt-6">
          {/* Link to Forgot Password */}
          <Link
            to="/forgot-password"
            className="flex items-center hover:text-red-700 transition-all duration-300 mb-2 sm:mb-0"
          >
            <FontAwesomeIcon icon={faKey} className="mr-1 animate-bounce" />
            Forgot Password?
          </Link>

          {/* Link to Register */}
          <Link
            to="/register"
            className="hover:text-red-700 transition-all duration-300"
          >
            New Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
