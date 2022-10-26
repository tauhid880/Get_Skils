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
    <div className="navbar bg-lime-100 w-auto p-0">
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
            className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li className="">
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link>FAQ</Link>
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
            <Link>FAQ</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end  justify-center ">
        <label
          for="toggleFour"
          className="flex cursor-pointer select-none items-center"
        >
          <div className="relative">
            <input type="checkbox" id="toggleFour" class="sr-only" />
            <div className="box bg-black block h-8 w-14 rounded-full"></div>
            <div className="dot absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition"></div>
          </div>
        </label>

        <div className="  text-xs lg:text-sm text-black">
          {user?.uid ? (
            <>
              <button onClick={handleLogOut} className="btn btn-ghost mx-2">
                Log Out
              </button>
            </>
          ) : (
            <>
              <div className="flex">
                <Link
                  to={"/login"}
                  className="btn btn-ghost border-0 text-xs p-1 m-3  lg:text-sm text-black"
                >
                  Log In
                </Link>
                <Link
                  to={"/register"}
                  className="btn btn-ghost border-0 text-xs p-1 m-3 lg:text-sm text-black"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          {user?.photoURL ? (
            <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
          ) : (
            <FaUser></FaUser>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
