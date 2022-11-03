import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Social from '../components/Social'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

import {motion} from 'framer-motion'
import { useState } from 'react'


const Home = (prop) => {
  const [dark, setdark] = useState(false);

  return (
<div className={dark ? "dark" : ""}>
  
      <div id='Home' className="flex justify-center dark:bg-slate-800 ">
      <div className="wrapper dark:text-white">
      <Banner dark={dark} setdark={setdark}/>
      <Hero/>
      <hr />
      <div id='About' className="about rounded-md p-16 my-14 shadow-xl">
      <motion.h1 
         
         className='heading font-bold text-4xl text-center text-gray-700'>About</motion.h1>
      <Social/>
      <Details/>
      </div>
      <hr  className='ml-auto mr-0'/>
      <div id='Services' className="skills rounded-md p-16 my-14 shadow-xl">
      <h1 className='heading font-bold text-4xl py-1 text-center dark:text-black'>Skills</h1>
      <Skills/>
      </div>
      <hr />
      <div className="rounded-md p-16">
      <h1 className='heading font-bold text-4xl pb-6 text-center'>Projects</h1>
      <Projects/>
      </div>
      <div className="skills rounded-md shadow-xl pt-12 p-14 md:pt-12 hover:scale-105 hover:shadow-2xl">
      <Contact/>
      </div>
      <Footer></Footer>
      </div>
    </div>
</div>
  )
}

export default Home
