import { Modal, Box, Typography, Card as CardMui, styled, CardContent, CardMedia, TextField, Button, CardActions } from '@mui/material'
import React from 'react'

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

function ModalDescription({open,img,description,handleClose}) {


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
                        {`Old description ${description}`}
                    </Typography>
                    <TextField />               
                </CardContent>
                <CardActions sx={{justifyContent: 'space-between'}}>
                    <ColorButton variant='contained'>
                        Save description
                    </ColorButton>
                </CardActions>
        </CardStyle>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalDescription