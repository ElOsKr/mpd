import React, { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { EffectFade, Autoplay } from 'swiper'
import '../styles/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { carouselCall } from '../features/carousel/carouselSlice'

const CarouselBox = styled(Box)(() => ({
    width: '70%',
    height: '100%',
    margin: '0 auto',
}));

function Carousel() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(carouselCall())
    },[])

    let photos = useSelector(state => state.carouselPhotos.photos)
    
  return (
    <CarouselBox>
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect
            autoplay={{delay: 4000}}
            slidesPerView={1}
            loop
            className='swiper'
        >
            {photos.map((photo) => 
                <SwiperSlide className='swiper__img' key={photo.id}>
                    <img src={`${photo.urls.regular}`} alt={`${photo.alt_description}`}/>
                </SwiperSlide>
            )}
        </Swiper>
    </CarouselBox>
  )
}

export default Carousel