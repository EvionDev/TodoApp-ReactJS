import React, { useEffect } from "react";
import Navbar from "../components/nav/Navbar";
import HomeToken from "../components/homes/HomeToken";
import HomeNoToken from "../components/homes/HomeNoToken";
const Home = () => {
  const token = window.sessionStorage.getItem("token");

  return (
    <>
      <Navbar />
      {token ? <HomeToken /> : <HomeNoToken />}
    </>
  );
};

export default Home;
