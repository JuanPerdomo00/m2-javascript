import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink activeClassName="activelink" to="/">
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Henry - Weather App
        </span>
        <SearchBar onSearch={onSearch} />
      </NavLink>
      <NavLink activeClassName="activelink" to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
