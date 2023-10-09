import React from "react";
import Button from "./Button";
const navbar = () => {
  return (
    <div className="flex h-16 items-center justify-around">
      <h1 className="font-mono text-2xl font-semibold">TodoApp</h1>
      <div className="flex gap-4">
        <Button name="Login" />
        <Button name="Register" special={true} />
      </div>
    </div>
  );
};

export default navbar;
