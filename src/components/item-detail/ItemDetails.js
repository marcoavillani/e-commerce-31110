import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";

const ItemDetails = ({ image, name, description, price, stock }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const onAdd = (count) => {
    setShow(false);
    console.log({ image, name, description, price, stock, cantidad: count });
  };
  return (
    <>
      <h3>Producto Seleccionado</h3>
      <h1>{name}</h1>
      <img src={image} alt="Product" style={{ maxWidth: "200px" }} />
      <h4>{description}</h4>
      <h5>Price : $ {price}</h5>
      {show ? (
        <ItemCount stock={stock} onAdd={onAdd} />
      ) : (
        <button onClick={() => navigate("/cart")}>Ir al carrito</button>
      )}

      <h4>{stock} unidades disponibles</h4>
    </>
  );
};

export default ItemDetails;
