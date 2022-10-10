import {Switch, Route} from "react-router-dom"

import Nav from "./components/Nav.jsx";
import  Formulario from "./components/Formulario.jsx"
import StatudCode404 from "./components/404/404.jsx";


function Inicio() {
  return (
    <>
    <h1>Inicios</h1>
    </>
  )
}



function App() {
  return (
    <div>
      <Nav />
    <Switch>
      <Route exact path="/">
        <Inicio />
      </Route>
      <Route exact path="/formulario">
        <Formulario lang="hun"/>
      </Route>
      <Route  exact path="*">
        <StatudCode404 />
      </Route>
    </Switch>

    </div>
  );
}

export default App;
