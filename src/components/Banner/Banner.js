import React from "react";
import "../../App.css";
import Carousel from "./Carousel";
import Cointable from "./Cointable";

const Banner = () => {
  return (
    <>
      <div className="banner pt-10">
        <p className="text-white headding text-center text-1xl sm:text-4xl mt-3 pb-6">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        <Carousel></Carousel>
      </div>
      <Cointable></Cointable>
    </>
  );
};

export default Banner;
