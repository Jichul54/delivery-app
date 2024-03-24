import * as React from 'react';
import { AppBar, Paper, Toolbar, IconButton, Typography, ListItemButton, ListItemIcon, ListItemText, Drawer, Box, List, ListItem } from "@mui/material";
// import { MenuIcon, HomeIcon, UploadFileIcon, TableRowsIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TableRowsIcon from '@mui/icons-material/TableRows';

export default function AppBarAdmin() {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {['ホーム', '登録', '確認'].map((text, index) => (
          <ListItem key={'menu' + index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 &&
                  <HomeIcon />
                } {index === 1 &&
                  <UploadFileIcon />
                } {index === 2 &&
                  <TableRowsIcon />
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
              onClick={toggleDrawer(true)}
            >
              <MenuIcon /> 
            </IconButton>
            <Typography variant='body1' component='div' sx={{ flexGrow:1 }}>
              モジャモdjango
            </Typography>
          </Toolbar>
        </Paper>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </AppBar>
  );
}