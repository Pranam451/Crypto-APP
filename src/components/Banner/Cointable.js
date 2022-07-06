import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "../../config/config";

const Cointable = () => {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);

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

  return (
    <>
      <h1 className="text-white my-5  text-center text-2xl sm:text-4xl">
        Cryptocurrency Prices by Market Cap
      </h1>
    </>
  );
};

export default Cointable;
