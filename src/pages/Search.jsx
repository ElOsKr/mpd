import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../components/Input';
import { MainBody } from '../components/MainBody';
import {Grid, 
        Typography, 
        styled, 
        Pagination } 
from '@mui/material';
import Button from '../components/Button';
import Card from '../components/Card';
import CardLoading from '../components/CardLoading';
import { callApi } from '../features/search/searchSlice';

const SearchBox = styled(Grid)(() => ({
  alignSelf: 'start'
}));

const CardsBox = styled(Grid)(() => ({
  alignContent: 'start',
  justifyContent: 'center',
}));

const PaginationStyled = styled(Pagination)(() => ({
  marginTop: '20px',
  '& .MuiPaginationItem-text': {
    color: 'white',
    '&:hover':{
      color: 'black',
      backgroundColor: 'white'
    },
  },
  '& .Mui-selected': {
    color: 'black',
    backgroundColor: 'white!important'
  }
}));


function Search() {

  const [page,setPage] = useState(1);

  const [searchInput, setSearchInput] = useState('');

  let photos = useSelector(state => state.searchImg.photos);

  const isLoading = useSelector(state => state.searchImg.isLoading);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(callApi(searchInput,page));
  },[]);

  const handleSubmit = (event) =>{
    event.preventDefault();
    setPage(1);
    dispatch(callApi(searchInput,page));
    setSearchInput('');
  }

  const handleClickSearch = () => {
    setPage(1);
    dispatch(callApi(searchInput,page));
    setSearchInput('');
  }

  const handleChangeInput = (event) =>{
    setSearchInput(event.target.value);
  }

  const handleChangePage = (event , value) => {
    setPage(value);
    dispatch(callApi(searchInput,value));
    window.scrollTo({top: 0});
  }

  return (
    <MainBody container spacing={2}>
      <SearchBox item xs={12}>
          <Typography variant="h5" sx={{mb: '20px'}}>Search</Typography>
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChangeInput} value={searchInput}/>
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
      <PaginationStyled count={10} page={page} shape="rounded" size="small" onChange={handleChangePage}/>
    </MainBody>
  );
};

export default Search;