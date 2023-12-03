//ツールバー　いつも上につける
'use client';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import React from 'react';

export const getDividerColor = (t) => {
  const Color = `1px solid ${t.palette}`;
  return { Color };
}

export default function HomeToolBar() {
  const theme = useTheme();
  const dividerColor = getDividerColor(theme);
  return(
  <React.Fragment>
    <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: dividerColor,
        }}
      >
        <Toolbar>
          <Image src="/logo.png" alt="Picture of the author" width={100} height={60} 	style={{objectFit: "contain"}}/>
          <Typography
            component="h1"
            variant="h4"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontFamily: 'Quantico', color: '#6D6D6D'}}>
            OrderStream
          </Typography>
        </Toolbar>
      </AppBar>
  </React.Fragment>
)}
