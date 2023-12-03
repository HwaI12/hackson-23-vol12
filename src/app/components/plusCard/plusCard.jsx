import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

export default function PlusCard() {
  return(
    <Grid item md={3} >
      <Card sx={{ display:'flex',alignItems:'center',justifyContent:'center', width:'20vw',minHeight:'15vh'}}>
        <CardActionArea sx={{maxWidth: 345, height:1}}>
          <CardContent sx={{textAlign:'center'}}>
            <Tooltip title="add menu">
              <AddIcon/>
            </Tooltip>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
