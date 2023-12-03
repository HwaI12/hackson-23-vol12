import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href='/account_id/analyze'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary= "DashBoard" />
    </ListItemButton>
    <ListItemButton href='/account_id/analyze/profit'>
      <ListItemIcon>
        <LocalAtmIcon />
      </ListItemIcon>
      <ListItemText primary="利益" />
    </ListItemButton>
    <ListItemButton href="/account_id/analyze/sales">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="売上" />
    </ListItemButton>
    <ListItemButton href="/account_id/analyze/correlation">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="相関" />
    </ListItemButton>
  </React.Fragment>
);
