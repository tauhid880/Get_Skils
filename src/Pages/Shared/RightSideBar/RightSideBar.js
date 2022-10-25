import React, { useEffect, useState } from "react";

const RightSideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid col lg:grid-cols-3 gap-5 m-0 lg:p-10  shadow-2xl">
      {categories.map((category) => (
        <div className="card w-96  bg-yellow-100  shadow-2xl rounded-none">
          <figure className="object-cover">
            <img src={category.picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {category.name}
              <div className="badge  badge-success">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideBar;
