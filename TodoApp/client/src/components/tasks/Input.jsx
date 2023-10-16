import React, { useState } from "react";

const Input = ({ id, complete }) => {
  const [completed, setCompleted] = useState(!complete);

  const toggleCompleted = () => {
    setCompleted(!completed);
    const completeTask = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_DATABASE_URL}editCompleteTask`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            IdTask: id,
            Completed: completed,
          },
        },
      );
      res.json().then((data) => {
        console.log(data);
      });
    };
    completeTask();
  };
  return (
    <>
      <input
        id="login"
        type="checkbox"
        className={`before:content[''] relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-fuchsia-500 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity ${
          !completed &&
          "border-green-500 bg-green-500 before:bg-green-500 hover:before:opacity-10"
        }`}
        onChange={toggleCompleted}
      />
    </>
  );
};

export default Input;
