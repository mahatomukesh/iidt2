import React, { useState } from 'react';

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Apple Juice', price: 250, quantity: 2 },
    { id: 2, name: 'Grapes Juice', price: 250, quantity: 1 }
  ]);

  const updateQuantity = (id, action) => {
    let updatedCart = [...cart];
    let itemIndex = updatedCart.findIndex(item => item.id === id);
    
    if(action === "increase") {
      updatedCart[itemIndex].quantity += 1;
    } else if(action === "decrease" && updatedCart[itemIndex].quantity > 0) {
      updatedCart[itemIndex].quantity -= 1;
    }

    setCart(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={`/${item.name.replace(' ', '').toLowerCase()}.jpg`} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => updateQuantity(item.id,"decrease")}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id,"increase")}>+</button>
        </div>
      ))}
      <div className="total">
        <p>Sub-Total</p>
        <h4>₹{cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</h4>
      </div>
      <button className="checkout">Checkout</button>
    </div>
  );
};

export default ShoppingCart;
