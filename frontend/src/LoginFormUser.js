import { TextField, Button, Card, CardHeader, CardContent, Container } from '@mui/material';

export default function LoginFormUser() {
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
              id='username'
              label='ID'
              variant='outlined'
              size='medium'
              required
            />
            <TextField
              id='password'
              label='パスワード'
              variant='outlined'
              size='medium'
              required
            />
            <Button
              size='small'
              color='primary'
              variant='contained'
              sx={{ mx:10 }}
            >
              ログイン
            </Button>
            <Button
              size='small'
              sx={{ height:'50%' }}
            >
              アカウントをお持ちでない方
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}