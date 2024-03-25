import * as React from 'react';
import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';

export default function SettingPassword() {

  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');

  const handleSubmit = async () => {
    // バリデーション確認
    let values = [password, password2];
    for (let i in values) {
      if (!values) {
        alert('パスワードを入力してください。');
        return;
      }
    }
    // API呼び出し
  }

  return (
    <div className='SettingPassword'>
      <Container maxWidth='sm'>
        <Card variant='outlined' sx={{ p:2, my:20 }}>
          <CardHeader title='パスワードを設定してください。'/>
          <CardContent
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateRows: 'repeat(3, 1fr)'
            }}
          >
            <TextField 
              id='password' 
              label='パスワード' 
              value={ password }
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField 
              id='password2' 
              label='再確認' 
              value={ password2 }
              required
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button
              size='small'
              color='primary'
              variant='contained'
              sx={{ mx:20 }}
              onClick={handleSubmit}
            >
              登録
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}