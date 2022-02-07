import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    try {
      const res = await productsAPI;
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finalización del conusmo de la API");
    }
  };
  return {
    products,
  };
};

export default useProducts;
