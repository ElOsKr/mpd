import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


function Navbar() {

  return (
    <AppBar position="static">
      <Toolbar sx={{background: "#222831"}}>
        <Typography variant="body1" color="white">MPD</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;