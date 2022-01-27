import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import ItemList from "../item-list/ItemList";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("Finalización del consumo de la API");
    }
  };

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="item-container">
      <h1>Lista de Productos</h1>
      <h3>Producto seleccionado</h3>
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>Cantidad seleccionada: {selectedItem && selectedItem.qty}</p>
      <p>Stock disponible: {selectedItem && selectedItem.stock}</p>
      <hr />
      <ItemList items={products} setSelectedItem={setSelectedItem} />
    </div>
  );
};

export default ItemListContainer;
