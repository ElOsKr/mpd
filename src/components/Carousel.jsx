import React, { useState } from 'react'
import { Box, styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { EffectFade, Autoplay } from 'swiper'
import '../styles/index.css'

const CarouselBox = styled(Box)(() => ({
    width: '70%',
    height: '100%',
    margin: '0 auto',
}));

function Carousel() {

    const [photos] = useState([
        "https://images.unsplash.com/photo-1664825557836-2e1f6e72ce99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        "https://images.unsplash.com/photo-1664737426331-a1cde6c831d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80",
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80",
        "https://images.unsplash.com/photo-1563889958749-625da26ed355?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1634225309345-b6b49528bcf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ]);

    
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
                <SwiperSlide className='swiper__img' key={photo}>
                    <img src={`${photo}`} alt={`${photo}`}/>
                </SwiperSlide>
            )}
        </Swiper>
    </CarouselBox>
  )
}

export default Carousel