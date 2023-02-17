import React from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ item, cart, setCart }) => {
  const addToCart = (it) => {
    const edibleCart = [...cart];
    let found = false;
    edibleCart.forEach((cartItem, index) => {
      if (edibleCart[index].name === it.name) {
        found = true;
        edibleCart[index].amount = edibleCart[index].amount + 1;
      }
    });
    if (!found) {
      const newEntry = { name: it.name, amount: 1, item: it };
      edibleCart.push(newEntry);
    }
    setCart(edibleCart);
  };

  return (
    <div className="Item-Card">
      <div className="Item-Image-Wrapper">
        <img src={item.picture} alt={item.name} />
      </div>
      <h3>
        {item.name}, {item.size}
      </h3>
      <h4>{item.brand}</h4>
      <div className="Price-Wrapper">
        <h4>{item.price}€</h4>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
