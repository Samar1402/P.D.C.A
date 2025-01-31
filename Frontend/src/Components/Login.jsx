import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cricketer from "../images/cricketer.png"; // Your cricketer image
import Cricket from "../images/abt.jpg"; // Your background image

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const formErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAHEY0-9.-]+\.[a-zA-Z]{2,}$/;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          value,
          { withCredentials: true }
        );
        if (response.status === 200 && response.data?.message) {
          setMessage(response.data.message);
          localStorage.setItem("authToken", response.data.token);
          setTimeout(() => {
            navigate("/dashboard");
          }, 500);
        }
      } catch (err) {
        setError({
          general:
            err.response?.data?.message || "Failed to login. Try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setError(formErrors);
    }
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Cricket})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)",
          zIndex: -1,
        }}
      ></div>

      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md p-8 sm:p-10 bg-blue-950 rounded-[60px] min-h-[500px]">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <h2 className="text-3xl font-bold text-center text-white">Login</h2>
            <img
              src={cricketer}
              alt="Cricketer"
              className="w-11 animate-bounce"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none ${
                    error.password ? "border-red-500" : ""
                  }`}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleInput}
                  value={value.password}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>

            {error.general && (
              <div className="text-red-500 text-sm mt-1">{error.general}</div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className={`w-full flex items-center justify-center px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ${
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

          {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
