import { Route, Switch } from "react-router-dom";
import NavBar from "./componenst/Navbar.jsx";
import Inicio from "./componenst/inicio.jsx";
import About from "./componenst/About.jsx";
import Home from "./componenst/Home.jsx";
import Instruso from "./componenst/intruso.jsx";
import Ciudad from "./componenst/ciudad.jsx";
import CiudadConHooks from "./componenst/CiudadConHooks.jsx";

function App() {
  return (
    <div>
      <NavBar />
      {/* Route es para definir una ruta */}
      <Switch>
        {/* 
        La palabra nombre ciudad se acaba de convertir en un paramtro
        y un parametro para un path equivale a una variable.
        */}
        <Route
          exact
          path="/ciudad/:nombreDeCiudad"
          // render={(props) => {
          //   return  <Ciudad {...props} />;
          // }}

          render={({ match, history, location }) => {
            return (
              <Ciudad match={match} history={history} location={location} />
            );
          }}
        />
        <Route exact path="/ciudadHooks/:nombreDeCiudad">
          <CiudadConHooks />
        </Route>

        <Route exact path="/inicio">
          <Inicio nombre="Jakepy" />
        </Route>

        <Route path="/inicio/intruso">
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
          <Instruso />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        {/* 
        Ejemplo de otra forma de rutas antiguamente
      
      <Route  
      
      path="/"
      render={() => {<Componente props={example props}/>}
      />
      
      */}
      </Switch>
    </div>
  );
}

export default App;
