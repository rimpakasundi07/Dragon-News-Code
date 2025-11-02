import React from "react";

const FindUs = () => {
  return (
    <div>
      <p className="font-bold mb-5 ">Find Us on</p>
      <div className="">
        <div className="space-y-4">
          <button className="btn bg-[#1A77F2] w-full text-white border-[#005fd8]">
            Login with Facebook
          </button>
          <button className="btn bg-gray-100 w-full text-black border-[#005fd8]">
            Login with Twiter
          </button>
          <button className="btn bg-gradient-to-bl from-[#CC2B5E] to-[#753A88] w-full text-white">
            Login with Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
