import * as React from 'react';
import { arrayMoveImmutable } from 'array-move';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button } from '@mui/material';
import AppBarDriver from '../../components/AppBar_Driver';
import { Container, Draggable } from 'react-smooth-dnd';
import './style.css';
import { MuiFileInput } from 'mui-file-input';

// export const ItemsData = React.createContext();

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

  const [ items, setItems ] = React.useState(item_list);

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
  const handleChange = (newFile) => {
    setFile(newFile);
    reader.readAsText(newFile);
    reader.onload = () => {
      console.log(reader.result);
      let result = reader.result.replace(/\r\n|\n|\r/g, ',').replace(/ /g, '').split(',');
      result.forEach(element => {
        order_ids.push(Number(element));
      });
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
  }

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column' spacing={2}>
          <MuiFileInput 
            value={file} 
            placeholder='ファイルを選択してください。' 
            inputProps={{ accept: '.csv' }} 
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