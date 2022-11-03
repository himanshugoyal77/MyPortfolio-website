import React from 'react'
import {SlSocialGithub, SlSocialLinkedin, SlSocialTwitter} from 'react-icons/sl'
import {AiOutlineMail} from 'react-icons/ai'

const Social = () => {
  return (
    <div>
      <div className="social flex flex-wrap justify-center items-center gap-20 mt-16">
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <SlSocialGithub className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <SlSocialLinkedin className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <SlSocialTwitter className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <AiOutlineMail className='h-10 w-10'/>
        </div>
      </div>
    </div>
  )
}

export default Social
