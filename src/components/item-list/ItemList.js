import React from "react";
import Item from "../item/Item";

const ItemList = ({ filterProducts }) => {
  return (
    <div>
      {filterProducts.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
