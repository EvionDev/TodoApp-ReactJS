import React from "react";

const Input = ({ type, onChange, value }) => {
  return (
    <>
      <input
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-fuchsia-500"
        type={type}
        placeholder=""
        onChange={onChange}
        value={value}
        autoComplete="false"
      />
    </>
  );
};

export default Input;
