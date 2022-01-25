import { useEffect, useState } from "react";

const FunctionalComponent = ({ name, age }) => {
  const [stateName, setStateName] = useState("Juan");
  const [surname, setSurname] = useState("Perez");
  const [user, setUser] = useState({ name: "Juan", surname: "Perez" });

  useEffect(() => {
    console.log("HOLA");
  }, [user]);

  const updateNameAndSurname = () => {
    setStateName("Leo");
    setSurname("García");
    setUser({ ...user, name: "Leo" });
  };
  return (
    <div>
      <h1>FunctionalComponent</h1>
      <h2>StateName: {stateName}</h2>
      <h2>StateName: {surname}</h2>
      <h2>User: {user.name}</h2>
      <h2>surname: {user.surname}</h2>
      <button onClick={updateNameAndSurname}>Cambiar stateProps</button>
      <h2>Nombre: {name}</h2>
      <h2>Edad: {age}</h2>
    </div>
  );
};

export default FunctionalComponent;
