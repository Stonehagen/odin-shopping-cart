import React from 'react';
import '../styles/ShopSidebar.css';
import { Categorys } from './Items';

const ShopSidebar = ({ displayCat, setDisplayCat }) => {
  const setDisplay = (cat) => {
    setDisplayCat(cat);
  };

  return (
    <div className="ShopSidebar">
      <h2>CATEGORY</h2>
      <ul>
        {Categorys.map((category) => {
          return (
            <li key={category}>
              <button
                onClick={() => setDisplay(category)}
                id={displayCat === category ? 'active' : ''}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopSidebar;
