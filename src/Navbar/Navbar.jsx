import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>EDU ECOMMERCE</h2>
      </div>

      <div className="navbar__menu">
        <span className="navbar__link">Home</span>

        <Link to="/login" className="navbar__link">
          Login
        </Link>

        <Avatar />
      </div>
    </div>
  );
}

export default Navbar;
