import react, { useState } from "react";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import { Navigate } from "react-router-dom";

const Register = ({ onClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_DATABASE_URL}login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    res.json().then((data) => {
      const { token } = data;
      window.localStorage.setItem("token", token);
      setRedirect(true);
    });
    setEmail("");
    setPassword("");
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form action="" className="w-[65%]">
        <div className="group relative z-0 mb-6 w-full">
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Label text="Email" />
        </div>
        <div className="group relative z-0 mb-6 w-full">
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Label text="Password" />
        </div>
        <Button textButton={"Sign in"} onClick={loginUser} />
      </form>
      <p className="text-sm text-white">
        Doesn't have an account yet?
        <span
          className="ml-1 cursor-pointer text-blue-400 duration-300 hover:text-blue-500"
          onClick={onClick}
        >
          Sign up
        </span>
      </p>
    </>
  );
};

export default Register;
