export default function Ciudad(props) {
  function irAHome() {
    props.history.push("/")
  }

  console.log("match", props.match);
  console.log("history", props.history);
  console.log("location", props.location);

  let nombreCiudad = props.match.params.nombreDeCiudad;
  return (
    <>
      <h1>Hola soy el componente ciudad: {nombreCiudad}</h1>
      <button onClick={irAHome}>Ir al home</button>
    </>
  );
}
