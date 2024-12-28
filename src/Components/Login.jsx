import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import cricketer from "../images/cricketer.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-4 bg-blue-950 shadow-md rounded-lg">
        <div className="flex items-center justify-center space-x-4">
          {/* Login Heading */}
          <h2 className="text-2xl font-bold text-center text-green-600">
            Login
          </h2>
          {/* Cricketer Image with Bounce Animation */}
          <img
            src={cricketer}
            alt="Cricketer"
            className="w-11 animate-bounce"
          />
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-orange-500">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-orange-500">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2 animate-pulse" />
            Login
          </button>
        </form>
        <div className="flex justify-between text-sm text-green-600 mt-4">
          <a
            href="/forgot-password"
            className="flex items-center hover:text-green-700 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faKey} className="mr-1 animate-bounce" />
            Forgot Password?
          </a>
          <a
            href="/register"
            className="hover:text-green-700 transition-all duration-300"
          >
            New Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
