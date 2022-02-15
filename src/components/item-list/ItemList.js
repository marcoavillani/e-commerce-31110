import React from "react";
import Item from "../item/Item";
import "./itemList.css";

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
