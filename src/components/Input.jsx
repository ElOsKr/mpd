import React from 'react'
import { TextField, styled } from '@mui/material'

const InputText = styled(TextField)({
  
  marginRight: '20px',

  input:{
    color: 'white',
  },

  '& label':{
    color: 'white'
  },

  '& label.Mui-focused': {
    color: 'white',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});


function Input(props) {

  const handleDescription = ()=>{

  }

  return (
    <InputText 
      label="Search"
      size="small"
      sx={{width: { xs: '50%', md: '450px' }}}
      onKeyUp={handleDescription}
    />
  )
}

export default Input