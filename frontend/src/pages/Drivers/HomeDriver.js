import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'; // 確認画面用
import { NavLink } from 'react-router-dom';
import AppBarDriver from '../../components/AppBar_Driver';

export default function HomeDriver() {

  // const labels = ['配達物を登録する', '配達物を確認する', '配達を始める'];
  // const icons = [<AppRegistrationIcon />, <FormatListNumberedIcon />, <LocalShippingIcon />];
  // const pages = [`/register-items`, `/view-items`, `/start-delivering`];

  const labels = ['配達物を登録する', '配達を始める'];
  const icons = [<AppRegistrationIcon />, <LocalShippingIcon />];
  const pages = [`/register-items`, `/deliver-items`];

  return (
    <div>
      <AppBarDriver />
      <Box sx={{ display:'flex', justifyContent:'center', my:'150px' }}>
        <List>
          {labels.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={NavLink} to={pages[index]}>
                <ListItemIcon>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  )  
  
}