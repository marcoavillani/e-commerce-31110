import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemList from "../item-list/ItemList";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const filterProducts = id
    ? products.filter((product) => product.category === id)
    : products;
  return (
    <div className="item-container">
      <h1>Lista de Productos</h1>
      <hr />
      <ItemList filterProducts={filterProducts} />
    </div>
  );
};

export default ItemListContainer;
