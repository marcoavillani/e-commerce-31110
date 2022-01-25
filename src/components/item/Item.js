import React from "react";
import ItemCount from "../item-count/ItemCount";

const Item = ({ name, price, id, stock, setSelectedItem, otherFunction }) => {
  const selectItem = () => setSelectedItem({ name, price, id });

  return (
    <div>
      <h2>Nombre producto: {name}</h2>
      <h2>Precio producto: {price}</h2>
      <button onClick={selectItem}>Seleccionar Botón</button>
      <button onClick={otherFunction}>Imprimir en consola</button>
      <ItemCount stock={stock} initial={0} />
      <hr />
    </div>
  );
};

export default Item;
