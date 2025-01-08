import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const RealatedProduct = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_product.map((item, i) => {
          return <Items key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RealatedProduct;
