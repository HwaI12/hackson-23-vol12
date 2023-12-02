// メニューを作成するページ
'use client';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import AddMainCategory from '../../components/addMainCategory/addMainCategory';
import AddSubCategory from '../../components/addSubCategory/addSubCategory';
import HomeToolBar from '../../components/homeToolBar/homeToolBar';
import PlusBox from '../../components/plusBox/plusBox';
import SpeedDialTools from '../../components/speedDialTools/speedDialTools';

export default function EditMenu() {
  
  return (
    <React.Fragment>
      <HomeToolBar/>
      <Grid container spacing={2} sx={{p:10,pt:5}}>
        <Grid item md={3} >
          <Box sx={{ display: 'flex', flexDirection: 'column', height:'86.3vh',p: 1, border:1, borderRadius:1,overflow:'auto'}}>
            <Card sx={{ display:'flex',maxWidth:'100vw',minHeight: '5vh',border:1,mb:1,borderRadius:0}}>
              <CardActionArea>
                <CardContent sx={{display:'flex',p:0}}>
                  <Box sx={{ p: 1}}>Option</Box>
                </CardContent>
              </CardActionArea>
            </Card>
            <PlusBox/>
            <AddMainCategory categoryName='Main Category1'/>
          </Box>
        </Grid>
        <Grid item md={9}>
          <Grid item xs={12}>
            <PlusBox/>
          </Grid>
          <Box sx={{ display: 'flex', flexDirection: 'column', height:'80vh', p: 1, mt:1, border:1, borderRadius:1, overflow:'auto'}}>
            <AddSubCategory categoryName='Sub Category1'/>
            <AddSubCategory categoryName='Sub Category2'/>
            <AddSubCategory categoryName='Sub Category2'/>
          </Box>
        </Grid>
        <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 3 }}>
          <SpeedDialTools/>
        </Box>
      </Grid>
    </React.Fragment>
  )
}
