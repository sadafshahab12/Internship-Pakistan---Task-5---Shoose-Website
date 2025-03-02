import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItem) => {
      const existingItemsIndex = prevCartItem.findIndex(
        (cart) => cart.name === item.name && cart.size === item.size
      );
      if (existingItemsIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevCartItem];
        updatedItems[existingItemsIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCartItem, item];
      }
    });
  };
  const updateCartItemQuantity = (index, newQuantity) => {
    setCartItems((prevCartItem) => {
      const updateCartItems = [...prevCartItem];
      updateCartItems[index].quantity = Math.max(1, newQuantity);
      return updateCartItems;
    });
  };

  const removeItemFromCart = (index) => {
    setCartItems((prevCartItem) => {
      const updateCartItems = [...prevCartItem];
      updateCartItems.splice(index, 1);
      return updateCartItems;
    });
  };

  const clearCart = ()=>{
    setCartItems([])
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
        removeItemFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
