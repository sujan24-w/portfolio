import React from "react";
import { useState } from "react";
import { projects } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {

  const[expand,setExpand]=useState(false);
  const[noteExpand,setNoteExpand]=useState(false);
  return (
    <>
      <div className="bg-gray-900  border border-blue-500  rounded-2xl transition-transform duration-300 hover:translate-y-2 cursor-pointer p-6 ">
        <div className="px-2 mb-5  ">
          <h3 className="text-white text-2xl font-semibold mb-3  ">
            {project.name}
          </h3>
          <h4 className="text-lg font-semibold text-gray-200 mb-2">
            {project.tagline}
          </h4>
          <p className="text-gray-400 font-semibold w-full mb-4 px-2" >
            {project.description}
          </p>
        </div>
        <div className="flex  flex-wrap gap-4 px-3 ">
          {project.technologies.map((tool) => (
            <span
              className="  border     border-gray-600 px-3 py-2 rounded-xl"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
       
        <button
        onClick={()=> setExpand(!expand)}
        className={` text-center flex items-center gap-2     mt-5 ml-4 font-medium ${expand && "text-gray-200"} `}
         type="button"  >
          {expand ? "Hide Details" : "View Details" } 
        <FaChevronDown  size={18} className={`   treansition-transform ${expand && "rotate-180  "}  `}/>
        </button>
             {expand &&
              <div className="mb-4 border-t border-gray-100 mt-3 ml-3 pt-4">
          {project.contributions && (
            <>
              <h4 className="text-xs font-semibold text-gray-100 uppercase tracking-wide mb-2">
                What I Worked On
              </h4>
              <ul className="space-y-1.5 mb-4">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-200"
                  >
                    <FaCheck
                      size={15}
                      className="mt-0.5 flex shrink-0 text-accent-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </> 
          )}
          {project.features && (
            <>
              <h4 className="text-xs font-semibold text-gray-100 uppercase tracking-wide mb-2">
                Features
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-200"
                  >
                    <FaCheck
                      size={15}
                      className="mt-0.5 shrink-0 text-accent-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
}
 <div className="flex gap-3 mt-auto pt-2">
  {project.demoUrl  && 
      <div className="flex space-x-5 px-3 mt-5 mb-3">
        {
            project.note  ? 
             (  
          <div >
        <button className="flex items-center gap-2  border border-red-400 bg-purple-200 text-red-600 px-4 py-2 rounded-xl " onClick={()=>{setNoteExpand(!noteExpand)}} type="button">
          { noteExpand ? "Hide Note" :"Show Note"}
          < FaChevronDown  className={`transition-transform ${ noteExpand && "rotate-180"}  `} />
        </button>
         
          </div>
        )
       
        :
         (  <a
          href={project.demoUrl}
          target="_blank"
          className="px-8 py-3  flex  items-center gap-3  bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
          >
            Demo 
             <FaExternalLinkAlt size={15} />

          </a>
        )
       
      } 
      </div>

  
  }
 </div>
  {
            noteExpand && 
          


            <div className="mt-10 w-full  flex items-center  justify-center flex-col  text-center border border-red-500 px-4 py-3  rounded-2xl  bg-[#1a1a1a]">
             <p className="text-center mb-3 font-semibold text-gray-300">{project.note.note1}</p>
             <p className="text-center mb-3 font-semibold text-gray-300 ">{project.note.note2}</p>
             <div className="flex  gap-5 mb-4">

             <a
          href={project.demoUrl}
          target="_blank"
          className="px-8 py-3  flex  items-center gap-3  bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
          >
            Demo 
             <FaExternalLinkAlt size={15} />

          </a>
            {
              project.code &&
              <div className='text-center  ' >
                <a href={project.code} 
                target='_blank'
                className=' inline-flex items-center gap-2 border border-purple-500 bg-[#262424] hover:bg-[#1a1a1a] font-semibold px-4 py-3 rounded-2xl transition duration-200'>
                     <span className=''>View code </span>
                     <FaArrowRight className='text-white' />
                     </a>
           </div>}
                  </div>

            </div>



       
          }
 

      </div>
    </>
  );
};

export default ProjectCard;
