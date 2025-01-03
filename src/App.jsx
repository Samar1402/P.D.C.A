import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import About from "./Components/About";
import ForgetPswd from "./Components/ForgetPswd";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // State to track the visible page

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update the currentPage state
  };

  return (
    <>
      <Header onNavigate={handleNavigation} />
      <Navbar onNavigate={handleNavigation} />

      {/* Conditional rendering based on currentPage */}
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "login" && <Login onNavigate={handleNavigation} />}
      {currentPage === "forgot-password" && <ForgetPswd onNavigate={handleNavigation} />}
    </>
  );
}

export default App;
