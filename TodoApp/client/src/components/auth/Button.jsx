import React from "react";

const Button = ({ textButton }) => {
  return (
    <button
      type="button"
      className="mt-5 w-full rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm font-medium text-white duration-300 hover:bg-blue-600 dark:bg-blue-500"
    >
      {textButton}
    </button>
  );
};

export default Button;
