import React from 'react';
import MenuItem from './MenuItem';

import './Category.css';

const Category = ({ category, items, selectedCategory }) => {
    return (
      <div>
        <h2>{category}</h2>
        <div className="category-items">
          {items.map(item => {
            if (selectedCategory === category || selectedCategory === 'All') {
              return (
                <div key={item.id} className="category-item">
                  <div className="category-item-details">
                    <MenuItem item={item} /> 
                  </div>
                  
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  };
  

export default Category;
