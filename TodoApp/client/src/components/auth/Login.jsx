import React from "react";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
const Register = () => {
  return (
    <form action="" className="w-[65%]">
      <div className="group relative z-0 mb-6 w-full">
        <Input type="text" />
        <Label text="Email" />
      </div>
      <div className="group relative z-0 mb-6 w-full">
        <Input type="password" />
        <Label text="Password" />
      </div>
      <Button textButton={"Sign in"} />
    </form>
  );
};

export default Register;
