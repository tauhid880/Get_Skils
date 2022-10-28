import React from "react";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <div className="text-center py-10">
        <div className="stats w-9/12  stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">
              <p className="text-black font-bold">Downloads</p>
            </div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">
              <p className="text-black font-bold">New Users</p>
            </div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">
              <p className="text-black font-bold">New Registers</p>
            </div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
