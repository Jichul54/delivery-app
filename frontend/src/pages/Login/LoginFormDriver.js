import { useState } from "react";
import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { postDriverLoginInfo } from '../../api/login-vendors';

export default function LoginFormDriver() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // API呼び出し
    const result = await postDriverLoginInfo(email, password);
    if (result) {
      // 成功時
      alert(`ログイン成功: ${result.email} ${email.password}`);
    } else {
      // 失敗時
      alert('ログイン失敗')
    }
  }

  return (
    <div className='Login_diver'>
      <Container maxWidth='xs'>
        <Card variant='outlined' sx={{ p:2, my:25 }}>
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
              label='Eメール' 
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
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}