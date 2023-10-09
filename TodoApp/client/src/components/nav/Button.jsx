import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, special }) => {
  return (
    <Link to={"/auth"}>
      <button
        className={`w-auto min-w-[110px] rounded-lg border-2 px-6 py-2 font-semibold duration-300 ease-in ${
          special
            ? "border-transparent bg-blue-500 text-center text-white duration-300 hover:bg-blue-700"
            : "border-white bg-transparent hover:border-blue-600"
        }`}
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
