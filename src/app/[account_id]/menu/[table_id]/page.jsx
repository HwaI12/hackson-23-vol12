'use client';
import React, { useState, useRef, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
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
const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];

// Example menu items for each category
const allMenuItems = {
  'Category 1': [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
  ],
  'Category 2': [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
  ],
  'Category 3': [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'ケチャップ', imageUrl: '/images/toast.jpg' },
  ],
  'Category 4': [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
  ],
  'Category 5': [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
  ],
};

const Page = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const categoryBarRef = useRef(null);

  const handleChangeIndex = (index) => {
    setSelectedCategoryIndex(index);
  };

  const aspectRatio = 500 / 350;
  const paperWidth = (600 / 2) - (16 * 2);
  const paperHeight = paperWidth / aspectRatio;

  useEffect(() => {
    if (categoryBarRef.current) {
      const selectedButton = categoryBarRef.current.children[selectedCategoryIndex];
      if (selectedButton) {
        const scrollPosition = selectedButton.offsetLeft + selectedButton.clientWidth / 2 - categoryBarRef.current.clientWidth / 2;
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
            sx={{ width: 80, mr: 1 }}>注文履歴
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 80,
              backgroundColor: '#f4b73f',
              '&:hover': { backgroundColor: '#d9a330' }
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

      <SwipeableViews index={selectedCategoryIndex} onChangeIndex={handleChangeIndex}>
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
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
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
            <Typography variant="body1">注文数</Typography>
            <Button
              variant="contained"
              sx={{
                width: 100,
                backgroundColor: '#f4b73f',
                '&:hover': { backgroundColor: '#d9a330' }
              }}>
              注文確認
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Page;