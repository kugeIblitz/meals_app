import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
function MealItemForm(props) {
  const InputRef = useRef();
  const [verifyInput, setVerifyInput] = useState(true);

  function onSubmitHandler(event) {
    event.preventDefault();
    const amount = +InputRef.current.value;
    if (amount <= 0 || amount > 5) {
      setVerifyInput(false);
      return;
    }
    console.log(amount);
    setVerifyInput(true);
    props.sendDataItem(amount);
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={InputRef}
        label='Amount'
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!verifyInput ? (
        <p>Input has to be greater than 0 and smaller than 5</p>
      ) : (
        <p></p>
      )}
    </form>
  );
}
export default MealItemForm;
