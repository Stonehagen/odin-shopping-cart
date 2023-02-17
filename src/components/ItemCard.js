import React from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <div className="Item-Card">
      <div className='Item-Image-Wrapper'>
        <img src={item.picture} alt={item.name} />
      </div>
      <h3>
        {item.name}, {item.size}
      </h3>
      <h4>{item.brand}</h4>
      <div className='Price-Wrapper'>
        <h4>{item.price}</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
