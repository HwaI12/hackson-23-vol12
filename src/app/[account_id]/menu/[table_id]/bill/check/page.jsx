import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const bill = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh"> {/* 画面の中央に配置 */}
        <CardContent sx={{ textAlign: 'center' }}>
          <img src="/images/thx.png" alt="Thank You" style={{ maxWidth: '100%' }} />
          <Typography variant="h5" component="div" sx={{ mt: 2 }}>
            レジへおすすみください
          </Typography>
          <Typography variant="body1">
            ご利用ありがとうございました
            <br />
            またのお越しをお待ちしています
          </Typography>
        </CardContent>
    </Box>
  );
};

export default bill;