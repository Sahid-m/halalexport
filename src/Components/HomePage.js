import React from "react";
import "./Stylesheets/HomePage.css";
import Hero from "./HomeComponents/Hero";
import GreyText from "./HomeComponents/GreyText";
import ProductsDemo from "./HomeComponents/ProductsDemo";
import Cp from "./HomeComponents/Cp";
import Footer from "./HomeComponents/Footer";

export default function HomePage() {
  return (
    <div className="pagemargin">
      <Hero />
      <GreyText
        heading="Serving hygienically processed & nutritionally rich Eel Fish, Yellow
        Croaker Fish, Whole Squid Fish, Sole Fish, Silver Pomfret Fish, Reef Cod
        Fish, Croaker Fish, Mackerel Fish, Indian Mackerel Fish, Hilsa Fish,
        Ribbon Fish, and Leather Jacket Fish"
      />
      <ProductsDemo />
      <Cp />
      <Footer />
    </div>
  );
}
