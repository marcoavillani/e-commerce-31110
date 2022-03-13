import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-container">
      <div className="count">
        <button className="count-btn" onClick={decrease}>
          -
        </button>
        <p className="count-p">{count}</p>
        <button className="count-btn" onClick={increase}>
          +
        </button>
      </div>
      <button className="addtocart" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
