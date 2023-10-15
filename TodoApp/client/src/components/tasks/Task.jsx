import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Input from "./Input";

const Task = ({ tasks }) => {
  return tasks.map((item, i) => (
    <div
      className="flex h-auto w-1/4 flex-row rounded-lg border bg-[#161617] p-10 shadow-lg"
      key={i}
    >
      <div className="mr-5 inline-flex items-center">
        <Input complete={item.complete} id={item._id} />
      </div>
      <p className={`basis-2/3 ${item.complete && "line-through"}`}>
        {item.description}
      </p>
      <div className="flex cursor-pointer gap-1">
        <EditButton />
        <DeleteButton id={item._id} />
      </div>
    </div>
  ));
};

export default Task;
