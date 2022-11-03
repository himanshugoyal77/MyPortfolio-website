import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import Details from '../components/Details'
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md'
import { useState } from 'react'


const Banner = (prop) => {
   
  const shoot = () => {
    console.log(prop);
    prop.setdark(!prop.dark);
  }
  
  return (
   

   <div className="Banner flex justify-between items-center p-4  hover:pb-5 sticky z-50 top-0  md:shadow-2xl dark:bg-slate-800">
    <ul className='flex gap-12 '>
      <li className='cursor-pointer px-3 rounded-sm mr-2  dark:text-white'><a href='#Home'> Home</a></li>
      <li className='cursor-pointer px-3 rounded-sm mr-2  dark:text-white'><a href='#About'>About</a></li>
      <li className='cursor-pointer px-3 rounded-sm mr-2  dark:text-white'><a href='#Services'>Service</a></li>
      <li className='cursor-pointer px-3 rounded-sm mr-2 hidden sm:inline-block  dark:text-white'><a href='#Contact'>Contact</a></li>
    </ul>
     <div 
     className="darkbtn cursor-pointer px-3 rounded-sm mr-2 w-12 dark:text-white">
      <MdDarkMode onClick={shoot}/>
     </div>
   </div>
  
  )
}

export default Banner
