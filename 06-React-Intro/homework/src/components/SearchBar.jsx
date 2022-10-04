import React from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  // console.log(onSearch);
  return (

    <div>
      <input type="text" placeholder="Ingrese la ciudad"/>
      <button onClick={() => onSearch("hola")}>Serarch</button>
    </div>
  );
}
