// Header.js
import React from 'react';
import logo from './images/logo.jpg'; 
import './Header.css';

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt="My Sweet Shop Logo" />
      {/* <h1 className="title">Embeltore Titanic</h1> */}
    </header>
  );
};

export default Header;
