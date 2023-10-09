import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Button from "./Button";

const navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between border-b-2 border-white px-4 md:justify-around md:px-0">
      <h1 className="font-mono text-2xl font-semibold">TodoApp</h1>
      <div className="hidden gap-4 md:flex">
        <Button name="Login" />
        <Button name="Register" special={true} />
      </div>
      <div className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen ? (
        <div className="absolute right-2 top-20 flex h-auto w-auto flex-col items-end justify-start gap-6 rounded-md bg-black/50 px-6 py-6">
          <Button name="Login" />
          <Button name="Register" special={true} />
        </div>
      ) : null}
    </div>
  );
};

export default navbar;
