import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courseList }) => {
  const { id, name } = courseList;
  return (
    <div>
      <Link
        to={`/course/${id}`}
        key={id}
        className="btn btn-block glass text-gray-900 shadow-xl my-4 normal-case"
      >
        {name}
      </Link>
    </div>
  );
};

export default CourseList;
