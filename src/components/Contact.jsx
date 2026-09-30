import { useState } from 'react';
import  { FormEvent } from 'react';
import {
  FaEnvelope,
 
  FaPhone,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import { contactInfo } from '../assets/assets';
import { FaLocationDot} from "react-icons/fa6"

const Contact= ()=> {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-gray-100 bg-[#1a1a1a] text-white m-auto w-[92%]">
      <div className="container-page py-16 sm:py-20">
        <h2 className="text-2xl text-center  sm:text-3xl font-bold mb-4">
          Let's   <span className=' text-blue-500'>Connect</span> 
        </h2>
        <p className="text-white mb-10 max-w-2xl">
          I'm currently looking for a full-stack/MERN development internship
          where I can contribute to real-world projects and continue developing
          my skills.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-blue-300">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3  hover:text-blue-100 transition-colors w-auto"
            >
              <FaEnvelope size={18} className="text-white  flex shrink-0" />
              <span className="text-sm ">{contactInfo.email}</span>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3  hover:text-blue-100 transition-colors"
            >
              <FaPhone size={18} className=" text-white" />
              <span className="text-sm">{contactInfo.phone}</span>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-blue-300 hover:text-blue-100 transition-colors"
            >
              <FaGithub size={18} className="text-white " />
              <span className="text-sm">github.com/sujan24-w</span>
            </a>
            
          </div>

          <div>
            {submitted ? (
              <div className="border-2  border-white rounded-lg p-6 bg-blue-200/90 flex items-start gap-3">
                <FaCheckCircle
                  size={18}
                  className="text-blue-400 mt-0.5 0"
                />

                <div>
                  <p className="text-sm font-semibold text-black ">
                    Thanks for reaching out.
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    This form is a demo and doesn't send messages yet. Please
                    email me directly at {contactInfo.email}.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className=" rounded-lg p-6 space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                     Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#2d2d2d] px-3 py-2 text-sm rounded-lg  focus:outline-none focus:ring-0 "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm  font-medium text-gray-300 mb-1.5"
                  >
                    Email Address 
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#2d2d2d] px-3 py-2 text-sm  rounded-lg focus:outline-none focus:ring-0 "
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block  text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-[#2d2d2d] px-3 py-2 text-sm rounded-lg focus focus:outline-none focus:ring-0  resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary rounded-md w-full justify-center bg-blue-500 flex items-center gap-2 py-3 "
                >
                  <FaPaperPlane size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className='mt-6 px-5 flex  flex-col space-y-3 '>
             <span
              className="flex items-center gap-4 text-white"
              >
              <FaLocationDot size={23} className="text-white  " />
             <span className='text-lg  font-semibold'>Location</span>
                           
             </span>
              <span className="text-sm text-gray-400 pl-10 ">Butwal-4, Rupendehi Nepal </span>
           </div>


           <div className="mt-6 px-5 flex  flex-col space-y-3">
            <h3 className='font-bold mt-3 text-xl px-2'>Follow Me </h3>
          <div className='flex  items-center  gap-4 px-3 pt-3'>
           <div className='h-14 w-14 rounded-full  hover:bg-blue-400 transition-colors flex items-center justify-center  bg-[#2d2d2d]'>
             <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-full items-center gap-3  transition-colors"
            >
              <FaGithub size={20} className="text-white " />
             
            </a>
           </div>
           
           <div className='h-14 w-14 rounded-full  hover:bg-blue-400 transition-colors flex items-center justify-center  bg-[#2d2d2d]'>
             <a
              href={`mailto:${contactInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex rounded-full items-center gap-3  transition-colors"
            >
            <FaEnvelope size={20} className="text-white " />
             
            </a>
           </div>
           
                  
                  

             </div>
           </div>
     </div>
    </section>
  );
}
export default Contact;