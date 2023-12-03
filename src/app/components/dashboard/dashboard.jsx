'use client';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import * as React from 'react';
import { mainListItems } from '../listItems/listItems.jsx';

import TodaySales from '../profitPeek/today.jsx';
import LogTable from '../profitPeek/logtable.jsx';
import Sales from '../sales/sales.jsx';
import Correl from '../collel/collel.jsx';
import { borderBottom, fontSize } from '@mui/system';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={true}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
              <MenuIcon />
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, paddingLeft: "20%", fontFamily: 'Quantico'}}
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50vh',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} lg={6}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        本日の売上
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                      <Typography textAlign={"right"}>
                        <span style={{fontSize:"15px"}}>前日との差：</span><strong style={{fontSize:"25px"}}>-16%</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                  <TodaySales/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50vh',
                  }}
                >
                  <Typography variant="h6" component="h2" gutterBottom>
                    会計ログ
                  </Typography>
                  <LogTable/>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50vh',
                  }}
                >
                  <Typography variant="h6" component="h2" gutterBottom>
                    商品別の売上（top5）
                  </Typography>
                  <Sales/>
                </Paper>
              </Grid>
              <Grid item xs={6} md={6} lg={6}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '50vh',
                  }}
                >
                  <Typography variant="h6" component="h2" gutterBottom>
                    売上と商品の相関
                  </Typography>
                  <Correl/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
