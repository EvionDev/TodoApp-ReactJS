import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name, to }) => {
  return (
    <Link to={to}>
      <button className="w-auto border-2 border-black px-6 py-2 font-semibold transition delay-75 duration-200 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        {name}
      </button>
    </Link>
  );
};

export default Button;
