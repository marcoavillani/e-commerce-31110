import { useState } from "react";
import Item from "../item/Item";

const items = [
  {
    id: "1",
    name: "Iphone X",
    price: "999.999$",
    createdBy: "Apple",
    stock: 11,
  },
  { id: "2", name: "Iphone XS", price: "800$", createdBy: "Apple", stock: 8 },
  {
    id: "3",
    name: "Galaxy Note",
    price: "850$",
    createdBy: "Samsung",
    stock: 6,
  },
  {
    id: "4",
    name: "Redmi Note 7 Pro",
    price: "600$",
    createdBy: "Xiaomi",
    stock: 4,
  },
];

const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState();
  const otherFunction = () => {
    console.log("otherFunction");
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      <h3>Producto seleccionado</h3>
      <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
      <p>{selectedItem ? selectedItem.price : ""}</p>
      <hr />
      {items.map(({ id, name, price, stock }) => (
        <Item
          key={id}
          id={id}
          name={name}
          price={price}
          stock={stock}
          setSelectedItem={setSelectedItem}
          otherFunction={otherFunction}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
