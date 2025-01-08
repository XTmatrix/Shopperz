import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  console.log(cartItems);

  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />
      {cartItems.map((item) => {
        let itemQuantity = item.quantity;

        return all_product.map((product) => {
          if (item.id === product.id) {
            return (
              <div key={product.id}>
                <div className="cart-items-format cart-items-format-main">
                  <img
                    src={product.image}
                    alt=""
                    className="cart-icon-product"
                  />
                  <p>{product.name}</p>
                  <p>${product.new_price}</p>
                  <button className="cart-item-quantity">{itemQuantity}</button>
                  <p>${product.new_price * itemQuantity}</p>
                  <img
                    src={remove_icon}
                    alt=""
                    onClick={() => removeFromCart(product.id)}
                    className="remove-icon"
                  />
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        });
      })}

      <div className="cart-items-down">
        <div className="cart-items-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-item-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
