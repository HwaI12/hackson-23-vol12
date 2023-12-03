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

export default function HomeScreen(props) {
  const account_id = props.id;

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
      <HomeToolBar/>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1568031813264-d394c5d474b9?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
            <Image src="/logo.png" alt="Picture of the author" width={300} height={300} style={{objectFit: "contain"}}/>
            <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
                <Button variant="contained" href={`/${account_id}/editmenu`} sx={{paddingTop:"20px", paddingBottom:"20px", paddingRight:"30px", paddingLeft:"30px"}}>
                  メニューの作成
                </Button>
            </Grid>
            <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
              <Button href={`/${account_id}/analyze`} variant="contained" sx={{paddingTop:"20px", paddingBottom:"20px", paddingRight:"30px", paddingLeft:"30px"}}>
                データを見る
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center',alignItems:'center',mb:5}}>
              <Button href="/login" variant="outlined" sx={{paddingTop:"20px", paddingBottom:"20px", paddingRight:"30px", paddingLeft:"30px"}}>
                ログアウト
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
