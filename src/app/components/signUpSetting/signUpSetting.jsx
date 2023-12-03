// 初めての人に案内するページ　最初の設定をお手伝いするコンポーネント
'use client';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import HomeToolBar from '../homeToolBar/homeToolBar';
import SignUp from './signUp/signUp';


export default function SignUpSetting() {

  return (
    <React.Fragment>
      <HomeToolBar/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            アカウント登録
          </Typography>
          <Container maxWidth="sm" sx={{ mb: 4 }}>
            <SignUp  />
          </Container>
          <Grid container>
            <Grid item xs>
              
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
} 
