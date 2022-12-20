/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './nav.css';
import { useMyContext } from '../../Context/Context';

export default function NavDash() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { user } = useMyContext();
  // console.log(user);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="box-navbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Web Brand
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <AccountCircle  /> */}
                {user.profilePhoto ? <img className="img-nav" src={user.profilePhoto} alt="" /> : <AccountCircle />}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link to="/profile" className="text-dark">
                  <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                </Link>
                <MenuItem onClick={signOut}>Sign out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
