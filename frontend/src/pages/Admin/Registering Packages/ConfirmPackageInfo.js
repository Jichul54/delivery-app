import * as React from 'react';
import { Box, Card, CardHeader, CardContent, Stack, Typography, Divider, Avatar, Button } from '@mui/material';
import AppBarAdmin from '../../../components/AppBar_Admin';
import StepperTop from '../../../components/Stepper';
import { useNavigate } from 'react-router-dom';

export default function ConfirmPackageInfo() {

  const navigate = useNavigate();

  // 名前と住所リスト
  const packages = [
    {username: 'taro1', address: 'address1', package:'package1'}, 
    {username: 'taro2', address: 'address2', package:'package2'},
    {username: 'taro3', address: 'address3', package:'package3'}
  ]

  return (
    <div>
      <AppBarAdmin />
      <Box sx={{ display:'flex', mt:'120px', mb:'60px', justifyContent:'center' }}>
      <Box sx={{ width:'75%' }}>
        <StepperTop activeStep={2} />
        <Box sx={{ display:'flex', mt:'60px', justifyContent:'center' }}>
          <Box sx={{ width:'75%' }}>
            <Stack direction='column' spacing={2} sx={{ flexGrow:1 }}>
              <Card>
                <CardHeader title='配達担当者' />
                <Divider />
                <CardContent>
                  <Stack direction='column' spacing={2} sx={{ width:'100%' }}>
                    {packages.map((value, index) =>
                      <Stack direction='column' spacing={1} key={'package' + index}>
                        <Stack direction='row' spacing={2}>
                          <Avatar sx={{ bgcolor:'white', color:'black', py:'7px' }}>{index + 1}</Avatar>
                          <Stack direction='column'>
                            <Typography variant='body1'>{value.username}</Typography>
                            <Typography variant='caption'>{value.address}</Typography>
                            <Typography variant='caption'>{value.package}</Typography>
                          </Stack>
                        </Stack>
                        {index < packages.length - 1 &&
                          <Divider/>                        
                        }
                        </Stack>
                    )}
                  </Stack>
                </CardContent>
              </Card>
              <Box sx={{ display:'flex', justifyContent:'center' }}>
                <Button
                  size='large'
                  color='primary'
                  variant='contained'
                  onClick={() => navigate(`/home`)}
                >
                  ホーム
                </Button>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
      </Box>
    </div>
  );
}