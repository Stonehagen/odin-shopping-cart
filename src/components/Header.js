import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImg from '../images/header/header.png';
import '../styles/Header.css';

function Header() {
  return (
    <div
      className="Header"
      style={{
        backgroundImage: `url(${HeaderImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/shop">
          <li>SHOP</li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
