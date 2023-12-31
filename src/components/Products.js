import React from 'react';
import {products} from '../data'
import ProductSlider from './ProductSlider';


export default function Products() {
  const {title,subtitle} = products;
  return (
    <div className='section text-center'>
    <div className='container mx-auto'>
    <div>
      <h2 className='title'>{title}</h2>
      <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
    </div>
    <ProductSlider/>
    </div>
      
    </div>
  )
}

