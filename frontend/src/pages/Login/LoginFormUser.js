import { Button, Card, CardHeader, CardContent, Container } from '@mui/material';
import Textfield from '../../features/TextField';
import { buttonOnClick } from '../../functions/functions';
import { useNavigate } from 'react-router-dom';

export default function LoginFormUser() {

  const navigate = useNavigate();

  // バックエンドに送る情報のid
  const userInfo = ['username', 'password']

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