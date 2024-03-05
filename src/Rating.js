// Rating.js
import React from 'react';

const Rating = ({ rating }) => {
  // Assuming the rating is out of 5 stars
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;
