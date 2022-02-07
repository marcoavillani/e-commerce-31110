import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";

const Item = ({ name, id, description, image, stock }) => {
  const [stockSelected, setStockSelected] = useState(1);
  return (
    <>
      <div>
        <h2>Nombre producto: {name}</h2>
        <img src={image} alt="product" />
        <h4>{description}</h4>
        <ItemCount stock={stock} setStockSelected={setStockSelected} />

        <Link to={`/item/${id}`}>Seleccionar Botón</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;
