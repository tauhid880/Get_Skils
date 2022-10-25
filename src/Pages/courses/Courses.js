import React from "react";
import LeftSideBar from "../Shared/LeftSideBar/LeftSideBar";

const Courses = () => {
  return (
    <div className="h-screen ">
      <div className="grid grid-cols-12 gap-5 min-h-screen ">
        <div className="bg-red-500 col-span-2">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="bg-yellow-600 col-span-10">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
