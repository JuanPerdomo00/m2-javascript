import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [citi, setCitis] = useState("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(citi);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={citi}
        onChange={e => setCitis(e.target.value)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
