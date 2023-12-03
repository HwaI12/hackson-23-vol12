'use client';
import React from 'react';
import Link from 'next/link'; // Link コンポーネントをインポート
import { useRouter } from 'next/navigation';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menubar from '../../../../components/menubar/menubar.jsx';
import { Grid, Paper, Typography } from '@mui/material';

const order = ({ confirmOrder }) => {
  const router = useRouter();

  const account_id = "3e24db21";
  const table_id = "01";

  const aspectRatio = 550 / 350;
  const paperWidth = (400 / 2) - (16 * 2);
  const paperHeight = paperWidth / aspectRatio;

  const orderMenu = [
    { title: '団子', imageUrl: '/images/dango.jpg' },
    { title: 'パンケーキ', imageUrl: '/images/pancake.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' },
    { title: 'トースト', imageUrl: '/images/toast.jpg' }
  ];

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
                variant="body2"
                sx={{
                  marginLeft: '10px', // item.titleとの間隔を調整
                }}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
          <Box sx={{ position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
            <Link href={`/${account_id}/menu/${table_id}`} passHref>
              <Button
                variant="contained"
                onClick={confirmOrder}
                sx={{
                  width: 350,
                  backgroundColor: '#f4b73f',
                  boxShadow: 3,
                  '&:hover': { backgroundColor: '#f4b73f' },
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                注文確定
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default order;
