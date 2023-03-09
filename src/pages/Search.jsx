import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { MainBody } from '../components/MainBody'
import { Grid, Typography, styled } from '@mui/material'
import Button from '../components/Button';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux'
import { callApi } from '../features/search/searchSlice';
import CardLoading from '../components/CardLoading';


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

  const isLoading = useSelector(state => state.searchImg.isLoading)

  const dispatch = useDispatch();

  let cardsLoading = [];

  cardsLoading.forEach((index) => {
    cardsLoading.push(<CardLoading key={index}/>)
  })

  useEffect(()=>{
    dispatch(callApi(searchInput))
  },[])

  const handleSubmit = (event) =>{
    event.preventDefault();
    dispatch(callApi(searchInput))
  }

  const handleClickSearch = () => {
    dispatch(callApi(searchInput))
  }

  const handleChangeInput = (event) =>{
    setSearchInput(event.target.value)
  }

  console.log(isLoading)

  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Search</Typography>
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChangeInput}/>
          <Button name="Search" onClick={handleClickSearch}/>          
        </form>
      </SearchBox>
      <CardsBox container item xs={12} spacing={4}> 
        {isLoading?
          [...Array(30).keys()].map((key) => (
            <CardLoading key={key}/>
          ))
        :
        photos.map((photo) => (
          <Card photo={photo} key={photo.id}/>
        ))
        }
      </CardsBox>
    </MainBody>
  )
}

export default Search