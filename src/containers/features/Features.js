import React from "react";
import "./features.css";

export default function Features(props) {
  return (
    <div className="features-div">
      <div className="features-heading-div">
        <h1 className="features-heading">{props.title}</h1>
      </div>
      <p className="features-text">{props.para}</p>
    </div>
  );
}
