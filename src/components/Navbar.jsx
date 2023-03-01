import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';




function Navbar() {

  const [visible, setVisible] = useState('none');
  const [menu, setMenu] = useState("flex")

  const pages = [
    {name: 'Home', url: '/'},
    {name: 'Search', url: '/search'},
    {name: 'Favorites', url: '/favorites'}
  ];

  const handleOpenMenu = () => {
    
    if(visible==="none"){
      setVisible("flex")
      setMenu("none")
    }else{
      setVisible("none")
      setMenu("flex")
    }
  }

  return (
    <AppBar position="fixed">
      <Toolbar 
        sx={{
          display: 'flex',
          background: "#222831",
          justifyContent: 'space-between',
          paddingLeft: {xs : '24px'},
          paddingRight: {xs : '24px'},
          minHeight: {xs : '64px'},
          flexWrap: {xs: 'wrap', sm: 'nowrap'}
        }}>
        <Box>
          <Typography color="white">MPD</Typography>
        </Box>
          <MenuIcon
            sx={{
              cursor: 'pointer',
              display: {xs: menu, sm: 'none'},
            }}
            onClick={handleOpenMenu}
          /> 
          <CloseIcon 
            sx={{
              cursor: 'pointer',
              display: {xs: visible, sm: 'none'},
            }}
            onClick={handleOpenMenu}            
          />       
        <Box
          sx={{
            display: {xs: 'none', sm: 'flex'},
            justifyContent: 'space-evenly',
            flexDirection: {sm:'row'},
            width: {sm:'350px'},
          }}
        >
          {pages.map((page) => (
            <NavLink to={page.url}
            className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
            key={page.url} 
          >
            {page.name}
          </NavLink>
            ))}
        </Box>
      </Toolbar>
      <Toolbar
        sx={{
          display: {xs:visible, sm: 'none'},
          flexDirection: 'column',
          width: '100%',
          background: "#222831",
          alignItems: 'start'
        }}
      >
          {pages.map((page) => (
            <NavLink to={page.url}
            className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
            key={page.url}
            style={{marginBottom: '10px'}}
          >
            {page.name}
          </NavLink>
            ))}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;