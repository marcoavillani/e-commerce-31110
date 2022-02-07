import useProducts from "../../hooks/useProducts";
import ItemList from "../item-list/ItemList";

const ItemListContainer = () => {
  const { products } = useProducts();

  return (
    <div className="item-container">
      <h1>Lista de Productos</h1>
      <hr />
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
