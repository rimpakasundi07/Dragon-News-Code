import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-between items-center py-10">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 text-accent ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/carrer">Career</NavLink>
      </div>
      <div className="login-btn flex justify-center gap-4 items-center">
        <img src={userIcon} alt="" />
        <Link
          to="/auth/login"
          className="bg-gray-600 btn rounded px-5 py-2 font-bold text-white
        "
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
