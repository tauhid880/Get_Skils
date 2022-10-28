import React, { useEffect, useState } from "react";
import CourseList from "../../CourseList/CourseList";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className=" bg-zinc-400 ">
      <h1 className="text-2xl py-5 font-semibold text-center w-auto lg:w-full ">
        Total {categories.length} Course
      </h1>
      <div className="mx-5">
        {categories.map((category) => (
          <CourseList key={category.id} courseList={category}></CourseList>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
