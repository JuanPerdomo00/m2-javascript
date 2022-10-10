import React, { useState } from "react";

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function Form() {
  const [stateInputs, setStateInputs] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "User requerido",
    password: "Password requerida",
  });

  const handlleInputsChange = (e) => {
    //   setStateInputs({
    //     ...stateInputs,
    //     [e.target.name]: e.target.value,
    //   });

    setStateInputs((estado) => {
      return {
        ...estado,
        [e.target.name]: e.target.value,
      };
    });

    let errorsResults = validate({
      ...stateInputs,
      [e.target.name]: e.target.value,
    });

    setErrors(errorsResults);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (errors) return alert("HAY ERRORS EN EL FORMULARIO");
    alert("se envio la info");
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)}>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          type="text"
          name="username"
          value={stateInputs.username}
          onChange={(e) => handlleInputsChange(e)}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          type="password"
          name="password"
          value={stateInputs.password}
          onChange={(e) => handlleInputsChange(e)}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}
