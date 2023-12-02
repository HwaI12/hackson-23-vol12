// メニューバーのコンポーネント
// 3つの点が並んだアイコンを押すと、メニューが表示される
// 引数:メニューの項目(props.options、配列)
'use client';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ProductDialog from '../productDialog/productDialog';

const ITEM_HEIGHT = 48;

export default function HeightMenu_CommodityCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const options = ['編集', '後に移動', '前に移動', '最後に移動', '最前に移動', '削除'];
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    switch (option) {
      case '編集':
        return setDialogOpen(true);
      case '後に移動':
        return console.log('Move Forward clicked');
      case '前に移動':
        return console.log('Move Down clicked');
      case '最後に移動':
        return console.log('Move to Top clicked');
      case '最前に移動':
        return console.log('Move to Bottom clicked');
      case '削除':
        return console.log('Delete clicked');
      default:
        throw new Error('Unknown step');
    }
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <ProductDialog open={dialogOpen} handleClose={() =>{
        setDialogOpen(false);
        handleClose();
      }} />
    </div>
  );
}
