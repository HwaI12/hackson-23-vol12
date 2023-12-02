// ダイヤルのコンポーネント
import PaletteIcon from '@mui/icons-material/Palette';
import QrCodeIcon from '@mui/icons-material/QrCode';
import SaveIcon from '@mui/icons-material/Save';
import SettingsIcon from '@mui/icons-material/Settings';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import * as React from 'react';

const actions = [
  { icon: <QrCodeIcon />, name: 'Deploy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PaletteIcon />, name: 'BaseColor' },
];

export default function SpeedDialTools() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<SettingsIcon/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}