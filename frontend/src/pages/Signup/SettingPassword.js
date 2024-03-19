import { Button, Card, CardHeader, CardContent, Container, TextField } from '@mui/material';
import { buttonOnClick } from '../../functions/functions';
import { useState } from 'react';

export default function SettingPassword() {

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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
              onClick={() => {buttonOnClick(userInfo, document)}}
            >
              登録
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}