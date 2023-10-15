import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Button from "./Button";

const navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const token = window.localStorage.getItem("token");

  const signOut = () => {
    window.localStorage.clear();
  };

  return (
    <div className="flex h-16 items-center justify-between border-b-2 border-white px-4 md:justify-around md:px-0">
      <h1 className="text-2xl font-semibold">
        Todo
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          App
        </span>
      </h1>
      <div className="hidden gap-4 md:flex">
        {!token ? (
          <>
            <Button name="Login" />
            <Button name="Register" special={true} />
          </>
        ) : (
          <>
            <Button name="Sign out" onClick={signOut} />
          </>
        )}
      </div>
      <div className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen ? (
        <div className="absolute right-2 top-16 z-20 flex h-auto w-auto flex-col items-end justify-start gap-6 rounded-md bg-black/50 px-6 py-6 backdrop-blur-lg ">
          <Button name="Login" />
          <Button name="Register" special={true} />
        </div>
      ) : null}
    </div>
  );
};

export default navbar;
