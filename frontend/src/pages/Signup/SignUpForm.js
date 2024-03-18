import { Container, Card, CardContent, Stack, CardHeader, Button, TextField } from '@mui/material';
import getValues from '../../functions/functions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUpForm() {
  
  const navigate = useNavigate();
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  // const [username, setUsername] = useState('');
  const [post_code, setPost_code] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [buildings, setBuildings] = useState('');
  const [email, setEmail] = useState('');

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
              <TextField 
                id='lastname' 
                label='姓' 
                size='medium'
                value={ lastname }
                required
                onClick={(e) => setLastname(e.target.value)}
              />
              <TextField 
                id='firstname' 
                label='名'
                size='medium'
                value={ firstname }
                required
                onClick={(e) => setFirstname(e.target.value)}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
              <TextField 
                id='post_code' 
                label='郵便番号' 
                size='medium'
                value={ post_code }
                required
                onClick={(e) => setPost_code(e.target.value)}
              />
              <Button variant='outlined' sx={{height:'75%'}}>検索</Button>
            </Stack>
            <TextField 
              id='adress1' 
              label='市区町村' 
              size='medium'
              value={ address1 }
              required
              onClick={(e) => setAddress1(e.target.value)}
            />
            <TextField 
              id='address2' 
              label='番地' 
              size='medium'
              value={ address2 }
              required
              onClick={(e) => setAddress2(e.target.value)}
            />
            <TextField 
              id='buildings' 
              label='マンション名など' 
              size='medium'
              value={ buildings }
              required
              onClick={(e) => setBuildings(e.target.value)}
            />
            <TextField 
              id='email' 
              label='メールアドレス' 
              size='medium'
              value={ email }
              required
              onClick={(e) => setEmail(e.target.value)}
            />
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