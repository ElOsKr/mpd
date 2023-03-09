import React, { useState } from 'react'
import { Card as CardMui, styled, Grid, IconButton, Box, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { filterFavoritesDescription, removePhotoFavorite } from '../features/favorites/favoritesSlice';
import { saveAs } from 'file-saver'
import ModalDescription from './ModalDescription';


const ColorButton = styled(Button)(() => ({
  backgroundColor: '#0E8388',
  '&:hover': {
    backgroundColor: '#CBE4DE',
    color: 'black'
  },
}));

const CardStyle = styled(CardMui)(() => ({
  backgroundColor: '#00ADB5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

const CardContainer = styled(Grid)(() => ({
  margin: '10px 20px',
}));

function CardFavorites(props) {

  const [open, setOpen] = useState(false);

  const openModal = () =>{
    setOpen(true)
  }

  let img = props.photo;

  let filterDescription = props.valueInput;

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removePhotoFavorite(img.id))
    dispatch(filterFavoritesDescription(filterDescription))

  }

  const handleDownload = () =>{
    saveAs(img.urlFull, `${img.id}`)
  }

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <CardContainer item lg={3}>
      <CardStyle sx={{width: {xs: 300, xl: 400}, height: 610}}>
        <CardMedia
          component="img"
          alt={img.description}
          height="350"
          image={img.urlSmall}
        />
        <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
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
                {`Likes: ${img.likes} `}
                <FavoriteIcon sx={{color:'red'}}/>
            </Typography>
            {img.description?
              <Typography variant="Caption" sx={{textAlign: 'start', overflow:"hidden" , textOverflow:"ellipsis", maxWidth: '268px'}}>
                  {`Description: ${img.description}`}
              </Typography>
              :
              <Typography variant="Overline" sx={{textAlign: 'start', color: 'grey'}}>
                No description available
              </Typography>        
            }
                       
        </CardContent>
        <CardActions sx={{justifyContent: 'space-between'}}>
            <ColorButton variant='contained' onClick={openModal}>
              Edit description
            </ColorButton>
            <Box>
              <IconButton onClick={handleRemove}>
                <DeleteIcon sx={{cursor: 'pointer'}}/>
              </IconButton> 
              <IconButton onClick={handleDownload}>
                <CloudDownloadIcon sx={{cursor: 'pointer'}}/>
              </IconButton>              
            </Box>
        </CardActions>
      </CardStyle>
      <ModalDescription id={img.id} open={open} img={img.urlSmall} description={img.description} handleClose={handleClose}/>  
    </CardContainer>
  )
}

export default CardFavorites