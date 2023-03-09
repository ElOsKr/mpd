import React from 'react'
import { Card as CardMui, styled, Grid, IconButton, Skeleton, CardMedia } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

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
              <FavoriteBorderIcon/>
            </IconButton> 
        <IconButton>
          <CloudDownloadIcon/>
        </IconButton>
      </CardActions>
    </CardStyle>   
  </CardContainer>
  )
}

export default CardLoading