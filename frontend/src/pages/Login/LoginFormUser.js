import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { buttonOnClick } from '../../functions/functions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoginFormUser() {

  const navigate = useNavigate();
  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='Login_user'>
      <Container maxWidth='xs'>
        <Card variant='outlined' sx={{ p:2, mt:25, mb:20 }}>
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
              onClick={(e) => setUser_id(e.target.value)}
            />
            <TextField 
              id='password' 
              label='パスワード'
              size='medium'
              value={ password }
              required
              onClick={(e) => setPassword(e.target.value)}
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
            <Button
              size='small'
              sx={{ height:'50%' }}
              onClick={() => {navigate('/createAccount')}}
            >
              アカウントをお持ちでない方
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}