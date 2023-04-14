import { createContext, useState } from "react";
import Data from "../components/assets/data/Data";
import { useSelector } from "react-redux";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const mode = useSelector((state) => state.darkMode.mode);

  const { productItems, shopItems } = Data;

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const proInCart = cartItem.find((item) => item.id === product.id);

    if (proInCart) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...proInCart, qty: proInCart.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const decreaseQty = (product) => {
    const proInCart = cartItem.find((item) => item.id === product.id);
    if (proInCart.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...proInCart, qty: proInCart.qty - 1 }
            : item
        )
      );
    }
  };
  const deleteCartItem = (product) => {
    const proInCart = cartItem.find((item) => item.id === product.id);
    if (proInCart) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem([...cartItem]);
    }
  };

  const data = {
    cartItem,
    productItems,
    shopItems,
    addToCart,
    decreaseQty,
    deleteCartItem,
    mode,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
export { Context, ContextProvider };
