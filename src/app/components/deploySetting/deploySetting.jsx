// デプロイ設定コンポーネント
'use client';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import DeployDialog from './deployDialog/deployDialog';
import DeployQR from './deployQR/deployQR';

const steps = ['テーブル設定', 'ダウンロード'];

function getStepContent(step) {

  switch (step) {
    case 0:
      return <DeployDialog />;
    case 1:
      return <DeployQR />;
    // case 2:
    //   return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function DeployDialogSetting(props) {
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    if(activeStep !== steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  console.log(typeof props.handleClose);
  console.log(props.open);

  return (
    <Dialog fullWidth={true} maxWidth={'sm'} open={props.open}>
      <Grid container spacing={2} sx={{display:'flex',justifyContent:'center',p:2}} >
        <Grid item xs={6} sm={6}>
          <DialogTitle>Deploy</DialogTitle>
        </Grid>
        <Grid item xs={6} sm={6} sx={{ display:'flex',justifyContent:'right', alignItems:'center',p:2}}>
          <IconButton aria-label="clear" onClick={()=>props.handleClose()}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
      <React.Fragment>
        <Stepper activeStep={activeStep} sx={{ p:5,pt:0,pb:2 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </React.Fragment>
      <Grid container spacing={2} sx={{display:'flex',p:2,justifyContent:'center'}}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                エラー？
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  href = {activeStep === steps.length - 1 ? '/[account_id]/editmenu' : undefined}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Home' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
      </Grid>
    </Dialog>
  );
}
