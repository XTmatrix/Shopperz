import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  const { item } = props;
  return (
    <div className="item">
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          alt=""
          className="item-image"
          onClick={window.scrollTo(0, 0)}
        />
      </Link>
      <p>{item.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${item.new_price.toFixed(2)}</div>
        <div className="item-price-old">${item.old_price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Items;
