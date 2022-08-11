import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((product) => {
        if (product.item.id === item.id) {
          return { ...product, quantity: product.quantity + quantity };
        } else {
          console.log(product);
          return product;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce((acc, product) => acc + product.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.item.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.item.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
