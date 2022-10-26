import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { fromJSON } from "postcss";

const Register = () => {
  const { providerLogin, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  // Google sign in
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
    <section className=" bg-gray-700 h-full">
      <div className=" lg:w-6/12 px-4 mx-auto py-10">
        <div className=" normal-case flex flex-col min-w-0 break-words w-full  shadow-2xl rounded-lg border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className=" text-lg text-gray-300 font-bold">Sign up with</h6>
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
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className=" text-center mb-3 font-bold">
              <small className="text-gray-300">
                Or sign up with credentials
              </small>
            </div>
            <form onSubmit={handleSubmit}>
              <div className=" w-full mb-3">
                <label className="block   text-xs text-gray-300 font-bold mb-2">
                  {" "}
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="border-0 px-3 py-3 placeholder-blueGray-300  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                />
              </div>

              <div className=" w-full mb-3">
                <label className="block text-gray-300   text-xs font-bold mb-2">
                  {" "}
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="border-0 px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Photo"
                />
              </div>

              <div className="relative w-full mb-3">
                <label className="block text-gray-300  text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border-0 px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div className="relative w-full mb-3">
                <label className="block text-gray-300  text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="border-0 px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div>
                <label className="inline-flex  items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded  ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span className="ml-2 text-sm text-gray-300 font-semibold ">
                    I agree with the {""}
                    <Link className="text-pink-500">Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <button
                  className="bg-blue-400 text-gray-300  text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="text-gray-300 mt-6">
                Already have an account? {""}
                <Link
                  className="no-underline border-b border-blue text-blue"
                  to="/login"
                >
                  Log In
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
