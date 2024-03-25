import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { NavLink } from 'react-router-dom';

export default function HomeDriver() {

  const labels = ['登録', '確認', '配達'];
  const icons = [<AppRegistrationIcon />, <FormatListNumberedIcon />, <LocalShippingIcon />];
  const pages = [`/register-items`, `/view-items`, `/start-delivering`];

  return (
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
  )  
  
}