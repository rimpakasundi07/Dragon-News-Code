import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center  items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold lg:text-3xl pt-10 text-center ">
          Register your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            {/*Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
            />
            {/*Photo url */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn bg-violet-700 text-white mt-4">
              Register
            </button>
            <p className="text-center font-semibold pt-4 ">
              Allready Have An Account ?{" "}
              <Link
                className="text-sky-400 hover:text-blue-800"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
