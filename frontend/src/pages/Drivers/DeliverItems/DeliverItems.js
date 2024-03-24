import * as React from 'react';
import { arrayMoveImmutable } from 'array-move';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button } from '@mui/material';
// import AppBarDriver from '../../../components/AppBar_Driver';
import { Container, Draggable } from 'react-smooth-dnd';
// import './../style.css';
import { MuiFileInput } from 'mui-file-input';
import AppBarDriver from '../../../components/AppBar_Driver';


const item_list = [
  {
    order_id: 1,
    name: '佐藤',
    address: '福岡市博多区山王・・・・・・・・'
  },
  {
    order_id: 2,
    name: '田中',
    address: '福岡市中央区・・・・・・・・'
  },
  {
    order_id: 4,
    name: '山崎',
    address: '福岡市西区・・・・・・・・'
  }
]

export default function DeliverItems() {
  
  const [status, setStatus] = React.useState(Array(item_list.length).fill(''));

  const handleClickDelivered = (index) => {
    const newStatus = status.slice();
    newStatus[index] = 'delivered';
    setStatus(newStatus);
  }
  const handleClickAbsent = (index) => {
    const newStatus = status.slice();
    newStatus[index] = 'absent';
    setStatus(newStatus);
  }

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column' sx={{display:'flex', justifyContent:'center'}}>
          <List>
            {item_list.map(({ name, address }, index) => (
              <ListItem key={'item' + index}>
                <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
                <ListItemText primary={name} secondary={address} />
                <Box sx={{ width: '200px', display:'flex', justifyContent:'center' }}>
                {status[index] === '' &&
                  <Stack direction='row' edge='end'>
                    <Button
                      variant='outlined'
                      onClick={() => handleClickDelivered(index)}
                    >
                      完了
                    </Button>
                    <Button
                      variant='outlined'
                      color='error'
                      onClick={() => handleClickAbsent(index)}
                    >
                      不在
                    </Button>
                  </Stack>
                } {
                  status[index] === 'delivered' &&
                  <Button
                    variant='contained'
                  >
                    完了
                  </Button>
                } {
                  status[index] === 'absent' &&
                  <Button
                    color='error'
                    variant='contained'
                  >
                    不在
                  </Button>
                }
                </Box>
              </ListItem>
            ))}
          </List>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{ width: '100px' }}>
              <Button variant='outlined'>配達完了</Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}