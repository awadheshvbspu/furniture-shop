import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';

import Navigation from '../../node_modules/swiper/modules/navigation.mjs';
import Pagination from '../../node_modules/swiper/modules/pagination.mjs'
// import { Navigation, Pagination } from 'swiper';

import {products} from '../data'
import {HiPlus} from 'react-icons/hi'

export default function ProductSlider() {
  const {pages} =products
  return (
    <>
      <Swiper modules={[Pagination,Navigation]} pagination={{clickable:true}}  navigation={true} className='productSlider min-h-[1300px]'>
        {pages.map((page,i)=>{
            return(
              <SwiperSlide key={i}>
                <div className='grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-[30px]'>
                  {page.productList.map((product,i)=>{
                    const{image, name, price, oldPrice} = product;
                    return(
                      <div className='w-full max-w-[290px] h-[380px] text-left'>
                        <div className='border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-between mb-[15px] relative transition'>
                          <img src={image.type} alt='' />
                          <div className='absolute bottom-4 right-[22px] bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-300 transition'><HiPlus className='text-xl text-primary'/></div>
                        </div>
                        <div className='font-semibold lg:text-xl'>{name}</div>
                        <div className='flex items-center gap-x-3'>
                        <div>${price}</div>
                        <div className='tetx-[15px] text-gray line-through'>${oldPrice}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  )
}

