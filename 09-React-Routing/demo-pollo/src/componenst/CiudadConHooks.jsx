import { useParams, useLocation, useHistory } from "react-router-dom";

export default function Ciudad(props) {
  // console.log("match", props.match);
  // console.log("history", props.history);
  // console.log("location", props.location);

  // let nombreCiudad = props.match.params.nombreDeCiudad;
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log("match", params);
  console.log("history", location);
  console.log("location", history);

  return (
    <>
      <h1>Hola soy el componente ciudad con hooks: </h1>
    </>
  );
}
