import React from "react";
import Item from "./Item";

const ItemList = ({ filterProducts }) => {
  return (
    <div className="item-list">
      {filterProducts.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
