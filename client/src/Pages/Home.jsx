import React from "react";
import HeroBanner from "../Components/HeroBanner/HeroBanner";
import BlogList from "../Components/FeaturedCrousal/BlogList";
import LatestBlogs from "../Components/LatestBlogs.jsx/LatestBlogs";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <BlogList />
      <LatestBlogs />
    </>
  );
};

export default Home;
