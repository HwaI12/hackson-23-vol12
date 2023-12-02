// メニューバーのコンポーネント
// 3つの点が並んだアイコンを押すと、メニューが表示される
// 引数:メニューの項目(props.options、配列)
'use client';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

const ITEM_HEIGHT = 48;

export default function HeightMenu_Main_Sub() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const options = ['名前の変更','上に移動','下に移動','最上位に移動','最下位に移動','削除'];
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSelect = (option) => {
    switch (option) {
      case '名前の変更':
        return console.log('Change Name clicked');
      case '上に移動':
        return console.log('Move Forward clicked');
      case '下に移動':
        return console.log('Move Down clicked');
      case '最上位に移動':
        return console.log('Move to Top clicked');
      case '最下位に移動':
        return console.log('Move to Bottom clicked');
      case '削除':
        return console.log('Delete clicked');
      default:
        throw new Error('Unknown step');
    }
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
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={()=>handleSelect}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
