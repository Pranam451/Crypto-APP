import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full py-2 "
      style={{ boxShadow: "1px -1px 16px #80808042" }}
    >
      <h1
        onClick={() => navigate(-1)}
        className=" text-4xl mx-5 text-blue-700 font-semibold"
        style={{ cursor: "pointer" }}
      >
        Crypto Bro
      </h1>
    </div>
  );
};

export default Header;
