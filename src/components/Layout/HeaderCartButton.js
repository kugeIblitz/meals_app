import CartIcon from "../Cart/CartIcon";
import Classes from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  function showCart() {
    props.showCart();
  }

  return (
    <button className={Classes.button} onClick={showCart}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>3</span>
    </button>
  );
}
export default HeaderCartButton;
