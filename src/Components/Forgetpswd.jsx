import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import cricketer from "../images/cricketer.png";
import { Link } from "react-router-dom";

const ForgetPswd = ({ onNavigate, username }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-blue-950 shadow-md rounded-lg">
        <div className="flex items-center justify-center space-x-4">
          <h2 className="text-2xl font-bold text-center text-white">
            Forgot Password
          </h2>
          <img
            src={cricketer}
            alt="Cricketer"
            className="w-11 animate-bounce"
          />
        </div>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your Username"
              value={username} // Use the passed username value
              readOnly // Make the username field read-only
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon
              icon={faUnlockAlt}
              className="mr-2 animate-pulse"
            />
            Reset Password
          </button>
        </form>
        <div className="flex justify-between text-sm text-white mt-4">
          <Link
            to="/login"
            className="flex items-center hover:text-red-700 transition-all duration-300 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1 animate-bounce" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPswd;
