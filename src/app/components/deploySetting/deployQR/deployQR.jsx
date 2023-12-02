import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

export default function DeployQR() {
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',p:5}}>
        <Grid item xs={6} sm={12}>
          <Typography gutterBottom variant="h6" component="div" sx={{display:'flex',alignItems:'center',justifyContent:'left',mb:0}}>
            QRコードを生成しました
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} sx={{display:'flex',justifyContent:'center'}}>
          <Button variant='outlined'>Download</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
