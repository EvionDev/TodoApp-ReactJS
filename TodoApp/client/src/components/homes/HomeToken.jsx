import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../tasks/task";

const HomeToken = () => {
  const [description, setDescription] = useState("");
  const [taskNumber, setTaskNumber] = useState(0);
  const [completetaskNumber, setCompleteTaskNumber] = useState(0);
  const [allTask, setAllTask] = useState([]);
  const token = window.sessionStorage.getItem("token");

  const getTask = async () => {
    const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}getTask`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    res.json().then((data) => {
      setTaskNumber(data.tasks.length);
      setCompleteTaskNumber(data.completeTasks.length);
      setAllTask(data.tasks);
    });
  };

  const createTask = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}createTask`, {
      method: "POST",
      body: JSON.stringify({ token, description }),
      headers: { "Content-Type": "application/json" },
    });
    res.json().then((data) => {
      console.log(data);
      setDescription("");
    });
  };

  useEffect(() => {
    getTask();
  });

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 pt-10 md:pt-28">
      <div className="flex h-auto w-auto flex-row justify-between gap-8 rounded-[42px] border border-white px-14 py-16">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold">Todo Done</h1>
          <h3 className="text-xl">Keep it up</h3>
        </div>
        <div>
          <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-fuchsia-500">
            <h2 className="text-4xl font-extrabold text-black">{`${completetaskNumber}/${taskNumber}`}</h2>
          </div>
        </div>
      </div>
      <div className="flex w-[400px] flex-row items-center justify-between">
        <input
          type="text"
          placeholder="write your next task"
          className="w-[80%] rounded-[20px] border-2 border-[#161617] bg-[#161617] py-3 pl-5 pr-2 shadow-lg outline-none transition-colors focus:border-fuchsia-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className=" flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500 text-black delay-75 duration-500 hover:rotate-90"
          onClick={createTask}
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="flex w-full flex-col items-center gap-4">
        <Task tasks={allTask} />
      </div>
    </div>
  );
};

export default HomeToken;
