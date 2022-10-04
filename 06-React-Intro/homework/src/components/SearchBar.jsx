import React from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  // console.log(onSearch);
  return (
    <>
      <input type="text" placeholder="Ingrese la ciudad" />
      <button onClick={() => onSearch("Buscando...")}>Search</button>
    </>
  );
}
