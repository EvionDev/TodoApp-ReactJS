import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const Task = () => {
  return (
    <div className="flex h-auto w-1/4 flex-row rounded-lg border bg-[#161617] p-10">
      <div className="mr-5 inline-flex items-center">
        <input
          id="login"
          type="checkbox"
          className="before:content[''] relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-orange-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
        />
      </div>
      <h1 className="basis-2/3">Test</h1>
      <div className="flex cursor-pointer gap-1">
        <BiEdit size={25} />
        <BiTrash size={25} />
      </div>
    </div>
  );
};

export default Task;
