import store from "../store.js";
import { buscarUnaCIudad } from "../actios.js";

console.log(store.getState());

store.dispatch(buscarUnaCIudad(10000));
console.log(store.getState());
