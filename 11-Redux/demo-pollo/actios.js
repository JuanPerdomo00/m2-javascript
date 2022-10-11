function buscarCiudades() {
  const resultadoInfoAPI = [
    { nombre: "cartago" },
    { nombre: "neiva" },
    { nombre: "bogota" },
    { nombre: "medellin" },
  ];
  return {
    type: "BUSCAR_CIUDADES",
    payload: resultadoInfoAPI,
  };
}

function buscarUnaCIudad(habitantes) {
  return {
    type: "BUSCAR_UNA_CIUDAD",
    payload: { nombre: "cena", temp: 32, habitantes },
  };
}

function buscarProductos(producto) {
  return {
    type: "BUSCAR_PRODUCTO",
    payload: { producto },
  };
}

export { buscarCiudades, buscarUnaCIudad, buscarProductos };
