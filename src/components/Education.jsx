import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

const coursework = [
  'Web Programming',
  'Database Management Systems',
  'Data Structures & Algorithms',
  'Software Engineering',
  'Object-Oriented Programming',
  'Computer Networks',
];

export default function Education() {
  return (
     <motion.div 
     initial={{
        opacity:0,
        y:50,
       }}  
       whileInView={{
        opacity:1,
        y:0}}

        transition={{
            duration:1,
            ease:'easeOut',
        }} 
        viewport={{once:false, amount:0.3}}
        id="projects"
        className='' >

        
    <section id="education" className="scroll-mt-20 border-b border-gray-100 bg-[#2d2d2d] ">
      <div className="container-page py-10 sm:py-10">
          <h1 className="text-4xl mb:text-6xl text-center  text-white font-extrabold mb-8">My {" "}
        <span className="text-blue-500">Education</span></h1> 

        <div className="border border-gray-200 bg-gray-900  text-white rounded-lg p-6 w-[96%] hover: mx-auto transition-transform duration-300 hover:translate-y-2 cursor-pointer">
          <div className="flex flex-col items-start gap-3 mb-4">
           <div className='flex  gap-3'>
             <FaBookOpen
              size={22}
              className="mt-0.5 lg:mt-2 shrink-0"
            />

              <h3 className="text-lg lg:text-3xl   font-semibold ">
                Bachelor of Science in Computer Science and Information
                Technology (BSc CSIT)
              </h3>
           </div>

            <div >
              <p className="text-sm text-gray-200 lg:text-2xl lg:mb-2 mt-1">
                Tribhuvan University — Bhairahawa Multiple Campus
              </p>

              <p className="text-sm lg:text-xl text-gray-300 mt-1">
                Currently pursuing
              </p>
            </div>
          </div>

          <div className="border-t border-green-200 pt-4">
            <h4 className=" lg:mb-4   text-xs font-semibold text-gray-300 uppercase tracking-wide mb-3">
              Relevant Coursework
            </h4>

            <ul className=" grid gap-2 sm:grid-cols-2">
              {coursework.map((course) => (
                <li
                  key={course}
                  className="lg:mb-2 text-sm text-gray-300 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}