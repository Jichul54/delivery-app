// import { useState } from "react";
import { TextField, Button, Card, CardHeader, CardContent, Container } from '@mui/material';

export const LoginForm = () => {

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // let username;
  // let password;

  return (
    <div className='Login'>
      <Container maxWidth='xs'>
          <Card variant='outlined' sx={{ p:2, my:25 }}>
            <CardHeader title='ログイン'/>
            <CardContent
              sx={{
                display: 'grid',
                gap: 2,
                gridTemplateRows: 'repeat(3, 1fr)'
              }}
            >
              <TextField
                id='username'
                label='ID'
                variant='outlined'
                size='medium'
                required
              />
              <TextField
                id='password'
                label='パスワード'
                variant='outlined'
                size='medium'
                required
              />
              <Button
                size='small'
                color='primary'
                variant='contained'
                sx={{ mx:10 }}
              >
                ログイン
              </Button>
            </CardContent>
          </Card>
        </Container>
    </div>
  );
}

export default LoginForm;