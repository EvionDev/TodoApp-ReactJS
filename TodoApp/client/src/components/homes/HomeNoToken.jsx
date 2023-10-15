import React from "react";

const HomeNoToken = () => {
  return (
    <div className=" relative flex h-screen w-full items-center justify-center">
      <div className=" absolute bottom-0 left-0 h-full w-full bg-geo3d bg-cover bg-center brightness-50"></div>
      <div className="container absolute mx-auto text-center">
        <h1 className="text-3xl">
          Welcome to TodoApp - Your Ultimate Task Management Solution
        </h1>
        <h3 className="mt-3">
          Are you feeling overwhelmed by your ever-growing to-do list? Need a
          simple, efficient, and organized way to tackle your tasks? Look no
          further!
        </h3>
      </div>
    </div>
  );
};

export default HomeNoToken;
