const redux = require("redux");
const { reducer } = require("./reducer.js");
const actions = require("./actions.js");

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(actions.add());
store.dispatch(actions.add());
store.dispatch(actions.add());
store.dispatch(actions.reduce());
store.dispatch(actions.addN(10));
