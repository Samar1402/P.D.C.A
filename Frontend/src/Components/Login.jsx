import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import cricketer from "../images/cricketer.png";
import Cricket from "../images/abt.jpg";

const Login = () => {
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const formErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!value.email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(value.email)) {
      formErrors.email = "Enter a valid email address";
    }

    if (!value.password) {
      formErrors.password = "Password is required";
    } else if (value.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const apiUrl = "/api"; // Use the proxy in development
        // console.log("API Request URL:", `${apiUrl}/login`);
        // console.log("Sending Data:", value);

        const response = await axios.post(`${apiUrl}/login`, value, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // ✅ Required for auth
        });

        // console.log("API Response:", response.data);

        if (response.status === 200 && response.data?.message) {
          setMessage("Login successful! Redirecting...");
          localStorage.setItem("authToken", response.data.token);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000); // 1 second delay
        }
      } catch (err) {
        console.error("Login Error:", err.response?.data || err.message);
        if (err.response) {
          setError({
            general: err.response.data?.message || "Invalid email or password.",
          });
        } else if (err.request) {
          setError({
            general: "Network error. Please check your connection.",
          });
        } else {
          setError({
            general: "An unexpected error occurred. Please try again.",
          });
        }
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
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fallback color
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
                Email
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 mt-1 border rounded-md outline-none ${
                  error.email
                    ? "border-red-500"
                    : "focus:ring-blue-500 focus:border-blue-500"
                }`}
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}
                value={value.email}
                disabled={isLoading}
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
                  className={`w-full px-4 py-2 mt-1 border rounded-md outline-none ${
                    error.password
                      ? "border-red-500"
                      : "focus:ring-blue-500 focus:border-blue-500"
                  }`}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleInput}
                  value={value.password}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {error.password && (
                <p className="text-red-500 text-sm mt-1">{error.password}</p>
              )}
            </div>

            {error.general && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {error.general}
              </p>
            )}

            <button
              type="submit"
              className="w-full px-4 py-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
