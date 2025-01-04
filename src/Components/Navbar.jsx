import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center p-2 bg-blue-200 ">
        <div className="flex gap-14 mt-3 text-lg font-bold font-serif">
          <Link to="/">Home</Link>
          <Link to="/about">About US</Link>
          <Link to="/members">Members</Link>
          <Link to="/result">Fixture/Results</Link>
          <Link to="/notification">Notification</Link>
          <Link to="/media">Media</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
