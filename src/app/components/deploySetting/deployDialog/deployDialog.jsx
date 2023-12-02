import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function DeployDialog() {
  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',p:5}}>
        <Grid item xs={6} sm={12}>
          <Typography gutterBottom variant="h6" component="div" sx={{display:'flex',alignItems:'center',justifyContent:'left',mb:0}}>
            テーブル数
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
              autoFocus
              margin="dense"
              id="menuName"
              label="テーブル数"
              type="number"
              fullWidth
              sx={{mt:1}}
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
