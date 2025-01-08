import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-200">
      <div className="container mx-auto px-6 py-4 font-serif text-lg font-semibold flex flex-col sm:flex-row justify-center items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="w-full flex  sm:hidden">
          <button className="text-xl" onClick={() => setMenuOpen(!isMenuOpen)}>
            ☰
          </button>
        </div>

        {/* Links */}
        <div
          className={`w-full sm:w-auto flex-col sm:flex-row sm:flex ${
            isMenuOpen ? "flex gap-4 mt-2" : "hidden"
          } sm:gap-12`}
        >
          <NavLink
            to="/"
            activeClassName="text-blue-600"
            className="hover:text-blue-700 transition duration-300"
            onClick={() => setDropdownOpen(false)}
          >
            Home
          </NavLink>

          {/* About Us with Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="hover:text-blue-700 transition duration-300"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              About Us
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md">
                <NavLink
                  to="/about/history"
                  activeClassName="text-blue-600"
                  className="block px-4 py-2 hover:bg-blue-100 text-sm"
                  onClick={() => setDropdownOpen(false)}
                >
                  Brief History
                </NavLink>
                <NavLink
                  to="/about/committeeMembers"
                  activeClassName="text-blue-600"
                  className="block px-4 py-2 hover:bg-blue-100 text-sm"
                  onClick={() => setDropdownOpen(false)}
                >
                  Management Committee
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/members"
            activeClassName="text-blue-600"
            className="hover:text-blue-700 transition duration-300"
            onClick={() => setDropdownOpen(false)}
          >
            Members
          </NavLink>
          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 hover:text-blue-700 transition duration-300"
                : "hover:text-blue-700 transition duration-300"
            }
            onClick={() => setDropdownOpen(false)}
          >
            Matches
          </NavLink>

          <NavLink
            to="/notifications"
            activeClassName="text-blue-600"
            className="hover:text-blue-700 transition duration-300"
            onClick={() => setDropdownOpen(false)}
          >
            Notification
          </NavLink>
          <NavLink
            to="/media"
            activeClassName="text-blue-600"
            className="hover:text-blue-700 transition duration-300"
            onClick={() => setDropdownOpen(false)}
          >
            Media
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-blue-600"
            className="hover:text-blue-700 transition duration-300"
            onClick={() => setDropdownOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;