import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Paper, Typography, StepLabel, Step, Stepper, Button, TextField, Stack, Select, InputLabel, MenuItem, FormControl, Backdrop, Dialog, DialogTitle, DialogActions } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const steps = ['配達物新規登録', '配達物確認', '配達物確定'];

export default function RegisteringPackages() {

  // 荷物の情報管理
  const [name, setName] = React.useState('');
  const [post_code, setPost_code] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [buildings, setBuildings] = React.useState('');

  // なまえの選択肢（とりあえず）
  const names_list = ['taro', 'yoko', 'marin'];

  // ステッパー設定
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // バックドロップとダイアログ
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  
  return (
    <div>
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
      </Box>
      <Box sx={{ display:'flex', mt:'60px', justifyContent:'center' }}>
        <Box sx={{ width:'75%' }}>
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
          {activeStep === 0 && 
            <Box sx={{ display:'flex', mt:'60px', justifyContent:'center' }}>
              <Box sx={{ width:'50%' }}>
                <Box sx={{ flexGrow:1 }}>
                  <Stack direction='column' spacing={2} sx={{ flexGrow:1 }}>
                    <Typography variant='h6' component='div' sx={{ flexGrow:1, textAlign:'center' }}>配達物新規登録</Typography>
                    <Stack direction='row' spacing={2}>
                      <TextField
                        id='post_code'
                        label='郵便番号'
                        size='medium'
                        sx={{ width:'100%'}}
                        value={ post_code }
                        required
                        onChange={(e) => setPost_code(e.target.value)}
                      />
                      <Button sx={{ width:'25%' }}>住所検索</Button>
                    </Stack>
                    <TextField
                      id='address1'
                      label='市町村'
                      size='medium'
                      value={ address1 }
                      required
                      onChange={(e) => setAddress1(e.target.value)}
                    />
                    <TextField
                      id='address2'
                      label='番地'
                      size='medium'
                      value={ address2 }
                      required
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                    <TextField
                      id='buildings'
                      label='マンション名'
                      size='medium'
                      value={ buildings }
                      required
                      onChange={(e) => setBuildings(e.target.value)}
                    />
                    <Stack direction='row' spacing={2}>
                      <FormControl fullWidth>
                        <InputLabel id='name-id'>名前</InputLabel>
                        <Select
                          labelId='name-id'
                          id='name'
                          label='名前'
                          sx={{ width:'100%' }}
                          value={ name }
                          required
                          onChange={(e) => setName(e.target.value)}
                        >
                          {names_list.map((value) => 
                          <MenuItem value={value}>{value}</MenuItem>
                        )}
                        </Select>
                      </FormControl>
                      <Button sx={{ width:'25%' }}>名前検索</Button>
                    </Stack>
                    <TextField 
                      id='order_info'
                      label='注文情報'
                      size='medium'
                      // value={  }
                      required
                      // onChange={  }
                    />
                    <Box sx={{ display:'flex', justifyContent:'center' }}>
                      <Button
                        size='large'
                        color='primary'
                        variant='contained'
                        onClick={handleNext}
                      >
                        登録
                      </Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          } {activeStep === 1 &&
            <Box sx={{ display:'flex', mt:'60px', justifyContent:'center' }}>
              <Box sx={{ width:'75%' }}>
                <Stack direction='column' spacing={2} sx={{ flexGrow:1 }}>
                  <Box sx={{ display:'flex', justifyContent:'center' }}>
                    <Button
                      size='large'
                      color='error'
                      variant='contained'
                      onClick={handleBack}
                    >
                      荷物を追加
                    </Button>
                  </Box>
                  <TextField />
                  <Box sx={{ display:'flex', justifyContent:'flex-end' }}>
                    <Button
                      size='large'
                      color='primary'
                      variant='contained'
                      onClick={handleOpen}
                    >
                      次へ
                    </Button>
                    <Backdrop 
                      sx={{ color:'black' }}
                      open={open}
                    >
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby='alert-dialog-title'
                        aria-describedby='alert-dialog-description'
                      >
                        <DialogTitle id='alert-dialog-title'>注文を確定します。よろしいですか？</DialogTitle>
                        <DialogActions>
                        <Button onClick={handleClose}>戻る</Button>
                        <Button onClick={handleClose} autoFocus>確定</Button>
                        </DialogActions>
                      </Dialog>
                    </Backdrop>
                  </Box>
                </Stack>
              </Box>
            </Box>
          } {activeStep === 2 &&
            <Box sx={{ display:'flex', mt:'60px', justifyContent:'center' }}></Box>
          }
        </Box>
      </Box>
    </div>
  );
}