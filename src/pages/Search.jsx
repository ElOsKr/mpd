import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { MainBody } from '../components/MainBody'
import { Grid, Typography, styled } from '@mui/material'
import Button from '../components/Button';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '../features/search/searchSlice';


const SearchBox = styled(Grid)(() => ({
  alignSelf: 'start'
}));

const CardsBox = styled(Grid)(() => ({
  alignContent: 'start',
  justifyContent: 'center',
}));


function Search() {


  const [searchInput, setSearchInput] = useState('');

  let photos = useSelector(state => state.searchImg.photos)

  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(callApi(searchInput))
  },[searchInput])

  const handleSubmit = (event) =>{
    event.preventDefault();
    setSearchInput(event.target.value)
  }

  const handleClickSearch = () => {
    dispatch(callApi(searchInput))
  }


  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Search</Typography>
        <form onSubmit={handleSubmit}>
          <Input />
          <Button name="Search" onClick={handleClickSearch}/>          
        </form>
      </SearchBox>
      <CardsBox container item xs={12} spacing={4}> 
        {photos.map((photo) => (
          <Card photo={photo} key={photo.id}/>
        ))}
      </CardsBox>
    </MainBody>
  )
}

export default Search