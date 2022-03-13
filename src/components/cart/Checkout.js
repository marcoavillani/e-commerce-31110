import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

const Checkout = () => {
  const [orderID, setOrderID] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cartList, setCartList, calcTotal } = useContext(CartContext);
  const nav = useNavigate();
  const total = calcTotal(cartList);

  const sendOrder = () => {
    const order = {
      buyer,
      items: cartList,
      total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => setOrderID(id));

    cartList.forEach((item) => {
      const itemRef = (db, "items", item.id);
      updateDoc(itemRef, { stock: item.stock - item.cantidad });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
    setCartList([]);
    sendOrder();
  };

  return (
    <div>
      <h1>Datos del Comprador</h1>
      {!isConfirmed && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre y Apellido"
            value={buyer.name}
            onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="email"
            value={buyer.email}
            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Número de celular"
            value={buyer.phone}
            onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
          />
          <button>Confirmar</button>
        </form>
      )}
      {isConfirmed && (
        <div>
          <p>Compra confirmada. su id es {orderID}</p>
          <button onClick={() => nav("/")}>Finalizar</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
