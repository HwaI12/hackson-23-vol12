'use client';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menubar from '../../../../components/menubar/menubar.jsx';
import { useRouter } from 'next/navigation';

const order = () => {

  const router = useRouter();
  const menu = () => {
    router.push('/${account_id}/menu/${table_id}');
  };

  return (
    <>
      <Menubar />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CardContent sx={{ textAlign: 'center' }}>
          <Box sx={{ position: 'fixed', bottom: 30, left: 0, right: 0}}>
            <Button
              variant="contained"
              onClick={menu}
              sx={{
                width: 350,
                backgroundColor: '#f4b73f',
                boxShadow: 3,
                '&:hover': { backgroundColor: '#f4b73f' } // クリック時の色変更を削除
              }}>
              注文確定
            </Button>
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default order;
