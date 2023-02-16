import React from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="Item-Card">
      <img src={item.picture} alt={item.name} />
      <h2>{item.name}</h2>
      <h4>{item.price}</h4>
    </div>
  );
};

export default ItemCard;
