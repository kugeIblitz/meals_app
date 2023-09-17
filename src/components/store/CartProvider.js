import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const ACTIONS = {
  add: "ADD",
  remove: "REMOVE",
};

const defaultState = {
  items: [],
  totalAmount: 0,
};

function reducer(action, state) {
  if (action.type === ACTIONS.add) {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return { items: updatedItems, totalAmount: updatedAmount };
  }
  return defaultState;
}

function CartProvider(props) {
  const [dispatcher, state] = useReducer(reducer, defaultState);

  function addItemHandler(item) {
    dispatcher({ type: ACTIONS.add, item });
  }
  function removeItemHandler(id) {
    dispatcher({ type: ACTIONS.remove, id });
  }
  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
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
