import React from "react";
import Card from "./Card";
import css from "./componetsCss/Cards.module.css";

export default function Cards({ cities }) {
  // let ejemplo = props;
  // console.log("props", ejemplo);
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={css.container}>
      {cities.map((cities) => (
        <Card
          key={cities.id}
          name={cities.name}
          max={cities.main.temp_max}
          min={cities.main.temp_min}
          img={cities.weather[0].icon}
          onClose={() => alert(cities.name)}
        />
      ))}
    </div>
  );
}
