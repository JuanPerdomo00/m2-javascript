const initialState = {
  producto: {},
};

export default function reducer(state = initialState, action) {
  if (action.type === "BUSCAR_PRODUCTO") {
    return {
      ...state,
      producto: action.payload,
    };
  } else {
    return state;
  }
}
