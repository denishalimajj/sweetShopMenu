import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './MenuItem.css';


const MenuItem = ({ item }) => {
  return (
    <Card className="card"> 
      <CardMedia
        component="img"
        height="140"
        image={require(`${item.image}`)} 
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
      </CardContent>
    </Card>
  );
};

export default MenuItem;
