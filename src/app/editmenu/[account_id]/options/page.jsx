// オプション一覧画面のコンポーネント
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import AddSubCategoryCard from '../../../components/addSubCategory/addSubCategoryCard/addSubCategoryCard';
import HomeToolBar from '../../../components/homeToolBar/homeToolBar';
import PlusCard from '../../../components/plusCard/plusCard';

export default function Options() {
  const OptionMenu = ['編集','削除'];
  return (
    <React.Fragment>
      <HomeToolBar/>
      <Grid container spacing={2} sx={{p:10,pb:5,pt:5}}>
        <Grid item md={3} >
          <Box sx={{ p: 1,border:1}}>Option</Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{p:10,pb:5,pt:5}}>
        <AddSubCategoryCard menuName='Sub Category1' menuPrice='100円' optionMenu={OptionMenu}/>
        <AddSubCategoryCard menuName='Sub Category1' menuPrice='100円' optionMenu={OptionMenu}/>
        <PlusCard/>
      </Grid>
    </React.Fragment>
  )
}
