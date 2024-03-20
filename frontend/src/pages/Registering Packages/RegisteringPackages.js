import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Paper, Typography, StepLabel, Step, Stepper, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const steps = ['配達担当者選択', '配達物新規登録', '配達物確認', '配達物確定'];

export default function RegisteringPackages() {

  // ステッパー設定
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNewPackage = () => {
    setActiveStep(0);
  };
  
  return (
    <Box sx={{ flexGrow:1 }}>
      <AppBar position='static'>
        <Paper elevation={2}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inehrit'
              aria-label='menu'
              sx={{ mr:2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='body1' component='div' sx={{ flexGrow:1 }}>
              モジャモdjango
            </Typography>
            <Typography variant='body1' component='div'>
              ログインユーザー名
            </Typography>
          </Toolbar>
        </Paper>
      </AppBar>
      <Box sx={{ width:'100%', pt:'10px' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            console.log(label, index);

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mt:2, mb:1 }}>
              荷物のリスト表示
            </Typography>
            <Button onClick={handleNewPackage}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography sx={{ mt:2, mb:1 }}>Step { activeStep + 1 }</Typography>
            <Box sx={{ display:'flex', flexDirection:'row', pt:2 }}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr:1 }}
              >
                戻る
              </Button>
              <Box sx={{ flex:'1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length -1 ? 'finish' : 'next'}
              </Button>
            </Box>
          </div>
        )}
      </Box>
    </Box>
  );
}