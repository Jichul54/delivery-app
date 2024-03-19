import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postUserLoginInfo } from '../../api/login-users';

export default function LoginFormUser() {

  const navigate = useNavigate();

  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // API呼び出し
    const result = await postUserLoginInfo(user_id, password);
    if (result) {
      // 成功時
      alert(`ログイン成功: ${result.user_id} ${result.password}`);
    } else {
      // 失敗時
      alert('ログイン失敗')
    }
  }

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
              onClick={handleSubmit}
            >
              ログイン
            </Button>
            <Button
              size='small'
              sx={{ height:'50%' }}
              onClick={() => {navigate('/users')}}
            >
              アカウントをお持ちでない方
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}