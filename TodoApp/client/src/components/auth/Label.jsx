import React from "react";

const Label = ({ text }) => {
  return (
    <>
      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-fuchsia-600 dark:text-gray-400 peer-focus:dark:text-fuchsia-500">
        {text}
      </label>
    </>
  );
};

export default Label;
