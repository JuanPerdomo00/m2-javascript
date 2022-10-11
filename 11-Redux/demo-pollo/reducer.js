const initialState = {
  ciudades: [],
  ciudad: {},
  pollo: true,
};

export default function reducer(state = initialState, action) {
  if (action.type === "BUSCAR_CIUDADES") {
    return {
      ...state,
      ciudades: action.payload,
    };
  } else if (action.type === "BUSCAR_UNA_CIUDAD") {
    return {
      ...state,
      ciudad: action.payload,
    };
  } else {
    return state;
  }
}
