import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav className="nav navbar-dark">
      <NavLink to="/" exact activeStyle={activeStyle} className="nav nav-tabs">
        Home
      </NavLink>
      
      <NavLink to="/courses" activeStyle={activeStyle} className="nav nav-tabs">
        Courses
      </NavLink>
      
      <NavLink to="/About" activeStyle={activeStyle} className="nav nav-tabs">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
