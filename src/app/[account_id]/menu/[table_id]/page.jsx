'use client';
import React, { useState, useRef, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation';
import menuData from '../../../../scripts//menu.json';
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  CssBaseline,
} from '@mui/material';

// Example category data
const categories = Object.keys(menuData);
const classes = {};
categories.forEach((category) => {
  classes[category] = Object.keys(menuData[category]);
});

const menu = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categoryBarRef = useRef(null);

  const router = useRouter();

  const order = () => {
    router.push('/[account_id]/menu/[table_id]/order');
  };
  const bill = () => {
    router.push('/[account_id]/menu/[table_id]/bill');
  };
  const o_purchase = () => {
    router.push('/[account_id]/menu/[table_id]/purchase');
  };
  const handleChangeIndex = (index) => {
    setSelectedCategoryIndex(index);
  };

  const [cart, setCart] = useState([]);
  const addToCart = (productName, price) => {
    const newItem = { name: productName, price };
    setCart([...cart, newItem]);
  };

  const log = {};
  const handleProductClick = (productNamemenu, price) => {
    router.push(`/[account_id]/menu/[table_id]/${productNamemenu}`);
    addToCart(productName, price);
    log.append = productNamemenu;
    console.log(log);
  };

  const aspectRatio = 4 / 3;
  const paperWidth = 190;
  const paperHeight = paperWidth / aspectRatio;

  useEffect(() => {
    if (categoryBarRef.current) {
      const selectedButton = categoryBarRef.current.children[selectedCategoryIndex];
      if (selectedButton) {
        const buttonWidth = selectedButton.clientWidth;
        const scrollPosition = selectedButton.offsetLeft - (categoryBarRef.current.clientWidth / 2) + (buttonWidth / 2);
        categoryBarRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
      }
    }
  }, [selectedCategoryIndex]);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="default" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#ffffff' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2" color="inherit" component="div">
              テーブル番号
            </Typography>
            <Typography variant="h5" color="inherit">
              No.01
            </Typography>
          </Box>
          <Button
            color="inherit"
            onClick={o_purchase}
            sx={{ width: 80, mr: 1 }}>注文履歴
          </Button>
          <Button
            variant="contained"
            onClick={bill}
            sx={{
              width: 80,
              backgroundColor: '#f4b73f',
              boxShadow: 3,
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#f4b73f' } // クリック時の色変更を削除
            }}>
            お会計
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Box ref={categoryBarRef} sx={{ overflowX: 'auto', whiteSpace: 'nowrap', py: 2, px: 2, bgcolor: '#f4f4f4' }}>
        {categories.map((category, index) => (
          <Button
            key={category}
            onClick={() => handleChangeIndex(index)}
            sx={{ mx: 1, color: selectedCategoryIndex === index ? '#f4b73f' : 'inherit' }}>
            {category}
          </Button>
        ))}
      </Box>

      <SwipeableViews index={selectedCategoryIndex} onChangeIndex={handleChangeIndex} enableMouseEvents resistance loop>
        {categories.map((category, index) => (
          <Container key={category} maxWidth="sm" sx={{ mt: 4, mb: 10, px: 2 }}>
            <Grid container spacing={2}>
              {classes[category].map((subCategory) => (
                Object.entries(menuData[category][subCategory]).map(([itemName, itemDetails], itemIndex) => (
                  <Grid item xs={6} key={`${subCategory}-${itemName}`}>
                    <Paper
                      variant="outlined"
                      onClick={() => handleProductClick(itemName, itemDetails.price)} // 商品をクリックした際にハンドラを呼び出す
                      sx={{
                        width: `${paperWidth}px`,
                        height: `${paperHeight}px`,
                        overflow: 'hidden',
                        boxShadow: 3,
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h6">{itemName}</Typography>
                      <Typography variant="body2">価格: ¥{itemDetails.price}</Typography>
                    </Paper>
                  </Grid>
                ))
              ))}
            </Grid>
          </Container>
        ))}
      </SwipeableViews>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper', boxShadow: 3 }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
            <Typography variant="body1">注文数</Typography>
            <Button
              variant="contained"
              onClick={order}
              sx={{
                width: 100,
                backgroundColor: '#f4b73f',
                boxShadow: 3,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#f4b73f' } // クリック時の色変更を削除
              }}>
              注文確認
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default menu;