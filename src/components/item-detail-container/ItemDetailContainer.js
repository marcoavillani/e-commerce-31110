import {
  collection,
  doc,
  getDoc,
  getFirestore,
  query,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// import useProducts from "../../hooks/useProducts";
import ItemDetails from "./ItemDetails";

const ItemDetailContainer = () => {
  const { products } = useContext(CartContext);
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [id, products]);

  return (
    <div className="detail-container">
      <ItemDetails {...selectedItem} />
    </div>
  );
};

export default ItemDetailContainer;
