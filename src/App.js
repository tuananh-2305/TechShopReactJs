import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/assets/data/Data";
import React, { useState } from "react";
import Cart from "./components/common/cart/Cart";
import Footer from "./components/common/footer/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  const { productItems, shopItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  const deleteCartItem = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem([...cartItem]);
    }
  };
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header cartItem={cartItem} />
          <Routes>
            <Route
              path="/"
              element={
                <Pages
                  productItems={productItems}
                  addToCart={addToCart}
                  shopItems={shopItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItem={cartItem}
                  addToCart={addToCart}
                  decreaseQty={decreaseQty}
                  deleteCartItem={deleteCartItem}
                />
              }
            />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
