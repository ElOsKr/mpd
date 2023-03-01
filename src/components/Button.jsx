import React from 'react'
import { Button as MuiButton, styled } from '@mui/material'


const ColorButton = styled(MuiButton)(() => ({
    backgroundColor: '#222831',
    '&:hover': {
      backgroundColor: '#1D2126',
    },
  }));

function Button(props) {
  return (
    <ColorButton variant="contained" onClick={props.onClick}>
        {props.name}
    </ColorButton>  
  )
}

export default Button