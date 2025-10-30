import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img className="mx-auto py-5" src={logo} alt="" />
      <p className="text-center text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="text-center text-accent">
        <span className="font-bold text-black">Sunday</span> , November 27, 2025
      </p>
    </div>
  );
};

export default Header;
