import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  // Dynamically import the image based on the item's image property
  const image = require(`./assets/${item.image}`).default;

  return (
    <div className="menu-item">
      <div className="menu-item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
      <div className="menu-item-image">
        <img src={image} alt={item.name} />
      </div>
    </div>
  );
};

export default MenuItem;
