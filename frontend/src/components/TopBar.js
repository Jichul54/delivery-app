import * as React from 'react';
import { AppBar, Paper, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function TopBar() {
  return (
      <AppBar component='nav'>
        <Paper elevation={2}>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr:2 }}
              onClick={() => {console.log('hello')}}
            >
              <MenuIcon /> 
            </IconButton>
            <Typography variant='body1' component='div' sx={{ flexGrow:1 }}>
              モジャモdjango
            </Typography>
          </Toolbar>
        </Paper>
      </AppBar>
  );
}