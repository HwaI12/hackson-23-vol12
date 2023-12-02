import ClearIcon from '@mui/icons-material/Clear';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { DialogActions, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
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


export default function OptionDialog({ open, handleClose }) {
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
    <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
      <Grid container spacing={2} sx={{p:2}} >
        <Grid item xs={6} sm={6}>
          <DialogTitle>Option</DialogTitle>
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display:'flex',justifyContent:'right', alignItems:'center',p:2}}>
          <ClearIcon onClick={handleClose}/>
        </Grid>
      </Grid>
      <DialogContent>
        <Grid container spacing={2} sx={{display:'flex',p:2,justifyContent:'center'}}>
          <Grid item xs={12} sm={12}>
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
        </Grid>
        <Grid container spacing={2} sx={{display:'flex',p:2,justifyContent:'center'}}>
          <Grid item xs={12} sm={12}>
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
        <Grid container spacing={2} sx={{display:'flex',p:2,justifyContent:'center'}}>
          <Grid item xs={12} sm={12}>
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
