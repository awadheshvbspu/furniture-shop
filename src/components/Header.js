import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import {CgMenuRight, CgClose} from 'react-icons/cg';
import {navigation} from '../data';
import NavMobile from './NavMobile';

export default function Header() {
  const [bg,setBg] = useState(false);
  const  [mobileNav,setMobileNav] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () =>{
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <div className={`${bg ? 'bg-primary py-4 lg:py-6':'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={logo} alt='' className='h-6 lg:h-8' /> 
        </a>
        {/* menu icon */}
  <div onClick={()=>setMobileNav(!mobileNav)} className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
  {mobileNav ? <CgClose/>:<CgMenuRight/>}
  </div>
      
      {/* nav  */}
      <nav className='hidden md:flex'>
        <ul className='md:flex md:gap-x-12'>
          {navigation.map((item,i)=>{
            return(
              <li key={i}>
                <a href={item.href} className='capitalize text-lg text-white hover:border-b transition-all'>{item.name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
      </div>
      <div className={`${mobileNav ? 'left-0': '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen`}>
        <NavMobile/>
      </div>
      </div>
    </div>
  )
}

