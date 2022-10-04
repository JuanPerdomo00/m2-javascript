import React from "react";

export default function Card({   name, max, min, img, onClose } ) {
  // acá va tu código
  return (
    <>
      <h1>{name}</h1>
      <h2>
        Max: {max} Min: {min}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Imagen?"
      />
      <button onClick={onClose}>Ver</button>
    </>
  );
}
