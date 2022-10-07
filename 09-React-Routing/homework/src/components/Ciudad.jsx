import React from "react";

export default function Ciudad(props) {
  return (
    <div className="ciudad">
      <div className="container">
        <h2>{props.city.name}</h2>
        <div className="info">
          <div>Temperatura: {props.city.temp} ºC</div>
          <div>Clima: {props.city.weather}</div>
          <div>Viento: {props.city.wind} km/h</div>
          <div>Cantidad de nubes: {props.city.clouds}</div>
          <div>Latitud: {props.city.latitud}º</div>
          <div>Longitud: {props.city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
