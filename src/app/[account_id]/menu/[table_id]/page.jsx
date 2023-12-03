'use client';
import React, { useState, useRef, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useRouter } from 'next/navigation'; // useRouter のインポートを修正
import MenuItemComponent from '../../../components/menuitem/menuitem.jsx';
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
// import item from './[title]/page';

// Example category data
const categories = ['ランチ', 'ディナー', 'サラダ', 'デザート', 'ドリンク'];

// Example menu items for each category
const allMenuItems = {
  'ランチ': [
    { title: '〇〇ハンバーグ', imageUrl: '/images/hambarger.jpg' },
    { title: '〇〇ハンバーグ', imageUrl: '/images/hambarger2.jpg' },
    { title: '〇〇ハンバーグ', imageUrl: '/images/hamberger.jpg' },
    { title: 'お肉とご飯', imageUrl: '/images/28286192_s.jpg' },
  ],
  'ディナー': [
    { title: 'もうすぐ', imageUrl: '/images/duck-2957809_1280.jpg' },
    { title: 'クリスマス', imageUrl: '/images/meatloaf-3747129_1280.jpg' },
    { title: 'ジングルベル', imageUrl: '/images/pizza-5275191_1280.jpg' },
    { title: 'ジングルベル', imageUrl: '/images/cake1.jpg' },
    { title: '鈴が', imageUrl: '/images/christmas-dinner-3011500_1280.jpg' },
    { title: 'なる〜', imageUrl: '/images/toast.jpg' },
  ],
  'サラダ': [
    { title: '草', imageUrl: '/images/cilantro-1287301_1280.jpg' },
    { title: '草', imageUrl: '/images/cilantro-1287301_1280.jpg' },
    { title: '草', imageUrl: '/images/cilantro-1287301_1280.jpg' },
    { title: '草', imageUrl: '/images/cilantro-1287301_1280.jpg' },
  ],
  'デザート': [
    { title: 'ケーキ', imageUrl: '/images/cake2.jpg' },
    { title: 'ケーキ', imageUrl: '/images/cake1.jpg' },
  ],
  'ドリンク': [
    { title: 'ビール', imageUrl: '/images/beer.jpg' },
    { title: 'カフェオレ', imageUrl: '/images/coffee.jpg' },
    { title: 'ココア', imageUrl: '/images/cocoa.jpg' },
    { title: 'ココア？', imageUrl: '/images/cocoa.jpg' },
  ],
};

const account_id = "3e24db21";
const table_id = "01";

const menu = () => {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categoryBarRef = useRef(null);

  const [orderCart, setOrderCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);


  const addToCart = (item) => {
    setOrderCart(currentItems => [...currentItems, item]);
  };

  const confirmOrder = () => {
    setOrderHistory(currentOrderHistory => [
      ...currentOrderHistory,
      ...orderCart
    ]);
    setOrderCart([]);
  };

  const cartItemCount = orderCart.length;


  const router = useRouter();

  const order = () => {
    router.push(`/${account_id}/menu/${table_id}/order`);
  };
  const bill = () => {
    router.push(`/${account_id}/menu/${table_id}/bill`);
  };
  const o_purchase = () => {
    router.push(`/${account_id}/menu/${table_id}/purchase`);
  };
  const itemoption = (title) => {
    router.push(`/${account_id}/menu/${table_id}/${title}`);
  };


  const handleChangeIndex = (index) => {
    setSelectedCategoryIndex(index);
  };

  const aspectRatio = 500 / 350;
  const paperWidth = (550 / 2) - (16 * 2);
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
            sx={{ width: 80, mr: 1 }}>
            注文履歴
          </Button>
          <Button
            variant="contained"
            onClick={bill}
            sx={{
              width: 80,
              backgroundColor: '#f4b73f',
              boxShadow: 3,
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#f4b73f' }
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
              {allMenuItems[category].map((item, itemIndex) => (
                <Grid item xs={6} key={itemIndex} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      width: `${paperWidth}px`,
                      height: `${paperHeight}px`,
                      overflow: 'hidden',
                      boxShadow: 3,
                      borderRadius: 2,
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    onClick={() => addToCart(item)} // アイテムをカートに追加
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '80%',
                        objectFit: 'cover',
                      }}
                    />
                    {/* Centered title within the Paper */}
                    <Typography
                      variant="body2"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        textAlign: 'center',
                        padding: '5px',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        ))}
      </SwipeableViews>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: 'background.paper', boxShadow: 3 }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
            <Typography variant="body1">注文数: {cartItemCount}</Typography>
            <Button
              variant="contained"
              onClick={order}
              sx={{
                width: 100,
                backgroundColor: '#f4b73f',
                boxShadow: 3,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#f4b73f' }
              }}>
              注文確認
            </Button>
          </Box>
        </Container>
      </Box>
      <MenuItemComponent confirmOrder={confirmOrder} />
    </>
  );
}

export default menu;