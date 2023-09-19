import React from "react";
import "./Header.css";
import logo from "../assets/Digikloud_logo.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" className="company_logo" />
      </div>
    </header>
  );
}

export default Header;
