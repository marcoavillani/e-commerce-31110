import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";
import ItemList from "../item-list/ItemList";
import Item from "../item/Item";

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(true);

  useEffect(() => {
    getRickAndMortyCharacters();
    // getProducts();
    productsAPI
      .then((res) => setProducts(res))
      .catch((err) => console.log(err))
      .finally(() => {
        console.log("Finalización del consumo de la API");
        setLoading(false);
      });
  }, []);

  // fetch("https://rickandmortyapi.com/api/character")
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error))
  //   .finally(setLoadingCharacters(false));

  const getRickAndMortyCharacters = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCharacters(false);
    }
  };

  // const getProducts = async () => {
  //   try {
  //     const result = await productsAPI;
  //     setProducts(result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //     console.log("Finalización del consumo de la API");
  //   }
  // };

  if (loadingCharacters) {
    return <h1>Cargando Personajes...</h1>;
  }
  return (
    <div className="item-container">
      <h1>Lista de Productos</h1>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}

      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>Cantidad seleccionada: {selectedItem && selectedItem.qty}</p>
      <p>Stock disponible: {selectedItem && selectedItem.stock}</p>
      <hr />
      {characters.map(({ id, image, name }) => (
        <Item
          key={id}
          id={id}
          name={name}
          description="Blah"
          image={image}
          setSelectedItem={setSelectedItem}
        />
      ))}
      <ItemList items={products} setSelectedItem={setSelectedItem} />
    </div>
  );
};

export default ItemListContainer;
