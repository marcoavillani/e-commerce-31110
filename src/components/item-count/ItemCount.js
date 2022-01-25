import React, { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // const increase = () => {
  //   if (count >= stock) return;
  //   setCount(count + 1);
  // };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="boton" onClick={increase}>
        +
      </button>
      <button className="boton" onClick={decrease}>
        -
      </button>
    </>
  );
};

export default ItemCount;
