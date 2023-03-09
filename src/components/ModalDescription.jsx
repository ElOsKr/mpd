import { Modal, Box, Typography, Card as CardMui, styled, CardContent, CardMedia, TextField, Button, CardActions, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editPhotoDescription } from '../features/favorites/favoritesSlice';

const CardStyle = styled(CardMui)(() => ({
    backgroundColor: '#00ADB5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const ColorButton = styled(Button)(() => ({
    backgroundColor: '#0E8388',
    '&:hover': {
      backgroundColor: '#CBE4DE',
      color: 'black'
    },
  }));

function ModalDescription({id, open,img,description,handleClose}) {

    const [newDescription, setNewDescription] = useState('')

    const [alert, setAlert] = useState(false)

    const dispatch = useDispatch();

    const saveDescription = () => {
      if(newDescription===""){
        setAlert(true)
      }else{
          dispatch(editPhotoDescription({id , newDescription}));
          handleClose()        
      }
    }

    const handleChangeDescription = (event) => {
        setNewDescription(event.target.value)
    }  
    
    const handleCloseAlert = (event, reason) => {
      if(reason === 'clickaway'){
        return
      }
      setAlert(false)
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CardStyle sx={{width: {xs: 300, xl: 400}, height: 610}}>
                <CardMedia
                component="img"
                alt={description}
                height="350"
                image={img}
                />
                <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <Typography variant="Caption">
                        Old description:
                    </Typography>
                    {description?
                      <Typography variant='subtitle2' sx={{maxWidth: '268px', wordBreak:'break-word'}}>
                          {description}
                      </Typography> 
                      :
                      <Typography variant='subtitle2' sx={{color: 'grey'}}>
                        No description
                      </Typography>                    
                  }

                    <Typography variant="Caption" sx={{mt: '10px'}}>
                        New description:
                    </Typography>
                    <TextField onChange={handleChangeDescription} InputProps={{inputProps: {maxLength: 100}}}/>               
                </CardContent>
                <CardActions sx={{justifyContent: 'end'}}>
                    <ColorButton variant='contained' onClick={saveDescription}>
                        Save description
                    </ColorButton>
                </CardActions>
        </CardStyle>
        </Box>
      </Modal>
      <Snackbar
        open={alert}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }} variant="filled">
          Description can not be empty
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ModalDescription