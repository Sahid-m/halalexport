import React from "react";
import "../Stylesheets/HomePage.css";

export default function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="herotext">
          <h1 className="herohead display-1">Halal Exports</h1>
          <div>
            <h4 className="fs-4 ">A Place to get all your Products</h4>
          </div>
          <div className="my-3">
            <button className="btn fs-4  mx-3 herobtn" type="button">
              Products
            </button>
            <button className="btn fs-4 mx-3 herobtn" type="button">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
