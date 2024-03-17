import { Container, Card, CardContent, TextField, Stack, CardHeader, Button } from '@mui/material';

export default function SignUpForm() {
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
                variant='outlined'
                size='medium'
                required
              />
              <TextField
                id='firstname'
                label='名'
                variant='outlined'
                size='medium'
                required
              />
            </Stack>
            <Stack direction='row' spacing={2}>
              <TextField
                id='post_code'
                label='郵便番号'
                variant='outlined'
                size='medium'
                required
              />
              <Button variant='outlined' sx={{ height:'75%' }}>検索</Button>
            </Stack>
            <TextField
              id='adress1'
              label='市区町村'
              variant='outlined'
              size='medium'
              required
            />
            <TextField
              id='address2'
              label='番地'
              variant='outlined'
              size='medium'
              required
            />
            <TextField
              id='buildingname'
              label='マンション名など'
              variant='outlined'
              size='medium'
            />
            <TextField
              id='email'
              label='メールアドレス'
              variant='outlined'
              size='medium'
              required
            />
            <Button
              size='medium'
              color='primary'
              variant='contained'
              sx={{ mx:10 }}
            >
              登録
            </Button>
            <Button
              size='small'
              sx={{ height:'50%' }}
            >
              既にアカウントをお持ちの場合
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}