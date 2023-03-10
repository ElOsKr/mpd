import React from 'react';
import { 
        TextField, 
        styled } 
from '@mui/material'

const InputText = styled(TextField)({  
  marginRight: '20px',
  input:{
    color: 'white',
    backgroundColor: 'none'
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
  return (
    <InputText 
      label="Search"
      size="small"
      autoComplete='off'
      sx={{width: { xs: '50%', md: '450px' }}}
      onChange={props.onChange}
      value={props.value}
    />
  )
};

export default Input;