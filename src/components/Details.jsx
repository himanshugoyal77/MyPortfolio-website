import React from 'react'
import {AiOutlineDownload} from 'react-icons/ai'

const Details = () => {
  return (
    <div id=''>
      <div className="details px-3 flex flex-wrap gap-12 justify-center py-8 md:py-1">
       
             <div className="button text-center justify-center items-center flex w-32 h-32 p-8 bg-red-500 text-white rounded-full shadow-lg dark:bg-slate-800">
                <div className="relative">
                <h1 className='text-3xl p-2'>20</h1>
                <p>Projects Done</p>
          
                </div>
             </div>

             <div className="button text-center justify-center items-center flex w-32 h-32 p-8 bg-red-500 text-white rounded-full shadow-lg dark:bg-slate-800">
                <div className="relative">
                <h1 className='text-3xl p-2'>45</h1>
                <p>Happy Users</p>
    

                </div>
             </div>

             <div className="button text-center justify-center items-center flex w-32 h-32 p-8 bg-red-500 text-white rounded-full shadow-lg dark:bg-slate-800">
                <div className="relative">
                <h1 className='text-3xl p-2'>10</h1>
                <p>Awards</p>

                </div>
             </div>
      </div>
    </div>
  )
}

export default Details
