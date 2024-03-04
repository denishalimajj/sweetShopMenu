// Header.js
import React from 'react';
import logo from './assets/logo.jpg'; 
import './Header.css';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="My Sweet Shop Logo" />
      <h1 className="title">My Sweet Shop</h1>
    </header>
  );
};

export default Header;
