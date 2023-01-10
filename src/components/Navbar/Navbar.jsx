import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo-Container">
        <h1>Den-Pro-Dental</h1>
      </div>

      <ul className="list-container">
        <li>HOME</li>
        <li>SERVICES</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
