import redux from "redux";
import reducer from "./reducer.js";
import reducerProductos from "./reducerProductos.js";

const store = redux.createStore(
  redux.combineReducers([reducer, reducerProductos])
);


console.log(store.getState())



export default store;
