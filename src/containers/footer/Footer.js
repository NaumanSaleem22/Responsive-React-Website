import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
export default function Footer() {
  return (
    <div className="footer-main-div">
      <div className="footer-div1-fullwidth">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button className="footer-button">Request Early Access</button>
      </div>
      <div className="footer-4-divs">
        <div className="footer-div-1">
          <img src={logo} />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br />
            All Rights Reserved
          </p>
        </div>
        <div className="footer-div-2">
          <strong>
            <p>Links</p>
          </strong>
          <p>Overon</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-div-3">
          <strong>
            <p>Company</p>
          </strong>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>

          <p>Contact</p>
        </div>
        <div className="footer-div-4">
          <strong>
            <p>Get in Touch </p>
          </strong>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
    </div>
  );
}
