import * as React from 'react';
import AppBarAdmin from '../../../components/AppBar_Admin';
import { Avatar, Box, Card, CardContent, CardHeader, Divider, Stack, Typography, Button } from '@mui/material';

export default function CheckAdmin() {

  const data = [
    {
      driver: 'driver1',
      items: [
      {
        name: 'taro',
        address: 'address1',
        package: 'package1'
      },
      {
        name: 'taro2',
        address: 'address2',
        package: 'package2'
      },
      {
        name: 'taro3',
        address: 'address3',
        package: 'package3'
      }
      ]
    },
    {
      driver: 'driver2',
      items: [
      {
        name: 'taro',
        address: 'address1',
        package: 'package1'
      },
      {
        name: 'taro2',
        address: 'address2',
        package: 'package2'
      },
      {
        name: 'taro3',
        address: 'address3',
        package: 'package3'
      }
      ]
    }
  ]
  
  return (
    <div>
      <AppBarAdmin />
      <Box sx={{ display:'flex', mt:'120px', mb:'60px', justifyContent:'center' }}>
        <Box sx={{ width: '75%' }}>
          <Stack direction='column' spacing={2} sx={{ flexGrow:1 }}>
            <Card>
              <CardHeader title='配達予定の荷物' />
              <Divider />
              <CardContent>
                <Stack direction='column' spacing={2} sx={{ flexGrow:1 }}>
                  {data.map((value, index) => 
                    <Stack direction='column' spacing={1} key={value.driver}>
                      <Stack direction='row' spacing={2}>
                        <Avatar sx={{ bgcolor:'white', color:'black' }}>{index + 1}</Avatar>
                        <Typography variant='body1' sx={{ flexGrow:1, py:'8px' }}>{value.driver}</Typography>
                        <Button
                          size='medium'
                          color='primary'
                        >確認</Button>
                      </Stack>
                      {index < data.length - 1 &&
                        <Divider/>                        
                      }
                    </Stack>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
    </div>
  );

}