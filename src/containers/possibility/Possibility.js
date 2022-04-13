import React from "react";
import "./possibility.css";
import possibilityImg from "../../assets/possibility.png";

export default function Possibility() {
  return (
    <div className="possibility__main-div">
      <div className="possibility__image-div">
        <img src={possibilityImg} />
      </div>
      <div className="possibility__content-div">
        <p className="possibility__content-text1">
          Request Early Access to Get Started
        </p>
        <h1 className="possibility__content-text2 gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="possibility__content-text3">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="possibility__content-text4">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  );
}
