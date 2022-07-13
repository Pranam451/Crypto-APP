import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import SingleSearch from "../components/SingleSearch";
import { SearchCoin } from "../config/config";

const Searchpage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const searchCoins = async () => {
    const { data } = await axios.get(SearchCoin(search));
    console.log(data.coins);
    setCoins(data.coins);
  };
  console.log(coins);
  return (
    <>
      <div className="w-full px-10 py-5">
        <input
          type="text lowercase"
          onKeyPress={(e) => e.key === "Enter" && searchCoins()}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full px-2 rounded focus:outline-blue-600 border border-slate-500 bg-transparent text-white text-2xl py-2 focus:border-0 placeholder:text-white "
        />
      </div>
      <div className="w-full flex justify-around flex-wrap px-10 sm:px-10">
        {coins.map((coin) => (
          <SingleSearch
            key={coin.id}
            id={coin.id}
            name={coin.name}
            rank={coin.market_cap_rank}
            symbol={coin.symbol}
            image={coin.large}
          ></SingleSearch>
        ))}
      </div>
    </>
  );
};

export default Searchpage;
