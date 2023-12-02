// メニューバーのコンポーネント
// 3つの点が並んだアイコンを押すと、メニューが表示される
// 引数:メニューの項目(props.options、配列)
'use client';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import OptionDialog from '../optionDialog/optionDialog';

const ITEM_HEIGHT = 48;

export default function HeightMenu_OptionCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const options = ['編集','削除'];
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (option) => {
    switch (option) {
      case '編集':
        return setDialogOpen(true);
      case '削除':
        return console.log('Delete clicked');
      default:
        throw new Error('Unknown step');
    }
    handleClose();
  };
  
  const handleClose = () => {
    setAnchorEl(null);
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
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={()=>handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <OptionDialog open={dialogOpen} handleClose={() => {
        setDialogOpen(false);
        handleClose();}} />
    </div>
  );
}
