import React from "react";
import { Link, Navigate } from "react-router-dom";

const SingleSearch = ({ id, name, symbol, image, rank }) => {
  return (
    <div
      // onClick={() => Navigate(`/coins/${id}`)}
      className={
        rank <= 100 && rank >= 1
          ? "block  sm:w-1/6 mx-2 bg-gray-900 my-5  rounded-lg w-full md:1/6"
          : "hidden sm:w-1/6 w-full md:1/6"
      }
    >
      <Link to={`/coins/${id}`}>
        <div className={rank >= 1 ? "block" : "hidden"}>
          <h1 className="bg-blue-500 inline px-2 py-2 text-white font-semibold rounded-tl-2xl rounded-br-2xl">
            Ranking #{rank}
          </h1>
        </div>
        <img
          src={image}
          alt=""
          className=" mt-3 w-1/2 sm:w-3/4 block mx-auto"
        />
        <h1 className="text-blue-600 font-semibold uppercase text-center text-md mt-3">
          {symbol}
        </h1>
        <h1 className="text-white  text-center text-2xl mb-5">{name}</h1>
      </Link>
    </div>
  );
};

export default SingleSearch;
