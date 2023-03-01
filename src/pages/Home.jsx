import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Container = styled(Grid)(() => ({
    justifyContent: "center",
    alignContent: "center", 
    marginTop: '120px', 
    textAlign: 'center',
    height: '70vh'
}));

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
  height: '50%', 
  maxHeight: '500px',
  justifySelf: "center"
}));


function Home() {

  const navigate = useNavigate();

  const changeToSearch = () =>{
    navigate('/search')
  }

  const changeToFavorites = () =>{
    navigate('/favorites')
  }

  return (
    <Container container spacing={2}>
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
    </Container>
  )
}

export default Home