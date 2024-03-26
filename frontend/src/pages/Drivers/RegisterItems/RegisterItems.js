import * as React from 'react';
import { arrayMoveImmutable } from 'array-move';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button, Typography } from '@mui/material';
import AppBarDriver from '../../../components/AppBar_Driver';
import { Container, Draggable } from 'react-smooth-dnd';
import { MuiFileInput } from 'mui-file-input';
import { useNavigate } from 'react-router-dom';
import { getOrders } from '../../../api/get-orders';


const item_list = [];

export default function RegisterItems() {

  const navigate = useNavigate();
  const [ items, setItems ] = React.useState([]);

  // 注文情報取得
  const all_orders = getOrders();
  if (all_orders) {
    console.log(all_orders);
  } else {
    console.log('no order');
  }

  // ユーザー情報取得

  // 配達物リストの順番変更時
  const onDrop = ({ removedIndex, addedIndex }) => {
    const newItems = arrayMoveImmutable(items, removedIndex, addedIndex);
    setItems(newItems);
    console.log(newItems);
  }

  // csv読み込み
  const [file, setFile] = React.useState(null);
  var reader = new FileReader();
  let order_ids = []; // order_idのリスト
  let user_ids = []; // user_idのリスト
  const handleChange = (newFile) => {
    setFile(newFile);
    reader.readAsText(newFile);

    // csvファイル読み込み時
    reader.onload = () => {
      let result = reader.result.replace(/\r\n|\n|\r/g, ',').replace(/ /g, '').split(',');
      result.forEach(element => {
        order_ids.push(Number(element));
      });
      // order_idの配列
      console.log(order_ids);

      // 注文情報から該当するユーザーを検索
      order_ids.forEach(id => {
        const this_order = all_orders.find(order => order.id === id);
        user_ids.push(this_order.user_id);
      })

    }
  }

  // バックエンドに送る配列
  let api_items = [];
  // 登録ボタン押下時
  const handleClick = () => {
    items.forEach((value, index) => {
      api_items.push({
        order_id: value.order_id,
        delivery_route_no: index
      })
      console.log(api_items);
    })

    // 確認画面へ遷移
    navigate(`/confirm-items`);
  }

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column'>
          <Typography>ファイル選択</Typography>
          <MuiFileInput 
            value={file} 
            placeholder='ファイルを選択してください。' 
            inputProps={{ accept: '.csv' }} 
            sx={{ mb:2 }}
            onChange={handleChange} 
          />
          <List sx={{ width:'100%' }}>
            <Container dragHandleSelecter='.drag-handle' lockAxis='y' onDrop={onDrop}>
              {items.map(({ name, address }, index) => (
                <Draggable key={index}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge='end' aria-label='drag-handle'>
                        <DragIndicatorIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
                    <ListItemText sx={{ flexGrow:1 }} primary={name} secondary={address} />
                  </ListItem>
                </Draggable>
              ))}
            </Container>
          </List>
          {items.length > 0 &&
            <Button
              size='large'
              color='primary'
              variant='contained'
              onClick={handleClick}
            >
              登録
            </Button>
          }
        </Stack>
      </Box>
    </div>
  );
}