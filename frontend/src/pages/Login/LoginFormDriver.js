// import { useState } from "react";
import { Button, Card, CardHeader, CardContent, Container } from '@mui/material';
import Textfield from '../../features/TextField';
import { buttonOnClick } from '../../functions/functions';

export default function LoginFormDriver() {

  // バックエンドに送る情報のid
  const userInfo = ['username', 'password'];

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
            <Textfield id='username' label='ID' required={true}/>
            <Textfield id='password' label='パスワード' required={true}/>
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