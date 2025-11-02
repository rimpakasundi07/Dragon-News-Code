import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center lg:py-10 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold lg:text-3xl pt-10 text-center ">
          Login your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn bg-sky-400 text-white mt-4">Login</button>
            <p className="text-center font-semibold pt-4 ">
              Don't Have An Account ?{" "}
              <Link
                className="text-sky-400 hover:text-blue-800"
                to="/auth/register"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
