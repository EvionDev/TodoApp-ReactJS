import React from "react";

const Button = ({ textButton, onClick }) => {
  return (
    <button
      type="button"
      className="mt-5 w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white duration-300 hover:bg-orange-600 "
      onClick={onClick}
    >
      {textButton}
    </button>
  );
};

export default Button;
