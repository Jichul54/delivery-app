import * as React from 'react';
import { arrayMoveImmutable } from 'array-move';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { IconButton, Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button, Typography, Collapse, Alert } from '@mui/material';
import AppBarDriver from '../../../components/AppBar_Driver';
import { Container, Draggable } from 'react-smooth-dnd';
import { MuiFileInput } from 'mui-file-input';
import { MyProxy } from '../../../api/proxy';
import CloseIcon from '@mui/icons-material/Close';
import { sendEmail } from '../../../api/send-email';


export default function RegisterItems() {

  // ログイン中のドライバーのid（セキュリティが心配）
  const driver_id = sessionStorage.getItem('user_id');
  console.log(driver_id);

  const [ items, setItems ] = React.useState([]); // 表示するリスト（ユーザーのデータと荷物の個数）
  const [ allOrders, setAllOrders ] = React.useState([]) // APIで取得する注文情報
  const [ postInfo, setPostInfo ] = React.useState([]); // POST用データ
  const [ status, setStatus ] = React.useState(true); // リストのドラッグの有無
  const [open, setOpen] = React.useState(false); // アラート表示の有無

  // 明日の日付取得
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tmrw = date.getFullYear().toString().padStart(4, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');
  console.log(tmrw);

  // すべての注文情報取得（最初のレンダリングのみ）
  React.useEffect(() => {
    let ignore = false;

    fetch(MyProxy + 'order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => {
      console.log(res.status) // 200
      return res.json()
    })
    .then((json) => {
      console.log(json);
      setAllOrders(json)
    })
    .catch(() => alert('error'));
    
    return () => {
      ignore = true;
    };
  }, []);

  // csv読み込み
  const [file, setFile] = React.useState(null);
  var reader = new FileReader();
  let order_ids = []; // csvファイルのorder_idのリスト
  let user_ids = []; // それぞれのユーザーと受け取る荷物のidのリスト（ユーザー情報取得用）
  let post_info = []; // apiで送る情報用

  // ファイル変更時
  const handleChange = (newFile) => {
    setFile(newFile);
    reader.readAsText(newFile);

    // order_idsを初期化
    order_ids = [];

    // csvファイル読み込み時
    reader.onload = () => {

      // order_idsに追加
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
        // お届け日が明日の時、リストに追加（念のため）
        // if (this_order.delivery_date === tmrw) {
        if (this_order.delivery_date === '2024-03-31') {
          // user_idsが空ではないとき
          if (user_ids.length !== 0) {
            const same_user = user_ids.find(({ user_id }) => user_id === this_order.user);
            const index = user_ids.findIndex(({ user_id }) => user_id === this_order.user);
            // user_idsに同じuser_idがないとき、新しいオブジェクト追加
            if (same_user === undefined) {
              user_ids.push({
                user_id: this_order.user,
                order_ids: [order_id]
              });
            // 一致するユーザーがあればorder_idのみ追加
            } else {
              user_ids[index].order_ids.push(order_id)
            }
          // ひとつめ
          } else {
            user_ids.push({
              user_id: this_order.user,
              order_ids: [order_id]
            });
          }
          // POST用データはorderごとに作成
          post_info.push({
            order: this_order.id,
            user: this_order.user,
            driver: driver_id
          });
        }
      }) // order_ids.forEach
      console.log('user_ids', user_ids)
      console.log('post_info', post_info);
      setPostInfo(post_info);

      let items_data = [];
      // ユーザー情報取得
      user_ids.forEach((user) => {
        fetch(MyProxy + 'user/' + user.user_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((res) => {
          console.log(res.status); // 200
          return res.json()
        })
        .then((json) => {
          console.log(json);
          items_data.push({
            user_id: user.user_id,
            name: json.username,
            address: json.address,
            email: json.email,
            orders: user.order_ids
          })
          console.log(items_data);
          setItems(items_data);
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
  const handleClick = async (postInfo, order_ids) => {
    console.log(items)
    postInfo.forEach((value) => {
      console.log(value);
      const index = items.findIndex(({ user_id }) => user_id === value.user)
      // const user_info = items.find(({ user_id }) => user_id === value.user)
      console.log(index);
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
      .then((res) => {
        console.log(res.status); // 201
        return res.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch(() => alert('error'))

      // メール送る
      sendEmail(value.order);
    });

    // リストの表示変更
    setStatus(false);

    // アラート表示
    setOpen(true);

    // メール送信API
    // let order_list = itemList[index].order_ids;
    // console.log(order_list);
    // const result = await sendEmail(order_list);
    // if (result) {
    //   // 成功時のロジック
    //   console.log('成功', result);
    // } else {
    //   // 失敗時のロジック
    //   console.log('失敗');
    // }

  }

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        {status ?
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
                {items.map(({ name, address, orders }, index) => (
                  <Draggable key={index}>
                    <ListItem
                      secondaryAction={
                        <IconButton edge='end' aria-label='drag-handle'>
                          <DragIndicatorIcon />
                        </IconButton>
                      }
                    >
                      <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
                      <ListItemText sx={{ flexGrow:1 }} primary={name + '  ' + orders.length + '個'} secondary={address} />
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
                onClick={() => handleClick(postInfo, order_ids)}
              >
                登録
              </Button>
            }
          </Stack>
        :
          <Box>
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
            <List sx={{ width:'100%' }}>
              {items.map(({ name, address, orders }, index) => (
                <ListItem key={ index }>
                  <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
                  <ListItemText sx={{ flexGrow:1 }} primary={name + '  ' + orders.length + '個'} secondary={address} />
                </ListItem>
              ))}
            </List>
          </Box>
        }
      </Box>
    </div>
  );
}