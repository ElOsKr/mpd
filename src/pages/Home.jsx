import React from 'react'
import { Grid, Typography, Button, styled } from '@mui/material'
import Carousel from '../components/Carousel';

const ColorButton = styled(Button)(() => ({
  backgroundColor: '#222831',
  '&:hover': {
    backgroundColor: '#1D2126',
  },
}));


function Home() {
  return (
    <Grid container justifyContent="center" spacing={2} sx={{mt: '120px', textAlign: 'center'}}>
      <Grid item md={6}>
        <Typography variant="h5" sx={{margin: '0 15px'}}>
          Welcome to MPD, search, like and download images
        </Typography> 
        <Grid container justifyContent="space-evenly"  sx={{mt: '50px'}}>
          <ColorButton variant="contained" sx={{backgroundColor: '#222831', padding: "0 25px"}}>
            Search
          </ColorButton>  
          <ColorButton variant="contained" sx={{backgroundColor: '#222831'}}>
            Favorites
          </ColorButton>        
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Carousel />
      </Grid>
    </Grid>
  )
}

export default Home