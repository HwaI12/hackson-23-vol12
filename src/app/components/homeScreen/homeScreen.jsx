'use client';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import HomeToolBar from '../homeToolBar/homeToolBar';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const account_id = 'test';

export default function HomeScreen(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <HomeToolBar/>
          <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
            <Image src="/logo.png" alt="Picture of the author" width={300} height={300} />
            <Grid item xs={12} sm={12} sx={{display:'flex',alignItems:'center',justifyContent:'center',mb:2,p:1}}>
              <Typography variant="h4" component="div" sx={{display:'flex',alignItems:'center',mb:0,borderBottom:1}}>
                メニューを作成しましょう
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
              <Link href="/[account_id]/editmenu" as={`/${account_id}/editmenu`} passHref>
                <Button variant="contained" href='/account_id/editmenu' >メニューの編集</Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={12} sx={{display:'flex',alignItems:'center',justifyContent:'center',mb:2,p:1}}>
              <Typography variant="h4" component="div" sx={{display:'flex',alignItems:'center',mb:0,borderBottom:1}}>
                データを見ましょう
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
              <Button variant="outlined" >データを見る</Button>
            </Grid>
          
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
