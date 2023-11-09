import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, special, onClick, path }) => {
  return (
    <Link to={path}>
      <button
        className={`w-auto min-w-[130px] rounded-lg px-6 py-2 font-semibold duration-300 ease-in ${
          special
            ? "bg-gradient-to-r from-sky-500  to-fuchsia-500  bg-clip-text text-center text-transparent duration-300 "
            : "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;

// bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent
