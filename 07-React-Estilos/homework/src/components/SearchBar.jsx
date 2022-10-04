import React from "react";
import css from "./componetsCss/SearchBar.module.css";


export default function SearchBar({ onSearch }) {
  // acá va tu código
  // console.log(onSearch);
  return (
    <div className={css.divSearch}>
      <input className={css.inputSearch}  type="text" placeholder="Ingrese la ciudad" />
      <button className={css.buttonSearch}  onClick={() => onSearch("Buscando...")}>Agregar...</button>
    </div>
  );
}
