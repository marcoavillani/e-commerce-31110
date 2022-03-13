import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import ItemCount from "./ItemCount";

const ItemDetails = ({ image, name, description, price, stock, id }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
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
  console.log(user);
  return (
    <>
      <h1>{name}</h1>
      <div className="item-info">
        <img src={image} alt="Product" style={{ maxWidth: "200px" }} />
        <h4>{description}</h4>
        <h5>Price : $ {price}</h5>
      </div>
      {show ? (
        <ItemCount stock={stock} onAdd={onAdd} />
      ) : (
        <button
          variant="primary"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Ir al carrito
        </button>
      )}

      <h4>{stock} units available</h4>
    </>
  );
};

export default ItemDetails;
