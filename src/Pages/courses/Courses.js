import React from "react";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../Shared/RightSideBar/RightSideBar";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <div className="grid col-span-12 lg:grid-cols-12 w-auto ">
        <div className="bg-lime-50 col-span-6 lg:col-span-2">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="bg-lime-50 col-span-6 lg:col-span-10">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default Courses;
