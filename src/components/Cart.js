import React, { useEffect, useState } from 'react';
import '../styles/Cart.css';
import CartTableBody from './CartTableBody';

const Cart = ({ vis, cart, setHidden, setCart}) => {
  const calculateTotal = () =>
    cart
      .map((item) => item.amount * item.item.price)
      .reduce((pv, cv) => pv + cv, 0);

  const [total, setTotal] = useState(0);

  const recalculateTotal = () => {
    setTotal(calculateTotal());
  };

  useEffect(() => {
    recalculateTotal();
  });

  return (
    <div className="Cart-Display" style={{ visibility: vis }}>
      <div className="Cart-Table">
        <div className="Cart-Table-Header">
          <h4>Title</h4>
          <h4>Amount</h4>
          <h4>Price</h4>
        </div>
        <CartTableBody cart={cart} setCart={setCart} />
      </div>
      <div className="Cart-Footer">
        <p>Total: {total}€</p>
        <div>
          <button onClick={() => setHidden()}>CLOSE</button>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
