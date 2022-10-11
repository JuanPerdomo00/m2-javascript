const { names } = require("./actions");

const initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case names.ADD:
      return { count: state.count + 1 };

    case names.REDUCE:
      return { count: state.count - 1 };

    case names.ADDN:
      return { count: state.count + action.payload };

    default:
      return state;
  }
}

module.exports = { reducer };
