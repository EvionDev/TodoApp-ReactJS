import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, special, onClick }) => {
  return (
    <Link to={"/auth"}>
      <button
        className={`w-auto min-w-[130px] rounded-lg border-2 px-6 py-2 font-semibold duration-300 ease-in ${
          special
            ? "border-transparent bg-orange-500 text-center text-white duration-300 hover:bg-orange-600"
            : "border-white bg-transparent hover:border-orange-600"
        }`}
        onClick={onClick}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
