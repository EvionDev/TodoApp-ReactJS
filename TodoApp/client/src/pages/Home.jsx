import React from "react";
import Navbar from "../components/nav/Navbar";
import HomeToken from "../components/homes/HomeToken";
const Home = () => {
  const token = window.localStorage.getItem("token");
  return (
    <>
      <Navbar />
      {token ? (
        <HomeToken />
      ) : (
        <div>
          <p>nie ma tokena</p>
        </div>
      )}
    </>
  );
};

export default Home;
