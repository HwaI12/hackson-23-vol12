import ClearIcon from '@mui/icons-material/Clear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { styled, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, optionName, theme) {
  return {
    fontWeight:
      optionName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function ProductDialog({ open, handleClose }) {
  const options = [
    {
      value: 1,
      label: 'option1',
    },
    {
      value: 2,
      label: 'option2',
    },
    {
      value: 3,
      label: 'option3',
    },
    {
      value: 4,
      label: 'option4',
    },
  ];

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const theme = useTheme();
  const [optionName, setOptionName] = React.useState([]);
  const [image, setImage] = useState(null);

  const handleChangeOption = (event) => {
    const {
      target: { value },
    } = event;
    setOptionName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // 画像データを読み込んで処理する
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Dialog fullWidth={true} maxWidth={'md'} open={open} onClose={handleClose}>
      <Grid container spacing={2} sx={{p:2}} >
        <Grid item xs={6} sm={6}>
          <DialogTitle>Product</DialogTitle>
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display:'flex',justifyContent:'right', alignItems:'center',p:2}}>
          <ClearIcon onClick={handleClose}/>
        </Grid>
      </Grid>
      <DialogContent>
        <Grid container spacing={4} sx={{p:2}}>
          <Grid item xs={6} sm={6}>
            <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
              商品名
            </Typography>
            <TextField
                autoFocus
                margin="dense"
                id="menuName"
                label="商品名"
                type="text"
                fullWidth
                sx={{mt:1}}
              />
          </Grid>
          <Grid item xs={6} sm={6}>
          <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
              オプション
            </Typography>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
              <Select
                sx={{ m:0 }}
                id="selectOption"
                multiple
                variant='standard'
                value={optionName}
                onChange={handleChangeOption}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5,m:0 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.label}
                    style={getStyles(option.label, optionName, theme)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{p:2}}>
          <Grid item xs={6} sm={6}>
            <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
              価格
            </Typography>
            <TextField
                autoFocus
                margin="dense"
                id="menuValue"
                label="価格"
                type="number"
                fullWidth
                sx={{mt:1}}
              />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{p:2}}>
          <Grid item xs={6} sm={6}>
            <Typography gutterBottom variant="h6" component="div" sx={{mb:0}}>
              プレビュー画像
            </Typography>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>

            {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
          </Grid>
        </Grid>
      </DialogContent>
      <Grid container spacing={2} sx={{display:'flex',p:2,justifyContent:'right',alignItems:'centers'}}>
        <DialogActions>
          <Button variant='contained' onClick={handleClose}>OK</Button>
        </DialogActions>
      </Grid>
    </Dialog>
  );
}
