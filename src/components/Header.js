import React from "react";
import "./Header.css";
import logo from "../assets/iKeg-logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" className="company_logo" />
      </div>
      <div className="heading_text">
        <p>Beverage Data Analytics</p>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" className="company_logo" />
      </div>
    </header>
  );
}

export default Header;
