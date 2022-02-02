import React, { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";
import ItemDetails from "../item-detail/ItemDetails";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    try {
      const res = await productsAPI;
      setItems(res.find((item) => item.id === "1"));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finalización del conusmo de la API");
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Cargando detalles...</h1>;
  }
  return (
    <div>
      <ItemDetails {...items} />
    </div>
  );
};

export default ItemDetailContainer;
