import React from "react";
import Animation from "../../assets/Animation.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <Lottie animationData={Animation} loop={true} />
        <div>
          <h1 className="text-5xl text-center lg:text-start mb-5 lg:mb-0 font-bold">
            Prepare for the Future & Start your Courses Now...{" "}
          </h1>
          <div className="">
            <p className="py-6 font-bold text-center bg-lime-300 shadow-lg text-black my-2 lg:w-1/3 w-auto">
              Educate,Being Smart is Great.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="./courses"
              className="btn btn-primary bg-lime-300 border-0 text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
