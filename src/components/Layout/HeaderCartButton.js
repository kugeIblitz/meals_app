import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../store/Cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items
    ? cartCtx.items.reduce((curNumber, item) => curNumber + item.amount, 0)
    : 0;

  function showCart() {
    props.showCart();
  }

  return (
    <button className={Classes.button} onClick={showCart}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
