import React from "react";
import { useCart } from "../Context/Cart-context";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>My Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.totalPrice}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
