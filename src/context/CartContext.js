import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (currentItem) => {
    const index = cartList.findIndex((item) => item.id === currentItem.id);
    if (index > -1) {
      const oldQty = cartList[index].cantidad;

      cartList[index].cantidad = oldQty + currentItem.cantidad;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, currentItem]);
    }
  };

  const deleteItem = (selectedItem) => {
    const filterItems = cartList.filter((item) => item.id !== selectedItem.id);
    setCartList(filterItems);
  };

  const emptyCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, emptyCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
