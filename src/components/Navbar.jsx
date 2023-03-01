import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const pages = [
  {name: 'Home', url: '/'},
  {name: 'Search', url: '/search'},
  {name: 'Favorites', url: '/favorites'}
];

const Mainbar = styled(Toolbar)(() => ({
  display: 'flex',
  background: "#222831",
  justifyContent: 'space-between',
}));

const Pages = styled(Box)(() => ({
  justifyContent: 'space-evenly',
}));

const MobileMenu = styled(Toolbar)(() => ({
  flexDirection: 'column',
  width: '100%',
  background: "#222831",
  alignItems: 'start'
}));

function Navbar() {

  const [visible, setVisible] = useState('none');
  const [menu, setMenu] = useState("flex")

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
      <Mainbar sx={{
          paddingLeft: {xs : '24px'},
          paddingRight: {xs : '24px'},
          minHeight: {xs : '64px'},
          flexWrap: {xs: 'wrap', sm: 'nowrap'}
      }}>
        <Box>
          <Typography>MPD</Typography>
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
        <Pages sx={{
          display: {xs: 'none', sm: 'flex'},
            flexDirection: {sm:'row'},
            width: {sm:'350px'},
        }}>
          {pages.map((page) => (
            <NavLink to={page.url}
              className= { ( { isActive}) => `nav-link ${isActive? 'nav-link-active': ''}`}
              key={page.url} 
            >
              {page.name}
            </NavLink>
            ))}
        </Pages>
      </Mainbar>
      <MobileMenu
        sx={{
          display: {xs:visible, sm: 'none'},
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
      </MobileMenu>
    </AppBar>
  );
}
export default Navbar;