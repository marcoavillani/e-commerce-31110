import React from "react";
// import ItemCount from "../item-count/ItemCount";

const ItemDetails = ({ image, name, description, price, stock }) => {
  return (
    <>
      <h3>Producto Seleccionado</h3>
      <h1>{name}</h1>
      <img src={image} alt="Product" style={{ maxWidth: "200px" }} />
      <h4>{description}</h4>
      <h5>Price : $ {price}</h5>
      {/* <ItemCount stock={stock} setStockSelected={setStockSelected} /> */}
      <button>Agregar al carrito</button>
      <h4>{stock} unidades disponibles</h4>
    </>
  );
};

export default ItemDetails;
