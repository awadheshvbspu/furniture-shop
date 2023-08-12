import React from 'react';
import { navigation } from '../data';

export default function NavMobile() {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item,i)=>{
          return(
            <li key={i}>
              <a href={item.href} className='text-xl font-medium capitalize'>
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
