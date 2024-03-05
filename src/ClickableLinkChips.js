import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CakeIcon from '@mui/icons-material/Cake';
import IcecreamIcon from '@mui/icons-material/Icecream';

const ClickableLinkChips = ({ handleCategorySelection }) => {
  const categories = [
    { label: 'All'},
    { label: 'Cakes', icon: <CakeIcon /> },
    { label: 'Pastries', icon: <IcecreamIcon /> }
  ]; 

  return (
    <Stack direction="row" spacing={1}>
      {categories.map((category) => (
        <Chip
          key={category.label}
          label={category.label}
          icon={category.icon} 
          onClick={() => handleCategorySelection(category.label)}
          clickable
        />
      ))}
    </Stack>
  );
}

export default ClickableLinkChips;
