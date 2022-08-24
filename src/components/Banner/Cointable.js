import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../../config/config";
import { numberWithCommas } from "./Carousel";
import { useNavigate } from "react-router-dom";
import { makeStyles, Pagination } from "@mui/material";

const Cointable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);

  const fetchCoins = async () => {
    setloading(true);
    const { data } = await axios.get(CoinList("inr"));
    setcoins(data);
    setloading(false);
    console.log(data);
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-white my-5  text-center text-2xl sm:text-4xl">
        Cryptocurrency Prices by Market Cap
      </h1>
      <div className="w-full px-2 sm:px-10">
        <div className="flex w-full text-white text-center justify-between py-3 bg-blue-500 drop-shadow-lg text-1xl sm:text-2xl font-semibold rounded-md ">
          <div className="col-1 w-1/4">Coin</div>
          <div className="col-1 w-1/4 hidden sm:block">Market Cap</div>
          <div className="col-1 w-1/4">Changes in 24h</div>
          <div className="col-1 w-1/4">Price</div>
        </div>
        {coins.slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
          return (
            <div
              onClick={() => navigate(`/coins/${row.id}`)}
              className="text-white flex w-full justify-between hover:drop-shadow-md  hover:bg-black text-1xl sm:text-2xl font-thin  text-center  border-b-2 border-gray-800"
              key={row.name}
            >
              <div className="col-1 w-1/4">
                <div className="w-full flex py-5 px-3">
                  <img
                    src={row.image}
                    width="17%"
                    alt=""
                    className="hidden sm:block"
                  />
                  <div className="mx-2">
                    <h1 className="text-xl text-blue-700">{row.symbol}</h1>
                    <p className="text-sm sm:text-lg text-dark">{row.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-1 w-1/4 hidden sm:flex items-center justify-center">
                ₹{numberWithCommas(row.market_cap.toFixed(2))}
              </div>
              <div
                className={
                  row.price_change_percentage_24h <= 0
                    ? "text-red-700 text-sm col-1 w-1/4 font-semibold flex items-center justify-center"
                    : "text-green-600 text-sm col-1 w-1/4 font-semibold flex items-center justify-center"
                }
              >
                <i
                  className={
                    row.price_change_percentage_24h <= 0
                      ? "fa fa-caret-down mx-1"
                      : "fa fa-caret-up mx-1"
                  }
                ></i>
                {row.price_change_percentage_24h}%
              </div>
              <div className="col-1 w-1/4 flex items-center justify-center">
                {" "}
                ₹{numberWithCommas(row.current_price.toFixed(2))}{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full  px-2 sm:px-10">
        <div className=" bg-blue-500 rounded-md">
          <Pagination
            size="large"
            color="primary"
            text="white"
            style={{
              padding: 20,
              width: "100%",
              text: "white",
              display: "flex",
              justifyContent: "center",
            }}
            count={10}
            onChange={(_, value) => {
              setpage(value);
              window.scroll(0, 450);
            }}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default Cointable;
