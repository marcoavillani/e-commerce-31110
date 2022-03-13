import React from "react";
import { Link } from "react-router-dom";

const Item = ({ name, id, description, image, stock }) => {
  return (
    <div className="item">
      <img src={image} alt="product" />
      <h2>{name}</h2>
      <Link to={`/item/${id}`} className="item-btn" type="button">
        See details
      </Link>
    </div>
  );
};

export default Item;
