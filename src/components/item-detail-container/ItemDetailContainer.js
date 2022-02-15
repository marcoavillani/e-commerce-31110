import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemDetails from "../item-detail/ItemDetails";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { products } = useProducts();
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
