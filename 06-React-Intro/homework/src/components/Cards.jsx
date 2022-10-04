import React from "react";
import Card from "./Card";

export default function Cards({ cities }) {
  // let ejemplo = props;
  // console.log("props", ejemplo);
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      {cities.map((cites, index) => (
        <Card
          key={index} //!No recomendado, no sabia que mas ponerle como key
          name={cites.name}
          max={cites.main.temp_max}
          min={cites.main.temp_min}
          img={cites.weather[0].icon}
          onClose={() => alert(cites.name)}
        />
      ))}
    </>
  );
}






