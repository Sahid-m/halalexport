import React from "react";
import "../Stylesheets/HomePage.css";

export default function GreyText(props) {
  return (
    <div className="container-fluid  greytext">
      <h4 className="">{props.heading}</h4>
    </div>
  );
}
