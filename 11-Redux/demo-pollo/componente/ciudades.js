import store from "../store.js";
import { buscarCiudades, buscarProductos } from "../actios.js";

console.log(store.getState());

store.dispatch(buscarCiudades());
store.dispatch(buscarProductos("producto 1"));
console.log(store.getState());
