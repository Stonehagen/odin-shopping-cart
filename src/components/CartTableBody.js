import React from 'react';

const CartTableBody = ({cart}) => {
  return (
    <div className="Table-Body">
      {cart.map((cartItem) => {
        return (
          <div className="Cart-Table-Row" key={cartItem.name}>
            <p>{cartItem.name}</p>
            <div className="Table-Amount">
              <button className="change-amount-btn">-</button>
              <p className="Cart-Amount">{cartItem.amount}</p>
              <button className="change-amount-btn">+</button>
            </div>
            <p className="Cart-Price">
              {cartItem.amount * cartItem.item.price}€
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CartTableBody;
