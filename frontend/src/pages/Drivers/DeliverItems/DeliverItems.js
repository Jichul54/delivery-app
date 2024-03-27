import * as React from 'react';
import { Box, Stack, List, ListItem, ListItemText, ListItemAvatar, Button } from '@mui/material';
import AppBarDriver from '../../../components/AppBar_Driver';
import { useNavigate } from 'react-router-dom';
import { MyProxy } from '../../../api/proxy';

export default function DeliverItems() {

  const [ allOrders, setAllOrders ] = React.useState([])
  const [orders, setOrders ] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [itemList, setItemList] = React.useState([]);
  const [deliery, setDelivery] = React.useState(false);
  const navigate = useNavigate();


  // 全てのorder取得
  React.useEffect(() => {
    fetch(MyProxy + 'order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((json) => setAllOrders(json))
    .catch(() => alert('error'));
  }, [])

  // 配達物取得
  const params = { delivery_date:'2024-03-30'};
  const query = new URLSearchParams(params);
  React.useEffect(() => {
    fetch(MyProxy + 'delivery?' + query, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      setOrders(json.sort((a, b) => a.delivery_route_no > b.delivery_route_no ? 1 : -1 ));
      setStatus(Array(json.length).fill(''));
    })
    .catch(() => alert('error'));
  }, [])


  function StartDelivering(allOrders, orders) {
    let user_ids = [];
    orders.map(({ order }) => {
      // order_idが一致する商品を探す
      const this_order = allOrders.find(({ id }) => id === order );
      console.log(this_order);
      // user_idに同じuser_idがいない
      if (user_ids.length !== 0) {
        user_ids.map(({ user_id }, index) => {
          if (user_id !== this_order.user) {
            user_ids.push({
              user_id: user_id,
              order_ids: [this_order.id]
            })
          } else {
            user_ids[index].order_ids.push(this_order.id);
          }
        })
      // ひとつめ
      } else {
        user_ids.push({
          user_id: this_order.user,
          order_ids: [this_order.id]
        });
      }
    }) // order_ids.forEach

    // ユーザー情報取得
    // React.useEffect(() => {
      user_ids.map((user) => {
        fetch(MyProxy + 'user/' + user.user_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setItemList([...itemList, {
            user_id: user.user_id,
            name: json.username,
            address: json.address,
            email: json.email,
            order_ids: user.order_ids
          }])
        })
        .catch(() => alert('error'));
      })
    // }, [])
    setDelivery(true);
  }


  let email;
  // 完了ボタンクリック時
  const handleClickDelivered = (itemList, index) => {
    const newStatus = status.slice();
    newStatus[index] = 'delivered';
    setStatus(newStatus);
    console.log(itemList[index].email);

    if (itemList.length > index + 2) {
      email = itemList[index+2].email;
      console.log(email)
    }
    // メール送るAPI
  }

  // 不在ボタンクリック時
  const handleClickAbsent = (itemList, index) => {
    const newStatus = status.slice();
    newStatus[index] = 'absent';
    setStatus(newStatus);

    if (itemList.length > index + 2) {
      email = itemList[index+2].email;
      console.log(email)
    }
    // メール送るAPI
  }

  // 配達完了ボタンクリック時
  const handleClick = () => {
    navigate(`/delivery-completed`);
  }

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column' sx={{display:'flex', justifyContent:'center'}}>
          {!deliery && 
            <Box sx={{ px:'25%' }}>
            <Button
              size='large'
              variant='contained'
              onClick={() => {StartDelivering(allOrders, orders)}}
            >
              配送を開始する
            </Button>
          </Box>
          }
          {deliery &&
          <Stack direction='column' sx={{display:'flex', justifyContent:'center'}}>
          <List>
            {itemList.map(({ name, address, order_ids }, index) => (
              <ListItem key={'item' + index}>
                <ListItemAvatar sx={{ bgcolor:'white', color:'black' }}>{index+1}</ListItemAvatar>
                <ListItemText primary={name + '    ' + order_ids.length + '個'} secondary={address} />
                <Box sx={{ width: '200px', display:'flex', justifyContent:'center' }}>
                {status[index] === '' &&
                  <Stack direction='row' edge='end'>
                    <Button
                      variant='outlined'
                      onClick={() => handleClickDelivered(itemList, index)}
                    >
                      完了
                    </Button>
                    <Button
                      variant='outlined'
                      color='error'
                      onClick={() => handleClickAbsent(itemList, index)}
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
              <Button 
                variant='outlined'
                onClick={handleClick}
              >
                配達完了
              </Button>
            </Box>
          </Box>
          </Stack>
          }
        </Stack>
      </Box>
    </div>
  );
}