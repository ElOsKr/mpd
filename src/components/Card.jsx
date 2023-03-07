import React, { useState } from 'react'
import { Avatar, Card as CardMui, styled, Grid, IconButton, Snackbar, Alert, Icon } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useDispatch } from 'react-redux';
import { addPhotoFavorites } from '../features/favorites/favoritesSlice';
import { saveAs } from 'file-saver';

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

  const [alert, setAlert] = useState(false)

  let img = photo.photo;

  const dispatch = useDispatch();

  const actualDate = new Date();

  const handleLike = () =>{
    dispatch(addPhotoFavorites({
      id: img.id,
      width: img.width,
      height: img.height,
      title: img.title,
      description: img.alt_description,
      urlSmall: img.urls.small,
      urlFull: img.urls.full,
      urlThumb: img.urls.thumb,
      likes: img.likes,
      dateAdded: actualDate.toLocaleString()
    }))
    setAlert(true)
  }

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return
    }
    setAlert(false)
  }

  const handleDownload = () =>{
    saveAs(img.urls.full, `${img.id}`)
  }

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
            ? <IconButton color='black'> 
                <FavoriteIcon sx={{color:'red', cursor: 'pointer'}}/>
              </IconButton> 
            
            : <IconButton onClick={handleLike}>
                <FavoriteBorderIcon sx={{cursor: 'pointer'}}/>
              </IconButton> 
            
          }
          <IconButton onClick={handleDownload}>
            <CloudDownloadIcon sx={{cursor: 'pointer'}}/>
          </IconButton>
        </CardActions>
      </CardStyle>   
      <Snackbar
        open={alert}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
          The image was saved successfully
        </Alert>
      </Snackbar>
    </CardContainer>

  )
}

export default Card