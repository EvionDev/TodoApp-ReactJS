import React from "react";

import Navbar from "../components/nav/Navbar";

const Home = () => {
  const token = window.localStorage.getItem("token");
  return (
    <>
      <Navbar />
      {token ? (
        <div>
          <p>Jest token</p>
        </div>
      ) : (
        <div>
          <p>Nie ma tokena</p>
        </div>
      )}
    </>
  );
};

export default Home;
