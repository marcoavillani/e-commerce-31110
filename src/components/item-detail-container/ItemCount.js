import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
      <Button className="count-btn" onClick={decrease}>
        -
      </Button>
      <span className="count">{count}</span>
      <Button className="count-btn" onClick={increase}>
        +
      </Button>
      <Button id="addtocart" onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
