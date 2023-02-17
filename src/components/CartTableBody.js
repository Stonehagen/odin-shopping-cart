import React from 'react';

const CartTableBody = ({ cart, setCart }) => {
  const incAmount = (it) => {
    const edibleCart = [...cart];
    edibleCart.forEach((cartItem, index) => {
      if (edibleCart[index].name === it.name) {
        edibleCart[index].amount = edibleCart[index].amount + 1;
      }
    });
    setCart(edibleCart);
  };

  const decAmount = (it) => {
    const edibleCart = [...cart];
    edibleCart.forEach((cartItem, index) => {
      if (edibleCart[index].name === it.name) {
        edibleCart[index].amount = edibleCart[index].amount - 1;
        if (edibleCart[index].amount <= 0) {
          edibleCart.splice(index, 1);
        }
      }
    });
    setCart(edibleCart);
  };

  return (
    <div className="Table-Body">
      {cart.map((cartItem) => {
        return (
          <div className="Cart-Table-Row" key={cartItem.name}>
            <p>{cartItem.name}</p>
            <div className="Table-Amount">
              <button
                className="change-amount-btn"
                onClick={() => decAmount(cartItem)}
              >
                -
              </button>
              <p className="Cart-Amount">{cartItem.amount}</p>
              <button
                className="change-amount-btn"
                onClick={() => incAmount(cartItem)}
              >
                +
              </button>
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
