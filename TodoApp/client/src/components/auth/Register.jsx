import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";

const Register = ({ onClick }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form action="" className="w-[65%]">
        <div className="group relative z-0 mb-6 w-full">
          <Input type="text" onChange={(e) => setName(e.target.value)} />
          <Label text="Name" />
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <Input type="email" onChange={(e) => setEmail(e.target.value)} />
          <Label text="Email" />
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label text="Password" />
        </div>
        <Button textButton={"Sign up"} />
      </form>
      <p className="text-sm text-white">
        if you already a member please?
        <span
          className="ml-1 cursor-pointer text-blue-400 duration-300 hover:text-blue-500"
          onClick={onClick}
        >
          Sign in
        </span>
      </p>
    </>
  );
};

export default Register;
