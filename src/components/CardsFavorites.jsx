import React from 'react'
import { Card as CardMui, styled, Grid, IconButton } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removePhotoFavorite } from '../features/favorites/favoritesSlice';
import { saveAs } from 'file-saver'


const CardStyle = styled(CardMui)(() => ({
  backgroundColor: '#00ADB5'
}));

const CardContainer = styled(Grid)(() => ({
  margin: '10px 20px',
}));

function CardFavorites(photo) {

  let img = photo.photo;

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removePhotoFavorite(img.id))
  }

  const handleDownload = () =>{
    saveAs(img.urlFull, `${img.id}`)
  }


  return (
    <CardContainer item lg={3}>
      <CardStyle sx={{width: {xs: 300, xl: 400}}}>
        <CardMedia
          component="img"
          alt={img.description}
          height="350"
          image={img.urlSmall}
        />
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            {img.title?
                <Typography variant="body2">
                    {img.title}
                </Typography>
                :
                <Typography variant="body2" sx={{color: 'grey'}}>
                    No title
                </Typography>
            }
            <Typography variant="Caption">
                {`Width: ${img.width} px`}
            </Typography>
            <Typography variant="Caption">
                {`Height: ${img.height} px`}
            </Typography>
            <Typography variant="Caption">
                {`Added: ${img.dateAdded}`}
            </Typography>
            <Typography variant="Caption" sx={{display: 'flex', justifyContent:'center'}}>
                {`Likes: ${img.width} `}
                <FavoriteIcon sx={{color:'red'}}/>
            </Typography>                           
        </CardContent>
        <CardActions sx={{justifyContent: 'end'}}>
              <IconButton onClick={handleRemove}>
                <DeleteIcon sx={{cursor: 'pointer'}}/>
              </IconButton> 
              <IconButton onClick={handleDownload}>
                <CloudDownloadIcon sx={{cursor: 'pointer'}}/>
              </IconButton>
        </CardActions>
      </CardStyle>   
    </CardContainer>

  )
}

export default CardFavorites