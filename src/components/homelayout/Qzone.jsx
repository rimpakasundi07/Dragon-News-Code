import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playGround from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-5">
      <p className="font-bold mb-5">QZone</p>
      <div className="space-y-5">
        <img src={swimmingImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
