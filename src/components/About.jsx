import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
const About = () => {
  return (
    <div className=" scroll-mt-20   mx-0 mt-8  px-6" id="about">
      <h1 className="text-4xl mb:text-6xl text-center  text-white font-extrabold mb-3">
        About <span className="text-blue-500">Me</span>
      </h1>
      <p className=" width-full mx-auto  text  text-center md:text-lg  text-gray-400 mb-12">
        Developer focused on building practical full-stack web applications.{" "}
      </p>

      {/* float  left  image */}
      <div className="  md:w-full w-full  h-auto  flex   flex-col md:flex-row  items-center  gap-10 ">
        <div className="md:w-1/2  w-90 max-[370px]:w-60    flex justify-center  rounded-xl  overflow-hidden  ">
          <motion.img
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
                viewport: { once: false, amount: 0.2 },
              },
            }}
            className="  md:h-200 w-full h-full  object-cover rounded-2xl  "
            src={assets.HeroImage}
            alt="sujan panthi"
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
              viewport: { once: false, amount: 0.2 },
            },
          }}
          className=" md:w-1/2 w-full  "
        >
          <div className="rounded-2xl p-8 w-full  ">
            <h2 className="text-2xl mb:text-4xl font-semibold text-gray-200 mb-3">
              My Journey
            </h2>
            <p className=" w-full  text-gray-300 mb-3   ">
              BSc CSIT student focused on full-stack web development with the
              MERN stack. Built REST APIs, database-driven applications, JWT
              authentication systems, and React interfaces through academic and
              personal projects{" "}
            </p>
            <p className=" w-full  text-gray-300 mb-3    ">
              {" "}
              Hands-on experience with MongoDB, Express.js, Node.js,
              authentication, and API integration. Eager to learn new
              technologies, adapt to unfamiliar tools, and grow through
              real-world development experience.
            </p>
            <p className=" w-full  text-gray-300 mb-3    ">
              Currently seeking a full-stack/MERN development internship where I
              can contribute to a development team while continuing to
              strengthen my skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6  w-full ">
              {aboutInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-6 transition-transform duration-300 hover:translate-y-2 cursor-pointer"
                >
                  <div className="text-blue text-4xl ">
                    <item.icon />
                  </div>
                  <h3 className="text-blue-500 font-semibold mb-3 ">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
