import React, { useState } from "react";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Auth = () => {
  const [variant, setvariant] = useState("login");
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex h-[550px] w-[55%] overflow-hidden rounded-md">
        <div className="relative flex w-2/4 flex-col items-center justify-center bg-auth bg-cover bg-right-top text-white">
          <Link to={"/"}>
            <AiOutlineArrowLeft
              className="absolute left-4 top-4 z-10"
              size={25}
            />
          </Link>
          <h2 className="z-10 mb-2 text-5xl">To-Do App</h2>
          <p className="z-10">
            Discover, create & share lists of useful resources
          </p>
          <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60"></div>
        </div>
        <div className="flex h-full w-2/4 flex-col items-center justify-center gap-5 bg-[#171819]">
          {variant == "login" ? (
            <Login
              onClick={() =>
                setvariant(variant == "login" ? "register" : "login")
              }
            />
          ) : (
            <Register
              onClick={() =>
                setvariant(variant == "login" ? "register" : "login")
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
