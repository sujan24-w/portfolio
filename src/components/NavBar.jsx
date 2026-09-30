import React from 'react'
import {FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'
const NavBar = () => {
const navItems = [
  { name: "Home", target: "#home" },
  { name: "About", target: "#about" },
  { name: "Skills", target: "#skills" },
  { name: "Projects", target: "#projects" },
  { name: "Education", target: "#education" },
  { name: "Contact", target: "#contact" },
];
 const [showMenu , setShoeMenu] = useState(false)
  return (
    <>
    <nav   className=" fixed  z-50 h-14 w-full  px-3 bg-[#201e1ee9] text-white py-3 ">
     <div className="container flex justify-between items-center mx-auto  ">
        <div>
            <a href="#" className="text-2xl  font-bold text-white mb-0 pb-0 relative lg:ml-3 ">
              Sujan {" "}
               <span className="text-blue-500">Panthi </span>
               <div className="w-2 h-2 rounded-full bg-blue-500 absolute lg:ml-3">
                     
               </div>
            </a>
     </div>

     <div className=" hidden md:flex  space-x-10 lg:pr-10  ">
            {navItems.map((items,index)=>(
              
                 <a key={index} href={items.target} className=' group relative no-underline text-white transition duration-300 hover:text-blue-500  inline-block '> {items.name} 
            <span className="absolute bottom-0 left-0  h-0.5  w-0 bg-blue-500 transition-all  duration-300  group-hover:w-full"></span>
                
             </a>        
          ))
        }
     </div>

      <div className="md:hidden  ">
      { showMenu ? 
      
    
      <FaXmark  onClick={()=>setShoeMenu(!showMenu)}
       className="text-white text-2xl cursor-pointer" /> 
      :
        <FaBars  onClick={()=>setShoeMenu(!showMenu)}
      className="text-white text-2xl cursor-pointer" />
      }
      </div>
      

     
      
    

    

     
     
     </div>
     {/* mobile menu */}
     {
        showMenu && 
            <div className="md:hidden  h-screen  rounded-lg   flex flex-col  space-y-4 mt-3  px-5 py-3 bg-[#201e1ee9] text-white  ">
                  {navItems.map((items,index)=>(
              
                 <a key={items} href={items.target}  onClick={()=>setShoeMenu(!showMenu)}
                  className=' group relative no-underline text-white transition duration-300 hover:text-blue-500  inline-block '> {items.name} 
            <span className="absolute bottom-0 left-0  h-0.5  w-0 bg-blue-500 transition-all  duration-300  group-hover:w-14"></span>
                
             </a>        
          ))
        }
            </div>
     }
     

</nav>
    </>
  )
}

export default NavBar
