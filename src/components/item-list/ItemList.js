import React from "react";
import { useParams } from "react-router-dom";
import Item from "../item/Item";

const ItemList = ({ items }) => {
  const { id } = useParams();
  const filterProducts = items.filter((item) => item.category === id);
  return (
    <div>
      {!id && items.map((item) => <Item key={item.id} {...item} />)}
      {id && filterProducts.map((item) => <Item key={item.id} {...item} />)}
    </div>
  );
};

export default ItemList;
