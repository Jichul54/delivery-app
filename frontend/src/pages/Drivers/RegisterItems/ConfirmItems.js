import * as React from 'react';
import { Box, Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AppBarDriver from "../../../components/AppBar_Driver";
import ItemList from '../../../components/ItemList';
import { useLocation } from 'react-router-dom';
import { MyProxy } from '../../../api/proxy';

export default function ConfirmItems() {

  const [open, setOpen] = React.useState(true);
  // const [itemList, setItemList] = React.useState([]);

  // fetch(MyProxy + 'user/' + user, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // })
  // .then((res) => res.json())
  // .then((json) => {
  //   console.log(json);
  //   setItems([...items, {
  //     user_id: user,
  //     name: json.username,
  //     address: json.address
  //   }])
  // })
  // .catch(() => alert('error'));
  

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
        {/* <ItemList item_list={ itemList } /> */}
      </Box>
    </div>
  )
}