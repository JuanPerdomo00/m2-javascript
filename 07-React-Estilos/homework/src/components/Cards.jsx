import React from "react";
import Card from "./Card";

export default function Cards({ cities }) {
  // let ejemplo = props;
  // console.log("props", ejemplo);
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
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
