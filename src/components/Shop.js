import React, { useEffect, useState } from 'react';
import '../styles/Shop.css';
import { ShopItems } from './Items';
import ItemCard from './ItemCard';
import ShopSidebar from './ShopSidebar';
import Cart from './Cart';

const Shop = () => {
  const [displayCat, setDisplayCat] = useState('All');
  const [cart, setCart] = useState([]);
  const [vis, setVis] = useState('hidden');
  const [total, setTotal] = useState(0);

  const setVisible = () => {
    setVis('visible');
  };
  const setHidden = () => {
    setVis('hidden');
  };

  const getTotalOrders = () =>
  cart.map((item) => item.amount).reduce((pv, cv) => pv + cv, 0);

  useEffect(() => {

    setTotal(getTotalOrders());
  });

  return (
    <>
      <div className="Shop">
        <ShopSidebar displayCat={displayCat} setDisplayCat={setDisplayCat} />
        <div className="Shop-Container">
          <div className="Shop-Grid">
            {ShopItems.map((item) => {
              if (displayCat === 'All' || displayCat === item.category) {
                return (
                  <ItemCard
                    item={item}
                    cart={cart}
                    setCart={setCart}
                    key={item.name}
                  />
                );
              }
              return false;
            })}
          </div>
        </div>
      </div>
      <div className="cart" onClick={() => setVisible()}>
        <div>CART</div>
        <div>({total})</div>
      </div>
      <Cart vis={vis} cart={cart} setHidden={setHidden} setCart={setCart} />
    </>
  );
};

export default Shop;
