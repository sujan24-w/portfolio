import React from 'react'
import { FaAnglesUp } from "react-icons/fa6";
import { useState,useEffect, useRef } from 'react';
const GoTop = () => { 

    const [show,setShow]= useState(false);
 
  const timerRef=useRef(null);


    
   


    useEffect(()=>{
            const  handleScroll= ()=>{
      

        if(window.scrollY >500){
              setShow(true);
              clearTimeout(timerRef.current);
              timerRef.current= setTimeout(()=>{
                setShow(false)
              },6000);
        }else{
            setShow(false);
            clearTimeout(timerRef.current)

        }
        
    }
    window.addEventListener("scroll",handleScroll)

    return ()=>{
        window.removeEventListener("scroll",handleScroll)
    }
    },[]);

const handleGoToTop = ()=>{
   
    
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
    


}

  return (
    

    <button onClick={()=>handleGoToTop()} className={` ${!show && "hidden"} fixed bottom-10 right-2 z-100  h-12 w-12 lg:h-14 rounded-full flex items-center justify-center lg:w-14 bg-blue-500`}>
       <FaAnglesUp size={20}/> 
      
    </button>
  
  )
}

export default GoTop;
