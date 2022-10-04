import React from "react";

export default function Card({ name, max, min, img, onClose }) {
  // acá va tu código
  return (
    <>
      <button onClick={onClose}>X</button>
      <h1>{name}</h1>
      <h3>Max: {max}</h3>
      <h3>Min: {min}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Imagen?"
      />
    </>
  );
}
