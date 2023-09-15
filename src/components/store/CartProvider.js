import React from "react";
import CartContext from "./Cart-context";

function addItemHandler(item) {}
function removeItemHandler(id) {}

function CartProvider(props) {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartProvider;
