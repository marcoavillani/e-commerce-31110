import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ name, id, description, image, stock }) => {
  return (
    <>
      <div className="item">
        <img src={image} alt="product" />
        <h2>{name}</h2>
        {/* <h4>{description}</h4> */}
        <Button variant="primary" id="list-btn">
          <Link to={`/item/${id}`} className="item-btn" type="button">
            Ver detalles
          </Link>
        </Button>
      </div>
      {/* <hr /> */}
    </>
  );
};

export default Item;
