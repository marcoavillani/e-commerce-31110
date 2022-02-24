import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetails = ({ image, name, description, price, stock, id }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setShow(false);
    addItem({
      image,
      name,
      description,
      price,
      stock,
      id,
      cantidad: count,
    });
  };

  return (
    <>
      <h1>{name}</h1>
      <img src={image} alt="Product" style={{ maxWidth: "200px" }} />
      <h4>{description}</h4>
      <h5>Price : $ {price}</h5>
      {show ? (
        <ItemCount stock={stock} onAdd={onAdd} />
      ) : (
        <Button
          variant="primary"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Ir al carrito
        </Button>
      )}

      <h4>{stock} unidades disponibles</h4>
    </>
  );
};

export default ItemDetails;
