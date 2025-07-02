import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import BlogLogo from "../../assets/BlogLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-20 bg-gray-800 text-xl text-white flex items-center justify-between px-8 shadow-md sticky top-0 z-50 ">
        <div className="navbar_logo">
          <h1 className="text-2xl font-bold tracking-wide">BlogiFy</h1>
          {/* <img src={BlogLogo} className="w-25 h-15 bg-transparent" /> */}
        </div>
        <ul className="flex space-x-8">
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-yellow-400 transition-colors duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <button className="flex items-center bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-yellow-300 transition">
              <RiLoginBoxLine className="mr-2" /> Login
            </button>
          </Link>
          <form className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search for blogs"
              className="bg-gray-700 text-white px-3 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-800 px-3 py-2 rounded-xl cursor-pointer hover:bg-yellow-300 transition"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
