import { Container, Card, CardContent, Stack, CardHeader, Button } from '@mui/material';
import Textfield from '../../features/TextField';
import getValues from '../../functions/functions';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
  
  const navigate = useNavigate();

  // バックエンドに送る情報
  const userInfo = {
    name: '',
    post_code: '',
    address: '',
    email: ''
  }

  // 登録ボタンクリック時
  function buttonOnClickCreate(userInfo) {
    const values = getValues(['lastname', 'firstname', 'post_code', 'address1', 'address2', 'buiuldingname', 'email'], document)
    userInfo.name = values[0] + values[1];
    userInfo.post_code = values[2];
    userInfo.address = values[3] + values[4] + values[5];
    userInfo.email = values[6];
    console.log(userInfo);
  }

  return (
    <div className='SingUp'>
      <Container maxWidth='xs'>
        <Card variant='outlined' sx={{ pt:2, my:6 }}>
          <CardHeader title='新規会員登録'/>
          <CardContent
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateRows: 'repeat(7, 1fr)'
            }}
          >
            <Stack direction='row' spacing={2}>
              <Textfield id='lastname' label='姓' required={true}/>
              <Textfield id='firstname' label='名' required={true}/>
            </Stack>
            <Stack direction='row' spacing={2}>
              <Textfield id='post_code' label='郵便番号' required={true}/>
              <Button variant='outlined' sx={{height:'75%'}}>検索</Button>
            </Stack>
            <Textfield id='adress1' label='市区町村' required={true}/>
            <Textfield id='address2' label='番地' required={true}/>
            <Textfield id='buildingname' label='マンション名など' required={false}/>
            <Textfield id='email' label='メールアドレス' required={true}/>
            <Button
              size='medium'
              color='primary'
              variant='contained'
              sx={{ mx:10 }}
              onClick={() => buttonOnClickCreate(userInfo)}
            >
              登録
            </Button>
            <Button
              size='small'
              sx={{ height:'50%' }}
              onClick={() => {navigate('/')}}
            >
              既にアカウントをお持ちの場合
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}