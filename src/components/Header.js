import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Searchpage from "../pages/Searchpage";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  return (
    <div
      className="w-full py-2 px-10  flex justify-between items-center"
      style={{ boxShadow: "1px -1px 16px #80808042" }}
    >
      <h1
        onClick={() => navigate("/")}
        className=" text-4xl  text-blue-700 font-semibold"
        style={{ cursor: "pointer" }}
      >
        Crypto Bro
      </h1>
      {window.location.pathname !== "/Search" && (
        <i
          onClick={() => navigate(`/Search`)}
          className="fa fa-search text-2xl text-white"
        ></i>
      )}
    </div>
  );
};

export default Header;
