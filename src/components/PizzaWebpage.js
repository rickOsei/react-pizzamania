import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutPizza from "./AboutPizza";
import PizzaType from "./PizzaType";
import Footer from "./Footer";

function PizzaWebpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPizza name="Pizza" />
      <PizzaType name="Pizza" />
      <Footer />
    </>
  );
}

export default PizzaWebpage;
