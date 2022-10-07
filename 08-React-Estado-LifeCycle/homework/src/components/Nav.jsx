import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <h1>aplicacion trucha del clima</h1>
        <img src={Logo} alt="Logo Henry" />
          <form class="form-inline my-2 my-lg-0">
            <SearchBar onSearch={onSearch}/>
          </form>
      </nav>
    </div>
  );
}

export default Nav;
