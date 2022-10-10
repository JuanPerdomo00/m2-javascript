export default function Formulario({ lang }) {
  if (lang === "hun") {
    return (
      <>
        <h1>Formulario</h1>
        <form>
          <input key="lastName" type="text" />
          <input key="firstName" type="text" />
          <input key="middleInitial" type="text" />
        </form>
      </>
    );
  }
}
