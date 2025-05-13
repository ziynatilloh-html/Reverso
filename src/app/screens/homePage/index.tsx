import React from "react";
import Banner from "../../components/headers/Banner";
import { HomeNavbar } from "../../components/headers/HomeNavbar";
import Statistics from "./Statistics";
import NewProducts from "./NewProducts";

export default function HomePage() {
  return (
    <>
      <HomeNavbar />
      <Banner />
      <Statistics/>
      <NewProducts /> 
    </>
  );
}