import React from "react";

function CartItem({ item, increment, decrement, reset }) {
  return (
    <div
      style={{
        backgroundColor: item.color,
        padding: "20px",
        width: "180px",
        borderRadius: "10px",
      }}
    >
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => increment(item.id)}>+</button>
      <button
        onClick={() => decrement(item.id)}
        disabled={item.quantity === 0}
        style={{ margin: "0 8px" }}
      >
        -
      </button>
      <button onClick={() => reset(item.id)}>Reset</button>

      <p style={{ marginTop: "10px", fontWeight: "bold" }}>
        Total: ${item.price * item.quantity}
      </p>
    </div>
  );
}

export default CartItem;
