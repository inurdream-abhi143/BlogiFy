import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 bg-gray-800 text-xl text-white flex items-center justify-around px-2  mx-4">
        <div className="navbar_logo">
          <h1 className="text-2xl text-bold ">BlogiFy </h1>
        </div>
        <div className="flex items-center gap-6 navbar_links">
          <ul className="list-none gap-6 flex ">
            <li className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>

            <li className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <Link to="/blogs">Blogs</Link>
            </li>

            <li className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <Link to="/about">About</Link>
            </li>

            <li className="text-2xl text-white cursor-pointer hover:text-gray-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar_btn flex items-center px-4">
          <button className="bg-green-500 rounded-xl border-2 mx-2 px-4 cursor-pointer w-35 h-12 hover:bg-green-300">
            Login
          </button>
          <button className="bg-indigo-600 rounded-xl border-2 mx-2 px-4 cursor-pointer w-40 h-12 hover:bg-indigo-300 ">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
