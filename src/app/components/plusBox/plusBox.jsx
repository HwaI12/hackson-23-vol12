import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

export default function PlusBox() {
  return(
    <Card sx={{ display:'flex',maxWidth:'100vw',minHeight: '5vh',border:1,mb:1}}>
      <CardActionArea>
        <CardContent sx={{display:'flex',alignItems:'center',justifyContent:'center',p:0}}>
        <Tooltip title="add main category">
          <AddIcon/>
        </Tooltip>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
