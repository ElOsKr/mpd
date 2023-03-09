import React, { useEffect } from 'react'
import { Grid, Typography, styled } from '@mui/material'
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { MainBody } from '../components/MainBody'
import { useDispatch } from 'react-redux'
import { carouselCall } from '../features/carousel/carouselSlice'


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

  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(carouselCall())
  }, [])

  const navigate = useNavigate();

  const changeToSearch = () =>{
    navigate('/search')
  }

  const changeToFavorites = () =>{
    navigate('/favorites')
  }

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
        <Carousel />
      </CarouselContainer>
    </MainBody>
  )
}

export default Home