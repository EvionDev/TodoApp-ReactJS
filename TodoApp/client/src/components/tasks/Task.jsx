import React from "react";

const Task = () => {
  return (
    <div className="flex h-auto w-1/4 flex-row rounded-lg border-[1px] bg-[#161617] p-10">
      <div class="inline-flex items-center">
        <input
          id="login"
          type="checkbox"
          class="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 checked:orange-pink-500 peer relative mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:bg-green-500 checked:before:bg-orange-500 hover:before:opacity-10"
        />
      </div>
      <h1>Test</h1>
    </div>
  );
};

export default Task;
