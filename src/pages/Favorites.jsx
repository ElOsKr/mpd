import React, { useState } from 'react'
import Input from '../components/Input'
import { MainBody } from '../components/MainBody'
import { Grid, Typography, styled, Select, MenuItem, InputLabel, FormControl } from '@mui/material'

const SearchBox = styled(Grid)(() => ({
  alignSelf: 'start'
}));

const CardsBox = styled(Grid)(() => ({
  alignContent: 'start',
  justifyContent: 'center',
}));

const SelectStyle = styled(Select)(() => ({

  color: 'white',

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white'
  },

  '& .MuiSvgIcon-root': {
    color: 'white'
}
}))

const LabelStyle = styled(InputLabel)(() => ({

  color: 'white',

  '&.Mui-focused': {
    color: 'white'
  },
}))

function Favorites() {

  const [filter, setFilter] = useState('')


  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Favorites</Typography>
        <Input />
          <FormControl size='small' sx={{minWidth: 120}}>
            <LabelStyle id="filter-label">Filter</LabelStyle>
            <SelectStyle
              labelId="filter-label"
              value={filter}
              label="filter"
              onChange={handleChange}
            >
              <MenuItem value='Added'>Added</MenuItem>
              <MenuItem value='Width'>Width</MenuItem>
              <MenuItem value='Height'>Height</MenuItem>
              <MenuItem value='Likes'>Likes</MenuItem>
            </SelectStyle>
          </FormControl>
      </SearchBox>
      <CardsBox container item xs={12} spacing={4}> 
      </CardsBox>
    </MainBody>
  )
}

export default Favorites