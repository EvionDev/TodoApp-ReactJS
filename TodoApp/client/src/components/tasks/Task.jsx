import React, { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import Input from "./Input";

const Task = ({ tasks, updateData, modal }) => {
  const textTruncation = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      let shortenedText = text.slice(0, maxLength);
      shortenedText += "...";
      return shortenedText;
    }
  };
  return tasks.map((item, i) => (
    <div
      className="flex h-auto w-4/5 flex-row rounded-lg border bg-[#161617] p-5 shadow-lg md:w-1/3 md:p-10 lg:w-1/4"
      key={i}
    >
      <div className="mr-5 inline-flex items-center">
        <Input complete={item.complete} id={item._id} updateData={updateData} />
      </div>
      <p className={`w-2/3 ${item.complete && "line-through"}`}>
        {textTruncation(item.description, 15)}
      </p>
      <div className="flex cursor-pointer gap-1">
        <EditButton id={item._id} updateData={updateData} />
        <DeleteButton id={item._id} updateData={updateData} />
      </div>
    </div>
  ));
};

export default Task;
