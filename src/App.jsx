import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import ForgetPswd from "./Components/ForgetPswd";
import SignUp from "./Components/SignUp";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // State to track the visible page
  const [username, setUsername] = useState(""); // State to store the username

  const handleNavigation = (page, username = "") => {
    setCurrentPage(page);
    if (page === "forgot-password") {
      setUsername(username); // Store the username when navigating to Forgot Password
    }
  };

  return (
    <>
      <Header onNavigate={handleNavigation} />
      <Navbar onNavigate={handleNavigation} />

      {/* Conditional rendering based on currentPage */}
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "login" && <Login onNavigate={handleNavigation} />}
      {currentPage === "forgot-password" && (
        <ForgetPswd onNavigate={handleNavigation} username={username} />
      )}
      {currentPage === "SignUp" && <SignUp onNavigate={handleNavigation} />}
    </>
  );
}

export default App;
