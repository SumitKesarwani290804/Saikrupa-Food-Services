import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const ToastContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);

  // Helper function to generate unique ID for cart items with different add-ons
  const generateCartItemId = (itemId, selectedAddOns) => {
    const addOnStr = selectedAddOns
      .filter((addon) => addon.selected)
      .map((addon) => addon.label)
      .sort()
      .join("|");
    return `${itemId}_${addOnStr}`;
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemKey = generateCartItemId(item.id, item.selectedAddOns || []);
      const alreadyAdded = prevItems.find(
        (i) =>
          generateCartItemId(i.id, i.selectedAddOns || []) === itemKey
      );

      let newItems;
      if (alreadyAdded) {
        newItems = prevItems.map((i) => {
          if (generateCartItemId(i.id, i.selectedAddOns || []) === itemKey) {
            return {
              ...i,
              quantity: i.quantity + (item.quantity || 1),
              totalPrice:
                (i.quantity + (item.quantity || 1)) *
                i.totalPrice /
                i.quantity,
            };
          }
          return i;
        });
      } else {
        newItems = [
          ...prevItems,
          {
            ...item,
            quantity: item.quantity || 1,
            cartItemId: itemKey,
          },
        ];
      }

      showToast(`${item.name} added to cart!`);
      return newItems;
    });
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.cartItemId !== cartItemId)
    );
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((i) => {
        if (i.cartItemId === cartItemId) {
          const itemBasePrice =
            i.totalPrice / i.quantity;
          return {
            ...i,
            quantity: newQty,
            totalPrice: itemBasePrice * newQty,
          };
        }
        return i;
      })
    );
  };

  const showToast = (message) => {
    setToast({ message, timestamp: Date.now() });
    setTimeout(() => setToast(null), 3000);
  };

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartItemCount,
        generateCartItemId,
      }}
    >
      <ToastContext.Provider value={{ toast, showToast }}>
        {children}
      </ToastContext.Provider>
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export const useToast = () => useContext(ToastContext);
