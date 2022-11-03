import React from 'react'
import p1 from '../assets/img/gallery/1.png'
import p2 from '../assets/img/gallery/2.png'
import p3 from '../assets/img/gallery/3.png'
import p4 from '../assets/img/gallery/4.png'


const Projects = () => {
  return (
    <div>
      <div className="projects my-4 dark:text-white">
        <div className="p-wrapper">
            <div className=" content-wrapper px-2 flex justify-center items-center py-4  ">
            <div className="h-80 w-2/3 p-1">
             <div className="object-cover">
                <img src={p2} alt="" className='object-cover rounded-md' />
             </div>
            </div>
            <div className="h-80 flex-col px-6 pb-4">
                <div className='heading text-3xl px-8 text-red-500'>Blog App</div>
                <div className='text-gray-600 px-8 py-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita provident rem deserunt id ducimus facere consectetur molestiae debitis velit corrupti.
                    
                </div>
                <h2 className='px-8 text-lg'>Techstack</h2>
                <div className="px-20 py-1">
               
                    <li>FLutter</li>
                    <li>Firebase</li>
                    <li>Provider</li>
                    <li>MySql</li>
              
                </div>
            </div>
            </div>
            <hr />

            <div className="content-wrapper px-2 flex justify-center items-center py-4 ">
            <div className="h-80 w-2/3 p-1">
             <div className="my-2">
                <img src="https://www.classicinformatics.com/hubfs/agency.png" alt="" className='object-cover  rounded-md' />
             </div>
            </div>
            <div className="h-80 flex-col px-6 pb-4">
                <div className='heading text-3xl px-8 text-red-500'>Booking Website</div>
                <div className='text-gray-600 px-8 py-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis reprehenderit molestiae quia neque quam distinctio, illo dolorum delectus ipsam!
                    
                </div>
                <h2 className='px-8 text-lg'>Techstack</h2>
                <div className="px-20 py-1">
               
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
              
                </div>
            </div>
            </div>
            <hr />

            

            <div className="content-wrapper px-2 flex justify-center items-center py-4 ">
            <div className="h-80 w-2/3 p-1">
             <div className="my-2 object-cover">
                <img src="https://codecanyon.img.customer.envatousercontent.com/files/405791834/1.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=37840eac53d04960dbdcb72f3e0e76ac" alt="" className='object-contain rounded-md' />
             </div>
            </div>
            <div className="h-80 flex-col px-6 pb-4">
                <div className='heading text-3xl px-8 text-red-500'>Ecommerce App</div>
                <div className='text-gray-600 px-8 py-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odit voluptas, sunt impedit fuga, dolor accusamus accusantium debitis in ea dolores, minus doloremque pariatur quo.
                    
                </div>
                <h2 className='px-8 text-lg'>Techstack</h2>
                <div className="px-20 py-1">
               
                    <li>Flutter</li>
                    <li>Firebase</li>
                    <li>Getx</li>
              
                </div>
            </div>
            </div>
            <hr />

            
        </div>
      </div>
    </div>
  )
}

export default Projects
