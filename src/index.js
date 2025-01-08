import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

// const newCartItems = [];
// setCartItems((prev) => {
//   prev.map((prevItems) => {
//     if (prevItems.id !== itemId) {
//       newCartItems.push(prevItems);
//       return newCartItems;
//     }
//     console.log(newCartItems);
//     return newCartItems;
//   });
// });
// setCartItems((prevItems) => {
//   console.log(prevItems);
// });
