import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div>
      <img className="mx-auto py-5" src={logo} alt="" />
      <p className="text-center">Journalism Without Fear or Favour</p>
      <p className="text-center">
        <span className="font-bold">Sunday</span> , November 27, 2025
      </p>
    </div>
  );
};

export default Header;
