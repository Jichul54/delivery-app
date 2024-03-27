import { useState } from "react";
import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { postDriverLoginInfo } from '../../api/login-vendors';

export default function LoginFormDriver() {

  const [user_id, setUser_id] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // API呼び出し
    const result = await postDriverLoginInfo(user_id, password);
    if (result) {
      // 成功時
      alert(`ログイン成功: ${result.id}`);
      localStorage.setItem('user_id', result.id);
    } else {
      // 失敗時
      alert('ログイン失敗')
    }
  }

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
              onClick={handleSubmit}
            >
              ログイン
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}