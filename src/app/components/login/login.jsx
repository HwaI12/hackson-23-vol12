// ログイン画面の中身を記述するコンポーネント
'use client';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import HomeToolBar from '../homeToolBar/homeToolBar';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function handleSubmit(e){
  console.log(e.currentTarget);
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  console.log(data);
}

export default function Checkout() {

  return (
    <React.Fragment>
      <HomeToolBar/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Log In
          </Typography>
          <React.Fragment>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  length="10"
                  id="accountName"
                  name="accountName"
                  label="アカウント名 or Email"
                  fullWidth
                  autoComplete="アカウント名"
                  variant="standard"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  length="16"
                  id="password1"
                  name="password1"
                  label="パスワード"
                  fullWidth
                  autoComplete="パスワードを入力"
                  variant="standard"
                />
              </Grid>
          </React.Fragment>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
