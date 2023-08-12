import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {newInStore, products} from '../data'

export default function NewItemsSlider() {
  return (
    <Swiper grabCursor={true} breakpoints={{
      320 :{
        slidesPerView:2,
        spaceBetween:18,
      },
      768 :{
        slidesPerView:3,
        spaceBetween:20,
      },
    }}>
      {newInStore.products.map((item,i)=>{
        return(
          <SwiperSlide key={i} className='max-w-[265px]'>
            <div className='relative'>
              <img src={item.image.type} alt='' />
              <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>{item.name}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
