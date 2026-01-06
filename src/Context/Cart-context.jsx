import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const alreadyAdded = prevItems.find((i) => i.id === item.id);

      if (alreadyAdded) {
        return prevItems.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
                totalPrice:
                  (i.quantity + item.quantity) * i.price,
              }
            : i
        );
      }

      return [
        ...prevItems,
        { ...item, totalPrice: item.price * item.quantity },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.id !== id)
    );
  };

  const updateQuantity = (id, newQty) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.id === id
          ? {
              ...i,
              quantity: newQty,
              totalPrice: i.price * newQty,
            }
          : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
