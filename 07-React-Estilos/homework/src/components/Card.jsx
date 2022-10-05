import React from "react";
import css from "./componetsCss/Card.module.css";

export default function Card({ name, max, min, img, onClose }) {
  // acá va tu código
  return (
    <section className={css.caja}>
      <button className={css.closeButon} onClick={onClose}>
        X
      </button>
      <h1 className={css.titulo}>{name}</h1>
      <div className={css.divContent}>
        <div>
          <h5>Max</h5>
          <span>{max}</span>
        </div>
        <div>
          <h5>Min</h5>
          <span>{min}</span>
        </div>
        <img
          className={css.img}
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="Imagen?"
        />
      </div>
    </section>
  );
}
