import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./itemList.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AiOutlineLoading } from "react-icons/ai";

const ItemListContainer = () => {
  const { products, loading } = useContext(CartContext);
  const { id } = useParams();

  if (loading) {
    return (
      <h1 className="loading">
        <AiOutlineLoading />
      </h1>
    );
  }

  const filterProducts = id
    ? products.filter((product) => product.category === id)
    : products;

  return (
    <>
      <div className="item-container">
        <h1>Products list</h1>

        <ItemList filterProducts={filterProducts} />
      </div>
    </>
  );
};

export default ItemListContainer;
