import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/*
Los componentes que me envuelben el app, son llamados componentes
de orden superior.


Diferencias entre el BrowserRouter y HashRouter

? HashRouter
! El primero da una configuraciondel servidor mas simple
! ya que siempre la request es la misma URL

> Lo malo es que agrega un # a la URL al principio


? BrowserRouter
! URL mas prolija

> El segundo hay que hacerle una configuraacion extra
> en ambientes de produccion(DEV out of the box)
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
