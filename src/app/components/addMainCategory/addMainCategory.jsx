// メインカテゴリー(一層目カテゴリー)を追加するコンポーネント

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import HeightMenu_Main_Sub from '../heightMenu/heightMenu_Main_Sub';

export default function AddMainCategory(props) {
  return (
    <>
      <Card sx={{ display:'flex',maxWidth:'100vw',minHeight: '5vh',border:1,mb:1,borderRadius:0}}>
        <CardActionArea>
          <CardContent sx={{display:'flex',p:0}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: 1}}>{props.categoryName}</Box>
          </CardContent>
        </CardActionArea>
        <Grid item xs={2}>
          <HeightMenu_Main_Sub/>
        </Grid>
      </Card>
    </>
  )
}
