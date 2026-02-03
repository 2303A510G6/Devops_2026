import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Item One", price: 20, quantity: 1, color: "#fde2e4" },
    { id: 2, name: "Item Two", price: 15, quantity: 0, color: "#e2f0cb" },
    { id: 3, name: "Item Three", price: 30, quantity: 2, color: "#dbe7f3" },
    { id: 4, name: "Item Four", price: 25, quantity: 1, color: "#fff1c1" },
    { id: 5, name: "Item Five", price: 10, quantity: 0, color: "#f3e8ff" },
  ]);

  const increment = (id) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const reset = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: 0 } : item
    ));
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h1>Shopping Cart</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            increment={increment}
            decrement={decrement}
            reset={reset}
          />
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>
        Total Price: ${totalPrice}
      </h2>
    </div>
  );
}

export default Cart;
