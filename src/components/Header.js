import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-2">
      <h1
        onClick={() => navigate(-1)}
        className="text-gold text-4xl text-center"
        style={{ color: "gold", cursor: "pointer" }}
      >
        Crypto Hunter
      </h1>
    </div>
  );
};

export default Header;
