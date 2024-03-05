import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating'; 
import './MenuItem.css'; 


const MenuItem = ({ item }) => {
  const [rating, setRating] = useState(item.rating); 

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);

  };

  const imagePath = require(`${item.image}`).default;

  return (
    <Card className="card"> {/* Add the 'card' class */}
      <CardMedia
        component="img"
        height="140"
        image={imagePath}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${item.price}
        </Typography>
        <Rating
          name={`rating-${item.id}`} 
          value={rating} 
          onChange={handleRatingChange} 
        />
      </CardContent>
    </Card>
  );
};

export default MenuItem;
