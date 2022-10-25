import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-center mt-3">
        All Courses - {categories.length}
      </h1>
      <div className="m-5">
        {categories.map((category) => (
          <button className="btn btn-block glass text-gray-900 shadow-xl my-4 normal-case">
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
