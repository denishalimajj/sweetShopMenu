import React, { useState } from 'react';
import Category from './Category';
import menuData from './assets/all.json'; 
import './Menu.css'; // Import your CSS file

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const groupedMenuData = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-buttons-container"> 
        <div className="menu-buttons">
          <button className="menu-button" onClick={() => setSelectedCategory('All')}>All</button>
          <button className="menu-button" onClick={() => setSelectedCategory('Cakes')}>Cakes</button>
          <button className="menu-button" onClick={() => setSelectedCategory('Pastries')}>Pastries</button>
        </div>
      </div>
      {Object.entries(groupedMenuData).map(([category, item]) => (
        <Category key={category} category={category} items={item} selectedCategory={selectedCategory} />
      ))}
    </div>
  );
};

export default Menu;
