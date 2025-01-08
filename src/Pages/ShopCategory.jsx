import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="banner" className="shop-category-banner" />
      <div className="shop-category-index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          <span className="sort-by-text">Sort by</span>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Items key={i} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">Explore more</div>
    </div>
  );
};

export default ShopCategory;
