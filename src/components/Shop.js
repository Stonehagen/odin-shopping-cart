import React from 'react';
import '../styles/Shop.css';
import { ShopItems } from './Items';
import ItemCard from './ItemCard';
import ShopSidebar from './ShopSidebar';

const Shop = () => {
  return (
    <div className="Shop">
      <ShopSidebar />
      <div className='Shop-Container'>
        <div className="Shop-Grid">
          {ShopItems.map((item) => {
            return <ItemCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
