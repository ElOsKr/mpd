import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Grid, 
        Typography, 
        styled, 
        Skeleton } 
from '@mui/material';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import { MainBody } from '../components/MainBody';
import { carouselCall } from '../features/carousel/carouselSlice';

const Description = styled(Grid)(() => ({
  margin: 'auto 0'
}));

const Title = styled(Typography)(() => ({
  margin: '0 15px'
}));

const ButtonsContainer = styled(Grid)(() => ({
  marginTop: '50px',
  justifyContent: "space-evenly"
}));

const CarouselContainer = styled(Grid)(() => ({
  height: '60%', 
  maxHeight: '500px',
  justifySelf: "center"
}));


function Home() {

  let isLoading = useSelector(state=> state.carouselPhotos.isLoading);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const changeToSearch = () =>{
    navigate('/search');
  };

  const changeToFavorites = () =>{
    navigate('/favorites');
  };

  useEffect(()=>{
    dispatch(carouselCall());
  }, []);

  return (
    <MainBody container spacing={2} sx={{
      alignContent: {sm: "center"},
      height: '70vh'
    }}>
      <Description item md={6}>
        <Title variant="h5">
          Welcome to MPD, search, like and download images
        </Title> 
        <ButtonsContainer container>
          <Button name="Search" onClick={changeToSearch}/>
          <Button name="Favorites" onClick={changeToFavorites}/>       
        </ButtonsContainer>
      </Description>
      <CarouselContainer item xs={12} md={6}>
        {isLoading?
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{
              width: '70%',
              height: '100%',
              margin: '0 auto',
              borderRadius: '20px'
            }}
            />
          :
          <Carousel />
        }
      </CarouselContainer>
    </MainBody>
  );
};

export default Home;