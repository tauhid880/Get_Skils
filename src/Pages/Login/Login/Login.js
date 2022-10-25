import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="bg-gray-10  ">
      <div className="flex justify-center h-screen w-screen  items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center shadow-2xl ">
          <h1 className="text-center text-2xl font-bold text-gray-400 mb-6">
            LOGIN
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />
          </div>

          <div className="w-3/4 flex flex-row justify-between">
            <div className=" flex items-center gap-x-1">
              <input
                type="checkbox"
                name="remember"
                id=""
                className=" w-4 h-4  "
              />
              <label className="text-sm text-slate-400">Remember me</label>
            </div>
            <div>
              <Link className="text-sm text-slate-400 hover:text-blue-500">
                Forgot?
              </Link>
            </div>
          </div>

          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              LOGIN
            </button>
          </div>
          <div className="text-gray-300 mt-6">
            Don't have an account? {""}
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/register"
            >
              Register
            </Link>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
