import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 3.5,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="flex  text-center  justify-around  min-h-screen items-center pt-10 pb-10 bg-linear-to-br from-[#292828e9] to-[#201c1ce9]   "
    >
      <div className="container flex  md:ml-10 w-full flex-col items-start text-white space-y-5 max-[590px]:items-center   min-[600px]:flex-row   min-[600px]:space-y-0  min-[600px]:space-x-3 max-[5900px]:mt-8  ">
        <div className=" lg:w-[80%] md:w-full mb-10 md:mb-0  flex flex-col items-start  ml-5 ">
          <h1 className="md:text-start text-4xl text-start md:text-5xl  text-white font-extrabold mb-3 max-[370px]:text-2xl">
            Hi, I'm <span className="text-blue-500">Sujan Panthi</span>
          </h1>
          <h2 className="tipewriter text-start text-2xl md:text-3xl text-white mb-2.5 font-semibold max-[370px]:text-xl">
            Full Stack Developer
          </h2>
          <p className=" w-80 flex  flex-wrap text-start md:text-lg max-[370px]:text-wrap  ">
            {" "}
           BSc CSIT student focused on building practical full-stack web applications using React, Node.js, Express.js, and MongoDB.{" "}
          </p>

          <div className="flex space-x-5 mt-5  max-[370px]:flex-col  max-[370px]:space-x-0 max-[370px]:space-y-3">
            <a
              href="#projects"
              className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-200"
            >
              {" "}
              View Works
            </a>
            <a
              href="#contact"
              className="px-8 py-3  bg-[#201c1cb6] border  border-purple-700 rounded-md  font-medium hover:bg-purple-600/20 transition duration-200"
            >
              {" "}
              Contact Me
            </a>
          </div>
        </div>
     
      {/* float  riht  image */}
      <div className="  min[600px]:w-1/2 flex   justify-center">
        <div className="lg:mr-20 relative w-60 h-60 md:w-80  md:h-80 ">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 to-purple-500 animate-pulse-slow opacity-60">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className=" relative rounded-full  w-60 h-60 md:w-80  md:h-80 object-cover z-10 animation-float "
              src={assets.HeroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Hero;
