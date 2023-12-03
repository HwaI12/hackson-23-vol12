// サインアップ入力画面のコンポーネント
// 初めての方に案内する方
import { Dialog } from '@mui/material';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { postResponse } from '../../../../scripts/response';


export default function SignUp() {
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [showDialog , setShowDialog] = useState(false);
  const [response, setResponse] = useState('');

  const handleClose = () => {
    setShowDialog(false);
  }

  const handleInputChange = async(inputName, value) => {
    // ボタンを押したときのみstateを更新する
    if (inputName === 'register') {
      if (!accountName || !email || !password || !password2) {
        // 入力されていない項目がある場合はエラーを設定
        alert('入力されていない項目があります');
        return;
      }    
      if (password !== password2) {
        setPasswordError(true);
        alert('パスワードが一致しません');
        return;
      } else {
        setPasswordError(false);
        const data =  { name:accountName, email:email,password:password };
        const getResponse = await postResponse('/api/register', data);
        setResponse(getResponse.account_id);
        console.log(response);
        if (getResponse.account_id === false) {
          alert('そのメールアドレスは登録済みです');
        }else{
          setShowDialog(true);
        }
      }
    }

    switch (inputName) {
      case 'accountName':
        setAccountName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'password2':
        setPassword2(value);
        break;
      default:
        break;
    }
  };

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
          value={accountName}
          onChange={(e) => handleInputChange('accountName', e.target.value)}
        />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="メールアドレス"
            fullWidth
            autoComplete="account.com"
            variant="standard"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            label="パスワードの設定"
            fullWidth
            autoComplete="パスワードを入力"
            variant="standard"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
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
            value={password2}
            onChange={(e) => handleInputChange('password2', e.target.value)}
            error={passwordError}
          helperText={passwordError ? 'パスワードが一致しません' : ''}
          />
      </Grid>
      <Grid container spacing={2} sx={{display:'flex',justifyContent:'space-between',mt:3}}>
        <Grid item xs={6} sx={{display:'flex',justifyContent:'left',mt:3}}>
          <Link href="/login" variant="body2">
            ログインはこちら
          </Link>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'right',mt:3}}>
          <Button variant='contained' onClick={() => handleInputChange('register')}>登録</Button>
        </Grid>
      </Grid>
      <Dialog fullWidth={true} maxWidth={'sm'} open={showDialog}>
        <DialogTitle>アカウント登録が完了しました</DialogTitle>
        <Button variant='contained' href={`/${response}/home`} onClick={handleClose}>ホーム画面へ</Button>
      </Dialog>
    </React.Fragment>
  );
}
