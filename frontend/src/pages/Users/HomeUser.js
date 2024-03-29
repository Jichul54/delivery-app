import * as React from 'react';
 import { AppBar, Paper, Toolbar, Typography, Box, List, ListItem, Stack, ListItemAvatar, Avatar, ListItemText, Button, Backdrop, Dialog, DialogTitle, DialogActions, DialogContent, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import { MyProxy } from '../../api/proxy';

 export default function HomeUser() {

   // あとで変更する
   const user_id = 1;

   const [ userInfo, setUserInfo ] = React.useState(null); // ログインユーザーの情報
   const [ myOrders, setMyOrders ] = React.useState(null); // orderテーブルの中の自分のorder
   const [ delivery, setDelivery ] = React.useState(null); // 配達テーブルの中の日付が明日のもの
   const [ myDelivery, setMyDelivery ] = React.useState(null); // 明日自分に届く配達物
   const [ status, setStatus ] = React.useState(true); // 確認ボタンがいるかどうか
   const [ itemStatus, setItemStatus ] = React.useState(null) // 受け取りボタンがいるかどうか
   const [ open, setOpen ] = React.useState(false); // バックドロップとダイアログ
   const [ checkingItem, setCheckingItem ] = React.useState(null); // ダイアログで開いてるorder
   const [ selectOpen, setSelectOpen ] = React.useState(false); // 日付選択のダイアログ
   const [ selectedDate, setSelectedDate ] = React.useState(''); // 選択された日付
   const [ noDelivery, setNoDelivery ] = React.useState(false); // 配達物がないとき

   // 明日の日付取得
   const date = new Date();
   date.setDate(date.getDate() + 1);
   const tmrw = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
   let date_list = [];
   for (let i=2; i<8; i++) {
     const new_date = new Date();
     new_date.setDate(new_date.getDate() + i);
     date_list.push(new_date.getFullYear() + '-' + (new_date.getMonth() + 1) + '-' + new_date.getDate())
    //  console.log(date_list);
   };

   // ユーザーの情報取得
   React.useEffect(() => {
     fetch(MyProxy + 'user/' + user_id, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
       }
     })
     .then((res) => res.json())
     .then((json) => {
       console.log(json);
       setUserInfo(json);
     })
     .catch(() => alert('error'));
   }, [])

   // 注文情報取得
   React.useEffect(() => {
     fetch(MyProxy + 'order', {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json',
       }
     })
     .then((res) => res.json())
     .then((json) => {
       console.log(json);
       const myItems = json.filter((order) => order.user === user_id);
       setMyOrders(myItems);
     })
     .catch(() => alert('error'));
   }, []);

   // 配送情報取得
   const params = { delivery_date:'2024-03-30', user:1 };
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
       setDelivery(json);
     })
     .catch(() => alert('error'));
   }, [])

   // 確認ボタンクリック時（リストを表示）
   const handleConfirm = () => {
     let myItems = [];
     myOrders.forEach(({ id }) => {
       const myItem = delivery.find(({ order }) => order === id);
       if (myItem !== undefined) {
         myItems.push(myItem);
       }
     })
     console.log(myItems);
     if (myItems.length === 0) {
       alert('明日配達する荷物はありません。');
       setNoDelivery(true);
     }
     setMyDelivery(myItems);
     setItemStatus(Array(myItems.length).fill(true));
     setStatus(false);
   }

   // 荷物の受け取り確認
   const handleCheck = (delivery, index) => {
     console.log(delivery);

     // ダイアログ表示
     setOpen(true);

     // ダイアログで見たい情報
     setCheckingItem({delivery: delivery, index: index});
   }

   // ダイアログが閉じるとき
   const handleClose = () => {
     setOpen(false);
   }
   const handleSelectClose = () => {
     setSelectOpen(false);
   }

   // 荷物受け取りが不可能
   const handleCancel = () => {
     setOpen(false);
     setSelectOpen(true);
   }

   // 荷物受け取りが可能
   const handleRecieve = (checkingItem, itemStatus) => {
     console.log(checkingItem.delivery);
     // APIで更新

     // 受け取り確認ボタン非表示
     let newItemStatus = itemStatus.slice();
     newItemStatus[checkingItem.index] = false;
     setItemStatus(newItemStatus);

     setOpen(false);
   }

   // 日付確定時
   const handleSelectDate = (checkingItem, myDelivery, itemStatus, selectedDate,  myOrders) => {
    // 日時が選択されてないとき
    if (selectedDate === '') {
      alert('日付を選択してください。');
      return;
    }

    // myDelivery更新
    const newMyDelivery = myDelivery.slice();
    newMyDelivery.splice(checkingItem.index, 1)
    console.log(newMyDelivery);
    setMyDelivery(newMyDelivery);
    setSelectOpen(false);

    // 受け取り確認ボタン非表示
    let newItemStatus = itemStatus.slice();
    newItemStatus[checkingItem.index] = false;
    setItemStatus(newItemStatus);

    // API更新
    const body = myOrders.find(({ id }) => id === checkingItem.delivery.order)
    body.delivery_date = selectedDate;
    console.log(body);
    fetch(MyProxy + 'order/' + checkingItem.delivery.order, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then((res) => {
      console.log(res.status)
      return res.json()
    }).then((json) => {console.log(json)})
    .catch(() => alert('error'));

    // 注文情報がないとき
    setNoDelivery(true);
   }


   return (
     <div>
       <AppBar component='nav'>
         <Paper elevation={2}>
           <Toolbar>
             <Typography variant='body1' component='div' sx={{ flexGrow:1 }}>
               モジャモdjango
             </Typography>
             {userInfo &&
             <List>
               <ListItem key='user_info'>
                 <ListItemAvatar>
                   <Avatar>
                     <AccountCircleIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText primary={ userInfo.username } secondary={ userInfo.post_code + '  ' + userInfo.address} />
               </ListItem>
             </List>
           }
           </Toolbar>
         </Paper>
       </AppBar>
       <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', px:'40%' }}>
         <Stack direction='column' sx={{display:'flex', justifyContent:'center', flexGrow:1 }}>
           {status ?
             <Button
               variant='outlined'
               sx={{ width: '100%' }}
               onClick={handleConfirm}
             >
               明日届く荷物を確認する
             </Button>
             :
             <List sx={{ width:'100%' }}>
               {myDelivery.map((delivery, index) => (
                 <Box key={index}>
                   {itemStatus[index] ?
                     <ListItem
                       key={'before' + delivery.id}
                       sx={{ width:'100%' }}
                       secondaryAction = {
                         <Button 
                           edge="end"
                           variant='contained'
                           onClick={() => handleCheck(delivery, index, itemStatus)}
                         >
                           受け取り確認
                         </Button>
                       }
                     >
                       <ListItemText primary={'注文番号：' + delivery.order} />
                     </ListItem>
                     : 
                     <ListItem key={'after' + delivery.id}>
                       <ListItemText primary={'注文番号：' + delivery.order} />
                     </ListItem>
                   }
                 </Box>
               ))}
             </List>
           }
         </Stack>
         {noDelivery &&
          <Typography>明日配達する荷物はありません。</Typography>
         }
         <Backdrop 
           sx={{ color:'black' }}
           open={open}
         >
           <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby='alert-dialog-title'
           >
             <DialogTitle id='alert-dialog-title'>明日、荷物の受け取りが可能ですか？</DialogTitle>
             <DialogActions>
               <Button onClick={handleCancel}>いいえ</Button>
               <Button onClick={() => {handleRecieve(checkingItem, itemStatus)}} autoFocus>はい</Button>
             </DialogActions>
           </Dialog>
           <Dialog
             open={selectOpen}
             onClose={handleSelectClose}
             aria-labelledby='alert-dialog-title'
           >
             <DialogTitle id='alert-dialog-title'>受け取り可能な日付を選択してください。</DialogTitle>
             <DialogContent>
               <FormControl fullWidth sx={{ m: 1}}>
                 <InputLabel id='date'>日付</InputLabel>
                 <Select
                   labelId='date-id'
                   id='date'
                   label='日付'
                   sx={{ width:'100%' }}
                   value={ selectedDate }
                   onChange={(e) => setSelectedDate(e.target.value)}
                 >
                   {date_list.map((date) => 
                     <MenuItem key={date} value={date}>{date}</MenuItem>
                   )}
                 </Select>
               </FormControl>
             </DialogContent>
             <DialogActions>
               <Button onClick={() => setSelectOpen(false)}>キャンセル</Button>
               <Button onClick={() => {handleSelectDate(checkingItem, myDelivery, itemStatus, selectedDate, myOrders)}} autoFocus>確定</Button>
             </DialogActions>
           </Dialog>
         </Backdrop>
       </Box>
     </div>
   )
 } 