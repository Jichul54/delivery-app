import { TextField, Button, Card, CardHeader, CardContent, Container } from '@mui/material';

export default function SettingPassword() {

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
              variant='outlined'
              size='medium'
              required
            />
            <TextField
              id='password2'
              label='再確認'
              variant='outlined'
              size='medium'
              required
            />
            <Button
              size='small'
              color='primary'
              variant='contained'
              sx={{ mx:20 }}
            >
              登録
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}