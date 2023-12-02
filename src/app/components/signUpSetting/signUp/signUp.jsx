// サインアップ入力画面のコンポーネント
// 初めての方に案内する方
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function SignUp() {
  return (
    <React.Fragment>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="accountName"
            name="accountName"
            label="アカウント名"
            fullWidth
            autoComplete="アカウント名"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="eamil"
            name="email"
            label="メールアドレス"
            fullWidth
            autoComplete="account.com"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password1"
            name="password1"
            label="パスワードの設定"
            fullWidth
            autoComplete="パスワードを入力"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password2"
            name="password2"
            label="パスワードの再入力"
            fullWidth
            autoComplete="パスワードを再入力"
            variant="standard"
          />
      </Grid>
    </React.Fragment>
  );
}
