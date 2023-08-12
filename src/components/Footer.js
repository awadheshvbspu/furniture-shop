import React from 'react';
import logo from '../assets/img/logo.svg';
import { footer } from '../data';

export default function Footer() {
  return (
    <footer className='section bg-primary text-white'>
      <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
            <a href='#' className='mb-6 lg:mb-0'>
              <img src={logo} alt='0' />
            </a>
            {/* social */}
            <div className='flex gap-x-4'>
              {footer.social.map((item,i)=>{
                return(
                  <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition'>
                    <a href='#'>{item.icon}</a>
                  </div>
                )
              })}
            </div>
          </div>
          {/* copyright text */}
          <p className='text-center'>
            &copy; FurniShop 2023 - All Rights Reserved.
          </p>
      </div>
    </footer>
  )
}
