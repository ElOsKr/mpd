import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
        Avatar,
        Card as CardMui, 
        styled, 
        Grid, 
        IconButton, 
        Snackbar, 
        Alert, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Typography } 
from '@mui/material';
import {
        Favorite,
        FavoriteBorder,
        CloudDownload } 
from '@mui/icons-material';
import { addPhotoFavorites, removePhotoFavorite } from '../features/favorites/favoritesSlice';
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

  const [alert, setAlert] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  const dispatch = useDispatch();

  let favoriteImages = useSelector((state) => state.favPhotos.favList);

  useEffect(()=>{
    if(favoriteImages!==null){
      setIsLiked(favoriteImages.some(imgSave => imgSave.id === img.id));
    }    
  },[]);

  let img = photo.photo;
  
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
    }));
    setAlert(true);
    setIsLiked(true);
  };

  const handleDislike = () =>{
    dispatch(removePhotoFavorite(img.id))
    setIsLiked(false)
  };

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return
    }
    setAlert(false)
  };

  const handleDownload = () =>{
    saveAs(img.urls.full, `${img.id}`)
  };

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
            <Typography variant='overline' noWrap sx={{alignSelf: 'center', marginLeft: '20px', maxWidth: '70%'}}>
                {img.user.name}
            </Typography>        
          </UserBox>
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
          {isLiked
            ? <IconButton color='black' onClick={handleDislike}> 
                <Favorite sx={{color:'red', cursor: 'pointer'}}/>
              </IconButton> 
            
            : <IconButton onClick={handleLike}>
                <FavoriteBorder sx={{cursor: 'pointer'}}/>
              </IconButton> 
          }
          <IconButton onClick={handleDownload}>
            <CloudDownload sx={{cursor: 'pointer'}}/>
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
};

export default Card;