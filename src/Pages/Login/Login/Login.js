import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { providerLogin, signIn } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-gray-700">
      <div className="flex justify-center h-screen w-screen items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-10 flex flex-col items-center shadow-2xl "
        >
          <h1 className="text-center text-2xl font-bold text-gray-400 mb-6">
            LOGIN
          </h1>

          <div className="google">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className=" text-lg text-gray-300 font-bold">
                  Log In with
                </h6>
              </div>
              <div className="btn-wrapper normal-case text-center">
                <button
                  className="bg-white normal-case text-black active:bg-blue-200  font-semibold px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <FaGithub className="mr-1 text-xl"></FaGithub>
                  Github{" "}
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="bg-white text-black  text-blueGray-700 font-semibold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <FaGoogle className="mr-1 text-xl"></FaGoogle>
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
              required
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
        </form>
      </div>
    </div>
  );
};

export default Login;
