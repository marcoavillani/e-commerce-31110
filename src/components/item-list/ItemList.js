import React from "react";
import Item from "../item/Item";

const ItemList = ({ items, setSelectedItem }) => {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
};

export default ItemList;
