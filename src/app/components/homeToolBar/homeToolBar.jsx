//ツールバー　いつも上につける
'use client';
import { useTheme } from '@emotion/react';
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
          <Image src="/logo.png" alt="logo" width={60} height={50} />
        </Toolbar>
      </AppBar>
  </React.Fragment>
)}
