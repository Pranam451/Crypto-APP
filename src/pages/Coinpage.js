import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Banner/Chart";
import { SingleCoin } from "../config/config";
import { chartDays } from "../config/data";

const Coinpage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setcoin(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="main w-full block sm:flex my-10">
      <div className="w-full sm:w-2/5 px-5 ">
        <div className="rounded-full bg-blue-600 w-fit px-3 py-2 text-white">
          Rank #{coin?.market_cap_rank}
        </div>
        <img src={coin?.image.large} alt="" width="" className="mx-auto" />
        <h1 className="text-2xl text-center mt-5 text-blue-600">
          {coin?.symbol}
        </h1>
        <h1 className="text-4xl  text-center mt-3 text-white uppercase">
          {coin?.name}
        </h1>
        <p className="text-blue-500 mt-5 text-center text-3xl">
          Market Price:
          <span className="text-white">
            ₹{coin?.market_data.market_cap.inr.toFixed(2)}
          </span>
        </p>
        <div className="w-full flex justify-center my-5">
          <table>
            <thead>
              <tr>
                <th className="px-3 py-3 text-white border bg-blue-600 border-gray-800">
                  Current Price
                </th>
                <th className="px-3 py-3 text-white border bg-blue-600 border-gray-800">
                  Price Change In 24h
                </th>
                <th className="px-3 py-3 text-white border bg-blue-600 border-gray-800">
                  Price Change in %
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-3 text-white text-center border border-gray-800">
                  ₹{coin?.market_data.current_price.inr.toFixed(2)}
                </td>
                <td className="px-3 py-3 text-white text-center border border-gray-800">
                  ₹
                  {coin?.market_data.price_change_24h_in_currency.inr.toFixed(
                    2
                  )}
                </td>
                <td
                  className={
                    coin?.market_data.price_change_percentage_24h_in_currency
                      .inr <= 0
                      ? "text-red-700   font-semibold flex items-center justify-center px-3 py-3 border border-gray-800"
                      : "text-green-600    font-semibold flex items-center justify-center px-3 py-3 border-gray-800 border"
                  }
                >
                  <i
                    className={
                      coin?.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
                        2
                      ) <= 0
                        ? "fa fa-caret-down mx-1"
                        : "fa fa-caret-up mx-1"
                    }
                  ></i>
                  {coin?.market_data.price_change_percentage_24h_in_currency.inr.toFixed(
                    2
                  )}
                  %
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className=" w-full sm:w-3/5 border-0 sm:border-l border-gray-800 px-2">
        <Chart />
      </div>
    </div>
  );
};

export default Coinpage;
