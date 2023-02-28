import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <AppBar position='relative' >
            <Toolbar sx={{
            display: 'flex',
            justifyContent: 'space-between',
            background: "#222831",
            paddingLeft: {xs : '24px'},
            paddingRight: {xs : '24px'},
            minHeight: {xs : '64px'}
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column' 
                }}>
                    <Typography color="white">MPD</Typography>
                    <Typography sx={{
                        fontSize: {xs: '10px', sm: '12px', md: '15px'}
                    }}>
                        Copyright © All rights reserved</Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: {xs: '10px', sm: '12px', md: '15px'}
                        }}>
                            Created By: Óscar Alcivar</Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>
                        <a href="https://www.linkedin.com/in/oscar-alcivar-177aa3229/" target="_blank" rel="noreferrer" className='footer__link'>
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/ElOsKr" target="_blank" rel="noreferrer" className='footer__link'>
                           <GitHubIcon />  
                        </a>                      
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>        
    </div>

  )
}

export default Footer