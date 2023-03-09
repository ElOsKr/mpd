import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { EffectFade, Autoplay } from 'swiper'
import '../styles/index.css'
import { useSelector } from 'react-redux'

const CarouselBox = styled(Box)(() => ({
    width: '70%',
    height: '100%',
    margin: '0 auto',
}));

function Carousel() {

    let photos =  useSelector(state => state.carouselPhotos.photos)

  return (
    <CarouselBox>
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect
            slidesPerView={1}
            loop
            className='swiper'
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
        >
            {photos.map((photo) =>  
                <SwiperSlide className='swiper__img' key={photo.id}>
                    <img src={`${photo.urls.regular}`} alt={`${photo.id}`}/>
                </SwiperSlide>
            )}
        </Swiper>
    </CarouselBox>
  )
}

export default Carousel