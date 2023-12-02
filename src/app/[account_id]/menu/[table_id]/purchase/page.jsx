'use client';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Menubar from '../../../../components/menubar/menubar.jsx';

const purchase = () => {

  return (
    <>
      <Menubar />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CardContent sx={{ textAlign: 'center' }}>
          <Box sx={{ position: 'fixed', bottom: 30, left: 0, right: 0}}>
            {/* ここに履歴を表示 */}
          </Box>
        </CardContent>
      </Box>
    </>
  );
};

export default purchase;
