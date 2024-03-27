import * as React from 'react';
import { arrayMoveImmutable } from 'array-move';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button, Typography, useScrollTrigger } from '@mui/material';
import AppBarDriver from '../../../components/AppBar_Driver';
import { Container, Draggable } from 'react-smooth-dnd';
import { MuiFileInput } from 'mui-file-input';
import { json, useNavigate } from 'react-router-dom';
import { MyProxy } from '../../../api/proxy';
import { postDelivery } from '../../../api/post-delivery';


export default function RegisterItems() {

  const driver_id = sessionStorage.getItem('user_id')
  console.log(driver_id);

  const navigate = useNavigate();
  const [ items, setItems ] = React.useState([]); // 最終的に表示するitems
  const [ allOrders, setAllOrders ] = React.useState([]) // APIで取得する注文情報
  const [ postInfo, setPostInfo ] = React.useState([]);
  const [ finalData, setFinalData ] = React.useState([]);

  // 明日の日付取得
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tmrw = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  // console.log(tmrw);

  // 注文情報取得（まだ取得してなかったら取得）
  React.useEffect(() => {
    let ignore = false;

    fetch(MyProxy + 'order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((json) => setAllOrders(json))
    .catch(() => alert('error'));
    
    return () => {
      ignore = true;
    };
  }, []);

  // csv読み込み
  const [file, setFile] = React.useState(null);
  var reader = new FileReader();
  let order_ids = []; // csvファイルのorder_idのリスト
  let user_ids = [];
  let post_info = []; // apiで送る情報
  const handleChange = (newFile) => {
    setFile(newFile);
    reader.readAsText(newFile);

    // csvファイル読み込み時
    reader.onload = () => {
      let result = reader.result.replace(/\r\n|\n|\r/g, ',').replace(/ /g, '').split(',');
      console.log(result);
      result.forEach(element => {
        order_ids.push(Number(element));
      });

      // 注文情報から該当するユーザーを検索
      order_ids.map((order_id) => {
        // order_idが一致する商品を探す
        console.log(order_id);
        const this_order = allOrders.find(({ id }) => id === order_id );
        console.log(this_order);
        // user_idに同じuser_idがいない
        if (user_ids.length !== 0) {
          user_ids.forEach((user) => {
            if (user !== this_order.user) {
              user_ids.push(this_order.user);
            }
          })
        // ひとつめ
        } else {
          user_ids.push(this_order.user);
        }
        post_info.push({
          order: this_order.id,
          user: this_order.user,
          driver: driver_id
        });
      }) // order_ids.forEach
      console.log('user_ids', user_ids)
      console.log('post_info', post_info);
      setPostInfo(post_info);

      // ユーザー情報取得
      user_ids.forEach((user) => {
        fetch(MyProxy + 'user/' + user, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setItems([...items, {
            user_id: user,
            name: json.username,
            address: json.address,
            email: json.email
          }])
        })
        .catch(() => alert('error'));
      })
    }
  }

  // 配達物リストの順番変更時
  const onDrop = ({ removedIndex, addedIndex }) => {
    const newItems = arrayMoveImmutable(items, removedIndex, addedIndex);
    setItems(newItems);
    console.log(newItems);
  }

  // 登録ボタン押下時
  const handleClick = (postInfo, items) => {
    console.log(items)
    postInfo.forEach((value) => {
      console.log(value);
      const index = items.findIndex(({ user_id }) => user_id === value.user)
      const user_info = items.find(({ user_id }) => user_id === value.user)
      console.log(index);
      console.log(value);
      fetch(MyProxy + 'delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: value.driver,
          order: value.order,
          delivery_route_no: index + 1
        })
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setFinalData([...finalData, {
          order_id: json.order,
          name: items.name,
          address: items.address
        }]);
      })
      .catch(() => alert('error'))
    });
    let emails = [];
    items.forEach(({ email }) => emails.push(email))
    console.log(emails);

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
              onClick={() => handleClick(postInfo, items)}
            >
              登録
            </Button>
          }
        </Stack>
      </Box>
    </div>
  );
}