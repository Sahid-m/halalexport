import React from "react";
import "../Stylesheets/ProductsPage.css";

export default function ProductsCard(props) {
  return (
    <div className="image-container">
      <div className="cards">
        <img src={props.image} className="img-fluid img-thumbnail" />
      </div>
      <div className="overlay">
        <h3>{props.heading}</h3>

        <button className="btn fs-4 mx-3 btn-primary" type="button">
          Read More
        </button>
      </div>
    </div>
  );
}
