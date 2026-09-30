import React from 'react'
import {motion} from "framer-motion"
import { skills } from '../assets/assets'

const Skills = () => {
  return (
   <motion.div  className="py-10 bg-[#1a1a1a] "
    initial={{
        opacity:0,
        y:50,
       }}  
       whileInView={{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            ease:'easeOut',
            viewport:{once:false, amount:0.2},
        }}} 
        id="skills" >
    <div   className=' scroll-p-20  w-full  mx-0 mt-8  px-6'>
        <h1 className="text-4xl mb:text-6xl text-center  text-white font-extrabold mb-3">My {" "}
        <span className="text-blue-500">Skills</span></h1> 
          <p className="  width-full mx-auto  text  text-center md:text-lg  text-gray-400 mb-12">Technologies i  work with </p>
       
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-5xl mx-auto'>
               {
                skills.map((skill,index)=>(
                    <div key={index} className="bg-gray-900 rounded-2xl transition-transform duration-300 hover:translate-y-2 cursor-pointer p-5 ">
                      

                        <div className=' flex  items-center gap-5 mb-5  '>
                            <skill.icon className=' w-12 h-12 text-green-500 ' />
                            <h3 className='text-white text-2xl font-semibold  '>{skill.title}</h3>
                        </div>
                        <p className='text-gray-400 font-semibold w-full mb-4'>{skill.description}</p>
                       <div className="flex  flex-wrap gap-4  ">
                         {
                            skill.tags.map((tag)=>(
                                <span className='  border     border-gray-600 px-3 py-2 rounded-xl'
                                 key={tag}>{tag}</span>
                           
                            ))
                        }
                       </div>

                    


                    </div>
                ))
               }

           </div>
    </div>

   </motion.div>
  )
}

export default Skills
