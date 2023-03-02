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

  return (
    <CardContainer item lg={3}>
      <CardStyle sx={{ maxWidth: 345, width:'100%' }}>
        <CardMedia
          component="img"
          alt={photo.photo.description}
          height="350"
          image={photo.photo.urls.small}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {photo.description}
          </Typography>
          <Typography variant="overline">
            Photo By:
          </Typography>
          <UserBox container>
            <Avatar src={`${photo.photo.user.profile_image.small}`}/>
            <Typography variant='overline' sx={{alignSelf: 'center', marginLeft: '20px'}}>
                {photo.photo.user.name}
            </Typography>        
          </UserBox>
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
          {photo.photo.liked_by_user
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