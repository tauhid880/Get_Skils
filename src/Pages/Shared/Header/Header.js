import { Link } from "react-router-dom";
import { FaBookOpen, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-lime-100 min-w-full p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-white menu-compact bg-stone-600 w-screen dropdown-content mt-3 p-2 shadow "
          >
            <li className="">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-black normal-case xl lg:text-3xl"
        >
          <FaBookOpen className="mr-2 text-zinc-600"></FaBookOpen>{" "}
          <span className="text-red-400 text-sm lg:text-2xl">Get</span> Skills
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-black text-xl">
          <li className="">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="">
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link to={"/faq"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex  justify-center items-center">
        <div className=" flex  items-center  text-xs lg:text-sm text-black">
          {user?.uid ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost mx-2">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-ghost border-0 text-xs p-1 lg:m-3 m-1  lg:text-sm text-black"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="btn btn-ghost border-0 text-xs p-1 lg:m-3 m-1 lg:text-sm text-black"
              >
                Register
              </Link>
            </>
          )}
          <div
            className="tooltip tooltip-bottom items-center justify-center"
            data-tip={user?.displayName}
          >
            {user?.photoURL ? (
              <img
                className="lg:w-10 w-8 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUser className="lg:w-10 w-3 rounded-full"></FaUser>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
