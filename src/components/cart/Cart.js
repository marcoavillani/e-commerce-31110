import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const Cart = () => {
  const { cartList, emptyCart, deleteItem } = useContext(CartContext);

  const total = cartList.reduce(
    (acum, prod) => acum + prod.cantidad * prod.price,
    0
  );
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
      <Row className="table-headers">
        <Col>Producto</Col>
        <Col>Cantidad</Col>

        <Col>Price</Col>
        <Col>Delete</Col>
      </Row>
      <hr />
      {cartList.map((item) => (
        <Row key={item.id} className="data-row">
          <Col>
            {item.name} <img src={item.image} alt="product" />
          </Col>
          <Col>{item.cantidad}</Col>

          <Col>{numeral(item.price * item.cantidad).format("$0,0.00")}</Col>
          <Col>
            <Button onClick={() => deleteItem(item)}>Eliminar Producto</Button>
          </Col>
        </Row>
      ))}

      <hr />
      <h1>TOTAL PRICE :{numeral(total).format("$0,0.00")}</h1>
      <Button onClick={emptyCart}>Vaciar carrito</Button>
    </div>
  );
};

export default Cart;
