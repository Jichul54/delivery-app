import * as React from 'react';
import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { postLoginInfo } from '../../api/login';

export default function LoginForm() {

  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    // API呼び出し
    const result = await postLoginInfo(email, password);
    if (result) {
      // 成功時
      alert(`ログイン成功: ${result.email} ${result.password}`);
    } else {
      // 失敗時
      alert('ログイン失敗')
    }
  }

  return (
    <div className='Login_user'>
      <Container maxWidth='xs'>
        <Card variant='outlined' sx={{ p:2, mt:25, mb:20 }}>
          <CardHeader title='ログイン' sx={{ textAlign:'center' }}/>
          <CardContent
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateRows: 'repeat(3, 1fr)'
            }}
          >
            <TextField 
              id='email' 
              label='メールアドレス' 
              size='medium'
              value={ email }
              required
              onChange={(e) => setEmail(e.target.value)}
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