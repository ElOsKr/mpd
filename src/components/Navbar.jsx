import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


function Navbar() {


  const handleOpenMenu = () => {

  }


  return (
    <AppBar position="static">
      <Toolbar 
        sx={{
          background: "#222831",
          justifyContent: 'space-between'
        }}>
        <Box>
          <Typography color="white">MPD</Typography>
        </Box>
          <MenuIcon
            sx={{
              cursor: 'pointer',
              display: {md: 'none'}
            }}
          />          
        <Box
          sx={{
            display: {xs: 'none', sm: 'none', md: 'flex'},
            justifyContent: 'space-evenly',
            width: '350px'
          }}
        >
          <NavLink to="/" 
            className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
          >
            Home
          </NavLink>
          <NavLink to="/search" 
            className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
          >
            Search
          </NavLink>
          <NavLink to="/favorites" 
            className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
          >
            Favorites
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;