import React from "react";
import css from "./componetsCss/Card.module.css";

export default function Card({ name, max, min, img, onClose }) {
  // acá va tu código
  return (
    <section className={css.caja}>
        <button className={css.closeButon} onClick={onClose}>X</button>
      <div className={css.div}>
        <h1 className={css.titulo}>{name}</h1>
        <h3>Max: {max}</h3>
        <h3>Min: {min}</h3>
        <img
          className={css.img}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Imagen?"
        />
      </div>
    </section>
  );
}
