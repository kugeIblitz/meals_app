import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  function showCartHandle() {
    setCartIsShown(true);
  }

  function hideCartHandke() {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onHideCart={hideCartHandke} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
