import * as React from 'react';
import { Box, Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBarDriver from "../../../components/AppBar_Driver";
import ItemList from '../../../components/ItemList';

export default function ConfirmItems() {

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
              登録が完了しました。
            </Alert>
          </Collapse>
        </Box>
      </Box>
      <Box sx={{ display:'flex', justifyContent:'center', flexGrow:1 }}>
        <ItemList />
      </Box>
    </div>
  )
}