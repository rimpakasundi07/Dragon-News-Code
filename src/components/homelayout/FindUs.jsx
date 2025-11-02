import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <p className="font-bold mb-5 ">Find Us on</p>
      <div className="">
        <div className="space-y-4">
          <button className="btn bg-[#1A77F2] w-full text-white border-[#005fd8]">
            <FaFacebook></FaFacebook> Login with Facebook
          </button>
          <button className="btn bg-gray-100 w-full text-black border-[#005fd8]">
            <FaTwitter></FaTwitter> Login with Twiter
          </button>
          <button className="btn bg-gradient-to-bl from-[#CC2B5E] to-[#753A88] w-full text-white">
            <FaInstagram></FaInstagram> Login with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
