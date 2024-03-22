import * as React from 'react';
import { Box, Typography, Button, TextField, Stack, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import TopBar from '../../components/TopBar';
import StepperTop from '../../components/Stepper';
import { useNavigate } from 'react-router-dom';

export default function RegisterPackageInfo() {

  const navigate = useNavigate();

  // 荷物の情報管理
  const [name, setName] = React.useState('');
  const [post_code, setPost_code] = React.useState('');
  const [address1, setAddress1] = React.useState('');
  const [address2, setAddress2] = React.useState('');
  const [buildings, setBuildings] = React.useState('');

  // なまえの選択肢（とりあえず）
  const names_list = ['taro', 'yoko', 'marin'];
  
  return (
    <div>
      <TopBar />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center' }}>
        <Box sx={{ width:'75%' }}>
          <StepperTop activeStep={0} />
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
                        <MenuItem key={value} value={value}>{value}</MenuItem>
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
                      onClick={() => {navigate(`/check-package-info`)}}
                    >
                      登録
                    </Button>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}