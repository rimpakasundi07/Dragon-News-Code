import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <img className="mx-auto py-5" src={logo} alt="" />
      <p className="text-center text-accent">
        Journalism Without Fear or Favour
      </p>
      <p className="font-bold text-center">
        {format(new Date(), "EEEE , MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
