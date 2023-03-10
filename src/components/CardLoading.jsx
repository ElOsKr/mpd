import React from 'react'
import { 
        Card as CardMui, 
        styled, 
        Grid, 
        IconButton, 
        Skeleton, 
        CardMedia,
        CardActions,
        CardContent,
        Typography } 
from '@mui/material';
import {
        FavoriteBorder,
        CloudDownload } 
from '@mui/icons-material';

const UserBox = styled(Grid)(() => ({
    justifyContent: 'center'
}));

const CardStyle = styled(CardMui)(() => ({
  backgroundColor: '#00ADB5'
}));

const CardContainer = styled(Grid)(() => ({
  margin: '10px 20px',
}));

function CardLoading() {
  return (
    <CardContainer item lg={3}>
    <CardStyle sx={{width: {xs: 300, xl: 400}}}>
        <CardMedia
          sx={{height: '350px'}}
        >
        <Skeleton
            animation="wave"
            height="500px"
            sx={{translate: '0px -120px'}}
        />            
        </CardMedia>
      <CardContent>
        <Typography variant="overline">
          Photo By:
        </Typography>
        <UserBox container>
          <Skeleton variant='circular' width={40} height={40}/>
          <Skeleton width="40%" />       
        </UserBox>
      </CardContent>
      <CardActions sx={{justifyContent: 'end'}}>
            <IconButton>
              <FavoriteBorder/>
            </IconButton> 
        <IconButton>
          <CloudDownload/>
        </IconButton>
      </CardActions>
    </CardStyle>   
  </CardContainer>
  )
};

export default CardLoading;