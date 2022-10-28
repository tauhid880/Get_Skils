import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courses }) => {
  const { picture, name, duration, title, id } = courses;
  return (
    <div>
      <div className="card w-96  bg-yellow-100  shadow-2xl rounded-none">
        <figure className="object-cover">
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge  badge-success">NEW</div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline font-semibold">
              Course time : {duration}
            </div>
            <div className="badge badge-error font-bold  badge-outline">
              <Link to={`/course/${id}`}>Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
