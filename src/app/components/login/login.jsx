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
import { postResponse } from '../../../scripts/response';
import Image from 'next/image';
import { redirect } from 'next/dist/server/api-utils';

export default function Checkout() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async() => {
    // フォームのデータを作成
    const data = {
      email: email,
      password: password,
    };
    const getResponse = await postResponse('/api/login', data);

    if (getResponse.account_id) {
      window.location.href = `/${getResponse.account_id}/home`;
    }else{
      alert('Email または Password が間違っています ');
    }
  };

  const handleClose = () => {
    setShowDialog(false);
  }

  return (
    <React.Fragment>
      <HomeToolBar/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" align="center" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Image src="/logo.png" alt="Picture of the author" width={200} height={200} style={{objectFit: "contain", paddingBottom: "10px"}}/>
          <Typography component="h1" variant="h4" align="center">
            ログイン
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
            ログイン
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                アカウントをお持ちでない方はこちら
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
