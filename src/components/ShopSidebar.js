import React from 'react';
import '../styles/ShopSidebar.css';
import { Categorys } from './Items';

const ShopSidebar = () => {
  return (
    <div className="ShopSidebar">
      <h2>CATEGORY</h2>
      <ul>
        {Categorys.map((category) => {
          return (
            <li>
              <button>{category}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopSidebar;
