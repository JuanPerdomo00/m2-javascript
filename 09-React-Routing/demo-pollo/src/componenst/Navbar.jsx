import { Link, NavLink } from "react-router-dom";
import "./nav.css";

export default function NavBar() {
  return (
    //  links
    <nav>
      <h1>BARRA DE NAVEGACION</h1>
      <Link to="/">HOME</Link>
      <br />
      <Link to="/inicio">Inicio</Link>
      <br />
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <br />
      <NavLink activeClassName="active" to="/inicio/intruso">
        Intruso
      </NavLink>
    </nav>
  );
}
