import React, { useState } from "react";
import ItemCount from "../item-count/ItemCount";

const Item = ({ name, id, description, stock, setSelectedItem }) => {
  const [stockSelected, setStockSelected] = useState(0);

  const selectItem = () =>
    setSelectedItem({ name, qty: stockSelected, description, id, stock });

  return (
    <>
      <div>
        <h2>Nombre producto: {name}</h2>
        <h4>Descripción producto: {description}</h4>
        <ItemCount stock={stock} setStockSelected={setStockSelected} />
        <button onClick={selectItem}>Seleccionar Botón</button>
      </div>
      <hr />
    </>
  );
};

export default Item;
