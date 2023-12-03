// 商品用のコンポーネント
// 引数：商品名、商品価格
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import HeightMenu_CommodityCard from '../../heightMenu/heightMenu_CommodityCard';
import HeightMenu_OptionCard from '../../heightMenu/heightMenu_OptionCard';

export default function AddSubCategoryCard(props) {
  const component = props.component;
  let dynamicComponent;
  if (component === '0') {
    dynamicComponent = <HeightMenu_CommodityCard />;
  } else {
    dynamicComponent = <HeightMenu_OptionCard />;
  }
  return(
      <Card sx={{ width:'20vw' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=""
            alt="menu image"
          />
        </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.menuName}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={10} sx={{display:'flex',alignItems:'center'}}>
                  <Typography variant="body2" color="text.secondary">
                    {props.menuPrice}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Box sx={{ display: 'flex',justifyContent:'flex-end'}}>
                    {dynamicComponent}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
      </Card>
  )
}
