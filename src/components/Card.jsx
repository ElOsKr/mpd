import React from 'react'
import { Avatar, Card as CardMui, styled, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

function Card(photo) {

  let img = photo.photo;

  return (
    <CardContainer item lg={3}>
      <CardStyle sx={{width: {xs: 300, xl: 400}}}>
        <CardMedia
          component="img"
          alt={img.description}
          height="350"
          image={img.urls.small}
        />
        <CardContent>
          <Typography variant="overline">
            Photo By:
          </Typography>
          <UserBox container>
            <Avatar src={`${img.user.profile_image.small}`}/>
            <Typography variant='overline' sx={{alignSelf: 'center', marginLeft: '20px'}}>
                {img.user.name}
            </Typography>        
          </UserBox>
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
          {img.liked_by_user
            ? <FavoriteIcon sx={{color:'red', cursor: 'pointer'}}/>
            : <FavoriteBorderIcon sx={{cursor: 'pointer'}}/>
          }
          <CloudDownloadIcon sx={{cursor: 'pointer'}}/>
        </CardActions>
      </CardStyle>      
    </CardContainer>

  )
}

export default Card