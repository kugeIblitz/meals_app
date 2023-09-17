import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
function MealItem(props) {
  const ctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  function getTheDataHandler(amount) {
    const itemToAdd = {
      id: props.id,
      price: price,
      description: props.description,
      name: props.name,
      amount: amount,
    };
    ctx.addItem(itemToAdd);

    console.log(itemToAdd);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={classes.description}> {props.description} </div>
        <div className={classes.price}>{price} </div>
      </div>
      <div>
        <MealItemForm sendDataItem={getTheDataHandler} />
      </div>
    </li>
  );
}
export default MealItem;
