import React from 'react';
import MenuItem from './MenuItem';
import './Category.css';

const Category = ({ category, items, selectedCategory }) => {
  // Check if items is undefined before attempting to map over it
  if (!items) {
    return null; // Return null if items is undefined
  }

  return (
    <div>
      <h2 className="category-title">{category}</h2> 
      <div className="category-items">
        {items.map(item => (
          <div key={item.id} className="category-item">
            <div className="category-item-details">
              <MenuItem item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
