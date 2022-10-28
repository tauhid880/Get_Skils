import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    title,
    picture,
    duration,
    Instructor_name,
    details,
    price,
    lectures,
  } = course;
  return (
    <div className="min-h-full   ">
      <div className="hero min-h-screen bg-zinc-300">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img
            src={picture}
            alt=""
            className="lg:max-w-sm w-9/12 rounded-lg shadow-2xl object-cover"
          />
          <div className="bg-red-100 shadow-2xl p-5">
            <div className="flex lg:flex-row  flex-col justify-start gap-5 items-center">
              <div>
                <h1 className="lg:text-3xl text-4xl  font-bold text-start lg:mr-20 mr-5">
                  {title}
                </h1>
              </div>
              <div>
                <Link>
                  <button className="btn btn-ghost">
                    <FaFilePdf className="lg:text-5xl text-3xl lg:p-2 p-1 text-center text-red-400"></FaFilePdf>
                    Download PDF
                  </button>
                </Link>
              </div>
            </div>
            <p className="py-6 min-w-full">{details}</p>
            <p className="badge badge-error font-bold  badge-outline mr-5">
              Course Duration : {duration}
            </p>
            <p className="badge badge-primary font-bold  badge-outline lg:mr-5 my-5 ">
              Course Instructor : {Instructor_name}
            </p>
          </div>
          <div>
            <div class="shadow-lg w-64 bg-red-200 dark:bg-gray-800 p-4">
              <p class="text-gray-800 dark:text-gray-50 text-xl font-medium mb-4">
                Course Features
              </p>
              <p class="text-gray-900 dark:text-white text-3xl font-bold">
                {price}
                <span class="text-gray-500 text-sm">/ Lifetime</span>
              </p>
              <p class="text-gray-600 dark:text-gray-100  text-xs mt-4">
                For most businesses that want to optimize web queries.
              </p>
              <ul class="text-sm text-gray-600 dark:text-gray-100 w-full mt-6 mb-6">
                <li class="mb-3 flex items-center ">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Course Duration : {duration}
                </li>
                <li class="mb-3 flex items-center ">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Lectures : {lectures}
                </li>
                <li class="mb-3 flex items-center ">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Unlimited Templates
                </li>
                <li class="mb-3 flex items-center ">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Free premium dashboard
                </li>
                <li class="mb-3 flex items-center ">
                  <svg
                    class="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Best ranking
                </li>
                <li class="mb-3 flex items-center opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    class="h-6 w-6 mr-2"
                    fill="red"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Premium resource
                </li>
              </ul>
              <button
                type="button"
                class="py-2 px-4 btn btn-outline btn-warning   text-black w-full text-center text-base font-semibold shadow-md rounded-lg "
              >
                <p className="text-black normal-case">Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
