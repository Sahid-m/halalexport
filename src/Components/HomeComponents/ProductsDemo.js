import React from "react";
import ProductsCard from "./ProductsCard";
import img1 from "../../Images/Blanched-Pud-Shrimps-IQF.jpg";
import img2 from "../../Images/Cuttle-Fish-Wholecleand.jpg";
import img3 from "../../Images/Cuttlefish-Skewer.jpg";
import img4 from "../../Images/Grouper-Fillet-Fish.jpg";
import img5 from "../../Images/M-40-60-Blanched-Pud-Shrimps.jpg";
import img6 from "../../Images/SM-60-80-Blanched-Pud-Shrimp.jpg";

export default function ProductsDemo() {
  return (
    <div className="container">
      <h1 className="text-center display-4 fw-bold">Some Products</h1>
      <div className="row  my-3">
        <div className=" col-md-4 col-sm-6">
          <ProductsCard image={img1} heading="Blanched Pud Shrimps IQF" />
        </div>
        <div className="col-md-4 col-sm-6">
          <ProductsCard image={img2} heading="Cuttle Fish Whole Clean" />
        </div>
        <div className="col-md-4 col-sm-6">
          <ProductsCard image={img3} heading="Cuttle Fish Skewer" />
        </div>
      </div>
      <div className="row  my-3">
        <div className=" col-md-4 col-sm-6">
          <ProductsCard image={img4} heading="Grouper Fillet Fish" />
        </div>
        <div className="col-md-4 col-sm-6">
          <ProductsCard image={img5} heading="M 40-60 Blanched Pud Shrimps" />
        </div>
        <div className="col-md-4 col-sm-6">
          <ProductsCard image={img6} heading="SM 60-80 Blanched Pud Shrimps" />
        </div>
      </div>
    </div>
  );
}
