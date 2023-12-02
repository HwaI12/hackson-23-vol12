'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export default function Menubar() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };
  
  return (
    <AppBar position="fixed" color="default" sx={{ top: 0, left: 0, right: 0, backgroundColor: '#ffffff' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center', // Center vertically
            flexGrow: 1,
          }}
        >
          <img
            src="/images/caret-left.png"
            alt="logo"
            onClick={handleBack}
            style={{ width: '40px', height: '40px' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}