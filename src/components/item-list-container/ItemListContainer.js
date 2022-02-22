import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./itemList.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = () => {
  const { products, loading } = useContext(CartContext);
  const { id } = useParams();

  if (loading) {
    return <h1>LOADING...</h1>;
  }

  const filterProducts = id
    ? products.filter((product) => product.category === id)
    : products;

  return (
    <>
      <div className="item-container">
        <h1>Lista de Productos</h1>
        <hr />
        <ItemList filterProducts={filterProducts} />
      </div>
    </>
  );
};

export default ItemListContainer;
