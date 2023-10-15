import { Link } from "react-router-dom";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <div className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px]">
        <div className="h-full w-full bg-notFound bg-cover"></div>
      </div>
      <h3 className="text-lg text-fuchsia-500">404 not found</h3>
      <h1 className="px-2 text-2xl">Whoops! That page doesn't exist</h1>
      <Link to={"/"}>
        <button className="rounded-lg bg-fuchsia-500 p-3 transition-colors duration-300 hover:bg-fuchsia-700">
          Back to homepage
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
