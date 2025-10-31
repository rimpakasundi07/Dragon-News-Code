import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <div className=""></div>
      <div className="nav flex gap-5 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Career</NavLink>
      </div>
      <div className="login-btn flex justify-center gap-4 items-center">
        <img src={user} alt="" />
        <button
          className="bg-gray-600 btn rounded px-5 py-2 font-bold text-white
        "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
