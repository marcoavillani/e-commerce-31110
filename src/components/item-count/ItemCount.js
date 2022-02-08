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
    <div>
      <button className="boton" onClick={decrease}>
        -
      </button>
      <span>{count}</span>
      <button className="boton" onClick={increase}>
        +
      </button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
