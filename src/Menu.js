import React, { useState } from 'react';
import Category from './Category';
import menuData from './assets/all.json'; 
import './Menu.css'; // Import your CSS file
import ClickableLinkChips from './ClickableLinkChips'; // Import the ClickableLinkChips component

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const groupedMenuData = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-buttons-container"> 
        <div className="menu-buttons">
          <ClickableLinkChips handleCategorySelection={handleCategorySelection} />
        </div>
      </div>
      {Object.entries(groupedMenuData).map(([category, item]) => (
        <Category key={category} category={category} items={item} selectedCategory={selectedCategory} />
      ))}
    </div>
  );
};

export default Menu;
