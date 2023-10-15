import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, special, onClick }) => {
  return (
    <Link to={"/auth"}>
      <button
        className={`w-auto min-w-[130px] rounded-lg border-2 px-6 py-2 font-semibold duration-300 ease-in ${
          special
            ? "border bg-gradient-to-r from-sky-500  to-fuchsia-500  bg-clip-text text-center text-transparent duration-300 hover:border-violet-400"
            : "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:border-pink-500"
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
