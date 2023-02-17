import React, { useState } from 'react';
import '../styles/Shop.css';
import { ShopItems } from './Items';
import ItemCard from './ItemCard';
import ShopSidebar from './ShopSidebar';

const Shop = () => {
  const [displayCat, setDisplayCat] = useState('All');

  return (
    <div className="Shop">
      <ShopSidebar displayCat={displayCat} setDisplayCat={setDisplayCat} />
      <div className="Shop-Container">
        <div className="Shop-Grid">
          {ShopItems.map((item) => {
            if (displayCat === 'All' || displayCat === item.category) {
              return <ItemCard item={item} key={item.name} />;
            }
              return false;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
