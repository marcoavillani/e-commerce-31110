import React from "react";

const ItemDetails = (item) => {
  const { name, image, description, price } = item;
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="Product" />
      <h2>{description}</h2>
      <h3>Price : ${price}</h3>
    </div>
  );
};

export default ItemDetails;
