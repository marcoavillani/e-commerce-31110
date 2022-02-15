import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ name, id, description, image, stock }) => {
  return (
    <>
      <div className="item">
        <h2>Nombre producto: {name}</h2>
        <img src={image} alt="product" />
        <h4>{description}</h4>

        <Link to={`/item/${id}`}>Seleccionar Botón</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;
