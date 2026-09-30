import React from 'react'
import {motion } from "framer-motion"
import ProjectCard from './ProjectCard'
import {projects} from "../assets/assets"
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <>
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
        id="projects" >
     <div   className=' w-full  mx-0 mt-8  px-6'>
        <h1 className="text-4xl mb:text-6xl text-center  text-white font-extrabold mb-3">My {" "}
        <span className="text-blue-500">Projects</span></h1> 
          <p className="  width-full mx-auto  text  text-center md:text-lg  text-gray-400 mb-12">A selection of academic and personal projects built with the MERN
          stack and related technologies. </p>
       
           <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
               {
                projects.map((project,index)=>(
                  <ProjectCard  key={project.id} project={project}/>
                ))
               }

           </div>
        
    </div>

   </motion.div>
    </>
  )
}

export default Projects
