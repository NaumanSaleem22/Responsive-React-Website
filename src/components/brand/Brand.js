import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import shopify from "../../assets/shopify.png";
import dropbox from "../../assets/dropbox.png";
import atlassian from "../../assets/atlassian.png";

export default function Brand() {
  return (
    <div className="gpt3__brand-div">
      <div className="gpt3__brand-image-div">
        <img src={google} />
      </div>
      <div className="gpt3__brand-image-div">
        <img src={slack} />
      </div>
      <div className="gpt3__brand-image-div">
        <img src={dropbox} />
      </div>
      <div className="gpt3__brand-image-div">
        <img src={shopify} />
      </div>
      <div className="gpt3__brand-image-div">
        <img src={atlassian} />
      </div>
    </div>
  );
}
