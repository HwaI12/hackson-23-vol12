'use client';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menubar from '../../../../components/menubar/menubar.jsx';
import { useRouter } from 'next/navigation';
import { Paper, Grid } from '@mui/material';

const bill = () => {

  const router = useRouter();

  const account_id = "3e24db21";
  const table_id = "01";

  const aspectRatio = 550 / 350;
  const paperWidth = (400 / 2) - (16 * 2);
  const paperHeight = paperWidth / aspectRatio;

  const orderMenu = [
    { title: '団子', imageUrl: '/images/dango.jpg', count: 3, price: 200 },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg', count: 2, price: 1100 },
    { title: 'トースト', imageUrl: '/images/toast.jpg', count: 2, price: 200 },
  ];

  const check = () => {
    router.push(`/${account_id}/menu/${table_id}/bill/check`);
  }

  return (
    <>
      <Menubar />
      <Box display="flex" flexDirection="column" alignItems="flex-start" minHeight="80vh">
        <CardContent sx={{ textAlign: 'center', marginTop: '100px' }}>
          {orderMenu.map((item, itemIndex) => (
            <Grid item key={itemIndex} sx={{ marginBottom: '20px', width: '100%', display: 'flex', alignItems: 'center' }}>
              <Paper
                variant="outlined"
                sx={{
                  width: `${paperWidth}px`,
                  height: `${paperHeight}px`,
                  overflow: 'hidden',
                  boxShadow: 3,
                  borderRadius: 2,
                  position: 'relative',
                  cursor: 'pointer',
                  marginRight: '20px', // 画像とテキストの間隔を調整
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
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'left',
                  marginLeft: '5px',
                }}
              >
                {item.title}
                <br />
                {item.price}円
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  position: 'fixed',
                  right: '50px',
                }}
              >
                <br />
                {item.count}個
              </Typography>
            </Grid>
          ))}
        </CardContent>
        <CardContent sx={{ textAlign: 'center', marginTop: '100px' }}>
          <Box sx={{ position: 'fixed', bottom: 30, left: 0, right: 0 }}>
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', marginBottom: '50px' }}
            >
              {/* 合計金額 */}
              合計金額：{orderMenu.reduce((sum, item) => sum + item.price * item.count, 0)}
            </Typography>
            <Button
              onClick={check}
              sx={{
                width: 350,
                backgroundColor: '#f4b73f',
                color: '#fff',
                boxShadow: 3,
                '&:hover': { backgroundColor: '#f4b73f' },
                // 文字の大きさを調整
                fontSize: '1.3rem', // 1.5remは例です。適切なサイズに調整してください。
              }}
            >
              お会計へ進む
            </Button>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default bill;