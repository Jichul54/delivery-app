// import { useState } from "react";
import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { buttonOnClick } from '../../functions/functions';

export default function LoginFormDriver() {

  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='Login_diver'>
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
              id='user_id' 
              label='ID' 
              size='medium'
              value={ user_id }
              required
              onChange={(e) => setUser_id(e.target.value)}
            />
            <TextField 
              id='password' 
              label='パスワード'
              size='medium'
              value={ password }
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              size='small'
              color='primary'
              variant='contained'
              sx={{ mx:10 }}
              onClick={() => buttonOnClick(userInfo, document)}
            >
              ログイン
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}