import React, { useState, useContext } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import swal from "sweetalert";
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

  /*   const order = {
    buyer: {
      name: "martin",
      lastname: "matuca",
      email: "martin@gmail.com",
      phone: "2213892444",
      address: "45 4567 la plata",
    },
    products: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),

    total: totalPrice(),
  };
 */
  const handleClick = (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cart,
      total: totalPrice,
      buyer: buyerData,
    };
    addDoc(orderCollection, order)
      .then((res) => console.log(res.id))
      .catch((err) => console.log(err));
  };

  const updateOrder = () => {
    const db = getFirestore();
    const docRef = collection(db, "orders");
    updateDoc(docRef, { stock: 30 })
      .then((res) => ({ successAlert }))
      .catch((err) => ({ errorAlert }));
  };

  const successAlert = () => {
    swal({
      text: "Se Actualizo el stock",
      icon: "success",
      button: "Aceptar",
    });
  };

  const errorAlert = () => {
    swal({
      text: "No se pudo actualizar el stock",
      icon: "error",
      button: "Aceptar",
    });
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        handleClick,
        updateOrder,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
