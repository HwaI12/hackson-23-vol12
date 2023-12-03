import React from 'react';
import { Paper, Typography } from '@mui/material';

const MenuItemComponent = ({ item }) => {
  if (!item) {
    console.error('MenuItemComponent: item is undefined');
    return null; // または適当な代替コンテンツを表示
  }
  return (
    <Paper
      variant="outlined"
      sx={{
        cursor: 'pointer',
        margin: 2,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onClick={() => addToCart(item)}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        style={{ width: '100%', height: 'auto' }}
      />
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        {item.title}
      </Typography>
    </Paper>
  );
};

export default MenuItemComponent;
