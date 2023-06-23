import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@/components/MenuDropdown';
import {resetUser} from '../../redux/reducers/userSlice'
import { deepOrange, deepPurple } from '@mui/material/colors';
import styles from '@/styles/users.module.css'
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch } from 'react-redux';

export default function BasicMenu() {
  const dispatch=  useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (



    <div className={styles.MenuIcon}>
      <CssBaseline />
      
      
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >

        <Stack direction="row" spacing={2}>
            <Avatar>H</Avatar>
            
     
  
           
         </Stack>
            
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=>dispatch(resetUser())}>Logout</MenuItem>
      </Menu>
    </div>
  );
}