
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Login = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-10 bg-blue-950 shadow-lg rounded-xl">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <h2 className="text-3xl font-bold text-center text-white">Login</h2>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faSignInAlt}
                className="mr-2 animate-pulse"
              />
              Login
            </button>
          </div>
        </form>

        {/* Links for Forgot Password and Register */}
        <div className="flex justify-between text-sm text-slate-50 mt-6">
          {/* Link to Forgot Password */}
          <Link
            to="/forgot-password"
            className="flex items-center hover:text-red-700 transition-all duration-300"
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
