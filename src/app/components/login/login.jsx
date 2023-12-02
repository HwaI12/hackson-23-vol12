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
import { useState } from 'react';
import HomeToolBar from '../homeToolBar/homeToolBar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { postResponse } from '../../../scripts/response';
import Image from 'next/image';


export default function Checkout() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');
  const [showDialog , setShowDialog] = useState(false);

  const handleSubmit = async() => {
    // フォームのデータを作成
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    const getResponse = await postResponse('/api/login', data);

    setResponse(getResponse.account_id);

    if (getResponse.account_id === false) {
      alert('Email または Password が間違っています ');
    }else{
      setShowDialog(true);
    }
  };

  const handleClose = () => {
    setShowDialog(false);
  }

  return (
    <React.Fragment>
      <HomeToolBar/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Grid container spacing={3} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Image src="/logo.png" alt="Picture of the author" width={50} height={50}/>
          </Grid>
          <Typography component="h1" variant="h4" align="center">
            Log In
          </Typography>
          <React.Fragment>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Email"
                  name="Email"
                  label=" Email"
                  fullWidth
                  autoComplete="Email"
                  variant="standard"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Paper>
        <Dialog fullWidth={true} maxWidth={'sm'} open={showDialog}>
          <DialogTitle>登録完了</DialogTitle>
          <Button variant='contained' href={`/${response}/home`} onClick={handleClose}>ログイン画面へ</Button>
        </Dialog>
      </Container>
    </React.Fragment>
  );
}
