import React, { useEffect, useState } from "react";
import CourseCard from "../../CourseCard/CourseCard";

const RightSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid col lg:grid-cols-3 gap-5 m-7 lg:p-10  shadow-2xl">
      {categories.map((category) => (
        <CourseCard key={category.id} courses={category}></CourseCard>
      ))}
    </div>
  );
};

export default RightSideBar;
