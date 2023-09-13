import classes from "./Cart.module.css";
function Cart(props) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Cart;
