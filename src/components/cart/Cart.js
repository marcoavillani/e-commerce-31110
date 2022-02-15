import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import numeral from "numeral";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, emptyCart, deleteItem } = useContext(CartContext);
  let total = 0;
  cartList.map((item) => (total = total + item.price * item.cantidad));

  if (cartList.length === 0) {
    return (
      <div>
        <h1>No hay items</h1>
        <Link to={"/"}>Volver al listado</Link>
      </div>
    );
  }
  return (
    <>
      <table>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>

          <th>Price</th>
          <th>Delete</th>
        </tr>
        {cartList.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.cantidad}</td>

            <td>{numeral(item.price * item.cantidad).format("$0,0.00")}</td>
            <td>
              <button onClick={() => deleteItem(item)}>
                Eliminar Producto
              </button>
            </td>
          </tr>
        ))}
      </table>
      <hr />
      <h1>TOTAL PRICE :{numeral(total).format("$0,0.00")}</h1>
      <button onClick={emptyCart}>Vaciar carrito</button>
    </>
  );
};

export default Cart;
