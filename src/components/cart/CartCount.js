import React, { useEffect, useState } from "react";
import "./cart.css";

const CartCount = ({ item }) => {
  const [count, setCount] = useState(item.cantidad);

  let { cantidad, stock } = item;
  console.log(cantidad);
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
      <input type="button" value="-" onClick={decrease} />
      <input
        type="number"
        name="q"
        value={count}
        onChange={(e) => e.target.value}
      />
      <input type="button" value="+" onClick={increase} />
    </div>
  );
};

export default CartCount;
