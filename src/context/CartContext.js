import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection(db, "items");

    getDocs(itemCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const addItem = (currentItem) => {
    const index = cartList.findIndex((item) => item.id === currentItem.id);
    setCartQty(cartQty + currentItem.cantidad);
    if (index > -1) {
      const oldQty = cartList[index].cantidad;

      cartList[index].cantidad = oldQty + currentItem.cantidad;

      setCartList([...cartList]);
    } else {
      setCartList([...cartList, currentItem]);
    }
  };

  const addItemInCart = (currentItem) => {
    const index = cartList.findIndex((item) => item.id === currentItem.id);
    const oldQty = cartList[index].cantidad;
    cartList[index].cantidad = oldQty + 1;
  };

  const deleteItem = (selectedItem) => {
    setCartQty(cartQty - selectedItem.cantidad);
    const filterItems = cartList.filter((item) => item.id !== selectedItem.id);
    setCartList(filterItems);
  };

  const emptyCart = () => {
    setCartList([]);
    setCartQty(0);
  };
  const calcTotal = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        addItemInCart,
        products,
        loading,
        cartList,
        setCartList,
        addItem,
        emptyCart,
        deleteItem,
        cartQty,
        calcTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
