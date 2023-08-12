
import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Navigation from '../../node_modules/swiper/modules/navigation.mjs';
import Autoplay from '../../node_modules/swiper/modules/autoplay.mjs';

import { testimonial } from '../data';

export default function TestimonialSlider() {
  
  return (
    <Swiper className='testimonialSlider ' navigation={true} modules={[Navigation,Autoplay]} autoplay={true}>
      {testimonial.persons.map((person,i)=>{
        const {avatar, name, occupation, message} = person;
        return(
          <SwiperSlide key={i} className='flex'>
          <div className='flex flex-col min-h-[250px]'>
            <div  className='flex items-center gap-x-5 mb-9'>
              <img src={avatar.type} alt='' />
              <div>
                <div className='text-xl font-semibold'>{name}</div>
                <div className='text-gray-500'>{occupation}</div>
              </div>
              <div className='text-xl max-w-[570px]'>{message}</div>
            </div>
          </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
