// サブカテゴリー(二層目カテゴリー)追加のコンポーネント
// 引数: カテゴリー名
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AddSubCategoryCard from '../addSubCategory/addSubCategoryCard/addSubCategoryCard';
import HeightMenu_Main_Sub from '../heightMenu/heightMenu_Main_Sub';
import PlusCard from '../plusCard/plusCard';

export default function AddMainCategory(props) {
  const OptionMenuSub = ['編集','前に移動','後に移動','最前に移動','最後に移動','削除'];
  return (
    <>
      <Grid container spacing={2} sx={{p:1}}>
        <Grid item xs={12}>
          <Card sx={{ display:'flex',maxWidth:'100vw',minHeight: '5vh',border:1,borderRadius:0}}>
            <CardActionArea>
              <CardContent sx={{display:'flex', p:0}}>
                <Box sx={{ p: 1}}>{props.categoryName}</Box>
              </CardContent>
            </CardActionArea>
            <Grid item xs={2}>
              <Box sx={{ display: 'flex',justifyContent:'flex-end'}}>
                <HeightMenu_Main_Sub/>
              </Box>
            </Grid>
          </Card>
        </Grid>
        <AddSubCategoryCard menuName='Menu Name' menuPrice='100円' component='0'/>
          <PlusCard/>
      </Grid>
    </>
  )
}
