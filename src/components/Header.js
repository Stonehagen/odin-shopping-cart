import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h1>This is the Header</h1>
      <ul>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/shop"><li>SHOP</li></Link>
      </ul>
    </div>
  );
}

export default Header;
