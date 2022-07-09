import React from "react";
import "../../App.css";
import Carousel from "./Carousel";
import Cointable from "./Cointable";

const Banner = () => {
  return (
    <>
      <div className="banner pt-10">
        <p className="text-white headding text-center text-1xl sm:text-4xl mt-3 pb-6">
          Trending Cryptocurrency across the world
        </p>
        <Carousel></Carousel>
      </div>
      <Cointable></Cointable>
    </>
  );
};

export default Banner;
