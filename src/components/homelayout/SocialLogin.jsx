import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="space-y-3">
        <button className="btn  btn-outline btn-secondary w-full">
          Login with Google
        </button>{" "}
        <br></br>
        <button className="btn  btn-outline btn-primary  w-full">
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
