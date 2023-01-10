import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo-Container">
        <h1>Den-Pro-Dental</h1>
      </div>

      <ul className="list-container">
        <li>
          <Link to="/" className="headerlink-title">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/services" className="headerlink-title">
            SERVICES
          </Link>
        </li>
        <li>
          <Link to="/about" className="headerlink-title">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" className="headerlink-title">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
