import React from "react";
import Navbar from "../components/nav/Navbar";
import HomeToken from "../components/homes/HomeToken";
import HomeNoToken from "../components/homes/HomeNoToken";
const Home = () => {
  const token = window.localStorage.getItem("token");
  return (
    <>
      <Navbar />
      {token ? (
        <HomeToken />
      ) : (
        <div>
          <HomeNoToken />
        </div>
      )}
    </>
  );
};

export default Home;
