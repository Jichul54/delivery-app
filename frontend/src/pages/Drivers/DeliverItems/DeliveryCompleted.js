import * as React from 'react';
import AppBarDriver from '../../../components/AppBar_Driver';
import { Box, Alert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function DeliveryCompleted() {

  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Box sx={{ width:'75%' }}>
          <Collapse in={open}>
            <Alert 
              variant="filled" 
              action={
                <IconButton
                  aria-label='close'
                  color='inherit'
                  size='small'
                  onClick={() => {setOpen(false)}}
                >
                  <CloseIcon fontSize='inherit' />
                </IconButton>
              }
              sx={{ mb:2 }}
            >
              配達が完了しました。
            </Alert>
          </Collapse>
        </Box>
      </Box>
    </div>
  )
}