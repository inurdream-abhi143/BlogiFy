import React from "react";

import Hero_banner from "../../assets/Hero_banner.jpg";

const HeroBanner = () => {
  return (
    <>
      <div
        className="heroBanner w-full h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white m-0 pt-5"
        style={{ backgroundImage: `url(${Hero_banner} )` }}
      >
        <div className=" flex flex-col items-center justify-center w-[50%]">
          <div className="hero-text ">
            <h1 className="text-6xl font-bold text-gray-800">
              Welcome, To BlogiFy
            </h1>
            <h3 className="text-3xl mt-12  text-gray-600">
              Read. Write. Discover.
            </h3>
            <p className="text-2xl mt-6  text-gray-500">
              Discover thousands of blogs, or write your own today.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="button bg-amber-400 cursor-pointer w-55 h-14 rounded-3xl m-4 p-4 ">
              Explore More Blogs
            </button>
            <button className=" button bg-amber-400 cursor-pointer w-55 h-14 rounded-3xl  m-4 p-4">
              Become Publisher
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
