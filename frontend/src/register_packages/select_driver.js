import { Box, AppBar, Toolbar, IconButton, Paper, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function SelectDriver() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Paper elevation={2}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inehrit'
            aria-label='menu'
            sx={{ mr:2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='body1' component='div' sx={{ flexGrow: 1 }}>
            モジャモdjango
          </Typography>
        </Toolbar>
        </Paper>
      </AppBar>
    </Box>
  )
}