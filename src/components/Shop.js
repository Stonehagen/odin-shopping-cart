import React from 'react';
import '../styles/Shop.css';
import { ShopItems } from './Items';
import ItemCard from './ItemCard';

const Shop = () => {

  return (
    <div className="Shop">
      {ShopItems.map((item) => {
        return <ItemCard item={item} />
      })}
    </div>
  );
};

export default Shop;
