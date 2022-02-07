import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, setStockSelected }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setStockSelected(count);
  }, [count]);

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
    </div>
  );
};

export default ItemCount;
