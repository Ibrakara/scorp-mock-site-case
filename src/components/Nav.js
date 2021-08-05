import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul>
        <NavLink exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
