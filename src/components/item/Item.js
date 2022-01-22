import React from "react";

const Item = ({ name, price, id, setSelectedItem, otherFunction }) => {
  const selectItem = () => setSelectedItem({ name, price, id });

  return (
    <div>
      <h2>Nombre producto: {name}</h2>
      <h2>Precio producto: {price}</h2>
      <button onClick={selectItem}>Seleccionar Botón</button>
      <button onClick={otherFunction}>Imprimir en consola</button>
      <hr />
    </div>
  );
};

export default Item;
