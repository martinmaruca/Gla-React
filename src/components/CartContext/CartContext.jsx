import React, {useState, useContext} from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, newQuantity) => {
        const newCart = cart.find((prod) => prod.id === item.id);
        newCart.push({...item, quantity: newQuantity});
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find((item) => item.id === id) ? true : false;

    const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeItem,
            addItem
        }}>
            {children}
        </CartContext.Provider>


    )
}

export default CartProvider;