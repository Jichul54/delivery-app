import { Button, Card, CardHeader, CardContent, Container } from '@mui/material';
import Textfield from '../../features/TextField';
import { buttonOnClick } from '../../functions/functions';

export default function SettingPassword() {

  // バックエンドの送る情報のid
  const userInfo = ['password'];

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
            <Textfield id='password' label='パスワード' required={true} />
            <Textfield id='password2' label='再確認' required={true}/>
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