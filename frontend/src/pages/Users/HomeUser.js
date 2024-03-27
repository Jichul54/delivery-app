import * as React from 'react';
import { AppBar, Paper, Toolbar, Typography, Box, List, ListItem, Stack, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HomeUser() {

  const user_id = 1;

  const [ userInfo, setUserInfo ] = React.useState(null);

  const MyProxy = 'http://localhost:8080/';
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
      // setUserInfo({
      //   user_id: user,
      //   name: json.username,
      //   address: json.address,
      //   email: json.email
      // })
    })
    .catch(() => alert('error'));
  })

  return (
    <div>
      <AppBar component='nav'>
        <Paper elevation={2}>
          <Toolbar>
            <Typography variant='body1' component='div'>
              モジャモdjango
            </Typography>
          </Toolbar>
        </Paper>
      </AppBar>
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column' sx={{display:'flex', justifyContent:'center'}}>
          <List>
            <ListItem key='user_info'>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='名前' secondary={
                <Stack direction='column' spacing={2}>
                  <Typography>郵便番号</Typography>
                  <Typography>住所</Typography>
                </Stack>
              } />
            </ListItem>
          </List>
        </Stack>
      </Box>
    </div>
  )
}