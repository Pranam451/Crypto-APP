import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import "../../App.css";
import { TrendingCoins } from "../../config/config";

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoin = async () => {
    const { data } = await axios.get(TrendingCoins("inr"));
    setTrending(data);
  };

  console.log(trending);
  useEffect(() => {
    fetchTrendingCoin();
  }, []);

  const items = trending.map((coin) => {
    return (
      <Link className="flex flex-col items-center" to={`/coins/${coin.id}`}>
        <img src={coin?.image} alt={coin.name} width="75"></img>
        <p className="text-gold text-1xl sm:text-2xl">{coin?.name}</p>

        <h1 className="text-white text-1xl mt-1 sm:text-2xl">
          ₹{numberWithCommas(coin?.current_price.toFixed(2))}{" "}
          <span
            className={
              coin?.price_change_percentage_24h <= 0
                ? "text-red-700 text-sm font-semibold"
                : "text-green-600 text-sm font-semibold"
            }
          >
            {coin?.price_change_percentage_24h}%
          </span>
        </h1>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel py-10 flex items-center ">
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      ></AliceCarousel>
    </div>
  );
};

export default Carousel;

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
