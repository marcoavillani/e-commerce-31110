import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import numeral from "numeral";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css";

const Cart = () => {
  const { addItemInCart, cartList, emptyCart, deleteItem, calcTotal } =
    useContext(CartContext);

  const navigate = useNavigate();
  const total = calcTotal(cartList);

  if (cartList.length === 0) {
    return (
      <div className="cart">
        <h1>No hay items</h1>
        <Link to={"/"} className="btn-back">
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      {cartList.map((item) => {
        return (
          <div className="cart-item">
            <img src={item.image} alt="item" />
            <h4 style={{ minWidth: "5rem" }}>{item.name}</h4>

            <span>{item.cantidad}</span>

            <button onClick={() => deleteItem(item)}>Delete item</button>
            <span style={{ float: "right" }}>${item.price}</span>
            <hr />
          </div>
        );
      })}

      <h1>TOTAL PRICE :{numeral(total).format("$0,0.00")}</h1>
      <div className="buttons">
        <button onClick={() => navigate("/")}>
          <BsArrowReturnLeft style={{ fontSize: "1rem" }} />
        </button>
        <button onClick={emptyCart}>
          Clear
          <FaTrashAlt />
        </button>
        <button onClick={() => navigate("/checkout")}>
          Finish my purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
