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
import { mainListItems } from '../../../components/listItems/listItems.jsx';
import Profit from '../../../components/profit/profit.jsx';
import ProfitPeek from '../../../components/profitPeek/profit.jsx';
import ProductPeek from '../../../components/profitPeek/product.jsx';

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

export default function ProfitPage() {
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
                Profit
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
                <Grid item xs={12} md={12} lg={12}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '50vh',
                    }}
                    >
                    <Typography variant="h6" component="h2" gutterBottom>
                        売上の推移
                    </Typography>
                    <Profit/>
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
                        利益ピークタイム
                    </Typography>
                    <ProfitPeek/>
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
                        売上数ピークタイム
                    </Typography>
                    <ProductPeek/>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
        </ThemeProvider>
    );
}