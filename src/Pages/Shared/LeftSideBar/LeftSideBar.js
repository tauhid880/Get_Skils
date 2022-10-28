import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseList from "../../CourseList/CourseList";

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
        Total {categories.length} Course
      </h1>
      <div className="m-5">
        {categories.map((category) => (
          <CourseList key={category.id} courseList={category}></CourseList>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
