import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <br />
      <Link to="/formulario">Ia formulario</Link>
    </nav>
  )
}