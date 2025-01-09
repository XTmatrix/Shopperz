import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  let [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      // Checking  if the product is already in the cart
      const existingProductIndex = prev.findIndex((item) => item.id === itemId);

      if (existingProductIndex !== -1) {
        // If product exists then update the quantity
        const updatedCartItems = [...prev];
        updatedCartItems[existingProductIndex].quantity += 1;
        return updatedCartItems;
      } else {
        // If product doesn't exist then add it to the cart with quantity 1
        return [
          ...prev,
          {
            id: itemId,
            quantity: 1,
          },
        ];
      }
    });
  };

  console.log(cartItems);
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      // Finding the index of the product in the cart
      const productIndex = prev.findIndex((item) => item.id === itemId);

      if (productIndex !== -1) {
        const updatedCartItems = [...prev];

        // If quantity > 1 then reduce the quantity
        if (updatedCartItems[productIndex].quantity > 1) {
          updatedCartItems[productIndex].quantity -= 1;
        } else {
          // If quantity is 1  then remove the item completely
          updatedCartItems.splice(productIndex, 1);
        }

        return updatedCartItems;
      }

      return prev;
    });
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      const product = all_product.find((product) => product.id === item.id);
      if (product) {
        return total + product.new_price * item.quantity;
      }
      return total;
    }, 0);
  };

  const getTotalCartItemsCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItemsCount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
