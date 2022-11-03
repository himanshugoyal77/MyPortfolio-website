import React from 'react'
import {RiFlutterFill, RiReactjsFill} from 'react-icons/ri'
import {FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'

const Skills = () => {
  return (
    <>
    <div className='flex flex-wrap justify-between py-4 dark:text-black'>
          <div className="skill-container p-2 w-64 ">
            <h2>C++</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-56"></div>
            </div>  
            <div className="skill-container p-2 w-64 ">
            <h2>Tailwind css</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-56"></div>
            </div>  
            <h2>Java</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-44"></div>
            </div>  
           
           
         </div>  
           
           
         </div>
         <div className="skill-container p-2 w-64 ">
            <h2>Flutter</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-56"></div>
            </div>    
            <h2>React.js</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-56"></div>
            </div>  
            <h2>Node.js</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-44"></div>
            </div>  
         </div>
         <div className="skill-container p-2 w-64 ">
            <h2>Tailwind css</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-56"></div>
            </div>  
            <h2>MongoDB</h2>
            <div className="w-full m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full w-48"></div>
            </div>  
           
           
         </div>
         
    </div>


    <div className="social flex flex-wrap justify-center items-center gap-10 mt-10 ">
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <RiFlutterFill className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <RiReactjsFill className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <FaNodeJs className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <DiMongodb className='h-10 w-10'/>
        </div>
        <div className="s-container1 button 
        bg-gray-50 h-24 p-4 w-24 shadow-lg flex rounded-full justify-center items-center dark:bg-slate-800">
            <TbBrandJavascript  className='h-10 w-10'/>
        </div>

    </div>
    </>
  )
}

export default Skills
