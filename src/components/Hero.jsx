import React from 'react'
import {AiOutlineDownload} from 'react-icons/ai'
import myImage from '../assets/img/about/my_img.png'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex justify-between flex-3'>
      <div className="content px-6 py-20 flex-3">
        <div className="salute text-red-400">Hola. <span className="ml-3"/>Hello.  <span className="ml-3"/>Pradon.</div>
        <div className="content-heading py-4">
            <motion.div 
              initial={{
                 x: -60,
                 opacity: 0.5
              }}
              animate={{
                x:0
                ,opacity: 1
              }}
              transition={{
                duration: 1.54
              }}
            className="heading font-bold text-6xl py-1 dark:text-white">I am Himanshu</motion.div>  
            <motion.div 
             initial={{
              x: -60,
              opacity: 0.5
           }}
           animate={{
             x:0
             ,opacity: 1
           }}
           transition={{
             duration: 1.54
           }}
            className="heading font-bold text-6xl py-1 dark:text-white">Web & App</motion.div> 
            <motion.div
             initial={{
              x: -60,
              opacity: 0.5
           }}
           animate={{
             x:0
             ,opacity: 1
           }}
           transition={{
             duration: 1.54
           }}
            className="heading font-bold text-6xl py-1 dark:text-white">Developer</motion.div>      
           
            <motion.p 
             initial={{
              y: 60,
              opacity: 0.5
           }}
           animate={{
             y:0
             ,opacity: 1
           }}
           transition={{
             duration: 1.54
           }}
            className='text-gray-500 px-2 py-6 ml-8 dark:text-gray-50'>solution-driven Web Developer, finding solutions and determining customer <br />satisfaction. 
designed & developed web applictions<br /> across multiple platforms</motion.p>
         
        </div>  


        
        <div className="buttons flex gap-5 ml-8 p-2">
        <motion.button
         initial={{
          y: 60,
          opacity: 0.5
       }}
       animate={{
         y:0
         ,opacity: 1
       }}
       transition={{
         duration: 1.54
       }}
        className='bg-red-500 h-12 p-2 w-32 focus:outline-none text-white rounded-sm relative'>
            <div className="absolute -top-3 -right-2 text-black justify-center content-center items-center border-stone-600 bg-white shadow-2xl rounded-full w-6 h-6 flex"><AiOutlineDownload/> </div>
            Download CV
            </motion.button>
        <motion.button
         initial={{
          y: 60,
          opacity: 0.5
       }}
       animate={{
         y:0
         ,opacity: 1
       }}
       transition={{
         duration: 1.54
       }}
        className='bg-green-500 h-12 w-32 p-2 text-white rounded-sm focus:outline-none'>Know More</motion.button>
        </div>
       
      </div>

      <div className="container py-20 flex-1 hidden sm:inline-block px-3 lg:px0">
        <motion.div 
         initial={{
          x: 60,
         
          opacity: 0.2
       }}
       animate={{
         x:0,
         opacity: 1
       }}
       transition={{
         duration: 1.54
       }}
        className="wrapper1 h-80 w-80 bg-red-500 rounded-full" >
            <motion.img 
          //    initial={{
          //     x: 60,
              
          //  }}
          //  animate={{
          //    x:0
          //  }}
          //  transition={{
          //    duration: 2
          //  }}
            src={myImage} alt="" />
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
