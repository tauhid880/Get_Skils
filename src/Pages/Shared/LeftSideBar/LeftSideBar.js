import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-center w-auto lg:w-full mt-3">
        Total {categories.length} Courses.
      </h1>
      <div className="m-5">
        {categories.map((category) => (
          <Link
            to={category.id}
            key={category.id}
            className="btn btn-block glass text-gray-900 shadow-xl my-4 normal-case"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
