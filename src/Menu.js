import React, { useState } from 'react';
import Category from './Category';
import menuData from './assets/all.json'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './Menu.css'; // Import your CSS file

const images = [
  {
    url: 'https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_4087-er-new1-720x910.jpg',
    title: 'Cakes',
    width: '100%',
  },
  {
    url: 'https://www.cookingclassy.com/wp-content/uploads/2016/05/puff_pastry_fruit_tarts_ricotta_cream_filling13.-500x500.jpg',
    title: 'Pastries',
    width: '100%',
  },
  {
    url: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/11/Cold-Lemonade-Mojito-Cocktail-500x375.jpg',
    title: 'Drinks',
    width: '100%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Initially, no category is selected
  
  const groupedMenuData = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Add the 'All' category to the groupedMenuData object
  groupedMenuData['All'] = menuData;

  const handleCategorySelection = (category) => {
    setSelectedCategory(category === 'All' ? null : category); // If 'All' is selected, set selectedCategory to null
  }

  return (
    <div className="menu">
      <div className="menu-header">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-buttons-container"> 
        <div className="menu-buttons">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                }}
                onClick={() => handleCategorySelection(image.title)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </Box>
        </div>
      </div>
      {selectedCategory && (
        <Category category={selectedCategory} items={groupedMenuData[selectedCategory]} />
      )}
    </div>
  );
};

export default Menu;
