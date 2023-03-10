import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { MainBody } from '../components/MainBody'
import { Grid, Typography, styled, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material'
import CardFavorites from '../components/CardsFavorites';
import { useDispatch, useSelector } from 'react-redux';
import { filterFavoritesDescription, orderPhotosBy } from '../features/favorites/favoritesSlice';
import { Link } from 'react-router-dom';

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

  const [value, setValue] = useState('')

  const [valueInput, setValueInput] = useState('')

  const dispatch = useDispatch();

  let photos = useSelector(state => state.favPhotos.favList)


  useEffect(()=>{
    dispatch(orderPhotosBy(value))
  },[value])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleFilter = (event) => {
    setValueInput(event.target.value)
    dispatch(filterFavoritesDescription(event.target.value));
    if(event.target.value===""){
      setValue('')
    }
  }

  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Favorites</Typography>
        <Input onChange={handleFilter}/>
          <FormControl size='small' sx={{minWidth: 120}}>
            <LabelStyle id="filter-label">Filter</LabelStyle>
            <SelectStyle
              labelId="filter-label"
              label="filter"
              value={value}
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
        {photos===null || photos.lenght === 0?
          <Box>
            <Typography variant="h5" sx={{mt: '50px'}}>
              No photos in favorites
            </Typography>   
            <Typography variant="h5" sx={{mt: '50px'}}>
              Go to <Link 
              to='/search'
              style={{color: 'white'}}
              >Search</Link>
            </Typography>         
          </Box>
          :
          photos.map((photo) => (
            <CardFavorites photo={photo} key={photo.id} valueInput={valueInput}/>
        ))}
      </CardsBox>
    </MainBody>
  )
}

export default Favorites