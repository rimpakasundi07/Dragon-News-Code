import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("User trying to Logout");
    logOut()
      .then(() => {
        alert("You logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-gray-600 btn rounded px-5 py-2 font-bold text-white
        "
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-gray-600 btn rounded px-5 py-2 font-bold text-white
        "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
