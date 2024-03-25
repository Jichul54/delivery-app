import AppBarDriver from "../../../components/AppBar_Driver";
import ItemList from "../../../components/ItemList";
import { Stack, Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function StartDelivering() {

  const navigate = useNavigate();
  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', mt:'120px', justifyContent:'center', flexGrow:1 }}>
        <Stack direction='column' spacing={2}>
          <Box sx={{ px:'25%' }}>
            <Button
              size='large'
              variant='contained'
              onClick={() => {navigate(`/deliver-items`)}}
            >
              配送を開始する
            </Button>
          </Box>
        <ItemList />
        </Stack>
      </Box>
    </div>
  )
}