'use client'
import React from "react";

import { SectionWrapper } from "./hoc";
import { apps } from "../constants/constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Skills from "./Skills";

const Experience = () => {
  return (
    <>
    <div className='relative'>
     <motion.div variants={textVariant()}>
       <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Experience</p>
        <h2 className={'text-white font-black md:text-[60px] sm:text-[40px] xs:text-[40px] text-[20px]'}>Projects</h2>
        <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>& Collaborations.</h2>
      </motion.div>
      </div>
    <div className='flex relative z-10 flex-col flex-wrap justify-center gap-10'>
      <div className=" flex flex-wrap gap-10 justify-center">
      {apps.slice(0,7).map((app,index) => (
        <div className='w-28 h-28 mt-5' key={app.name}>
          <Skills name={app.name} icon={app.icon} index={index} />
        </div>
      ))}
      </div>
      <div className=" flex flex-wrap gap-10 justify-center">
      {apps.slice(7,12).map((app,index) => (
        <div className='w-28 h-28 mt-5' key={app.name}>
          <Skills name={app.name} icon={app.icon} index={index} />
        </div>
      ))}
      </div>
      <div className=" flex flex-wrap gap-10 justify-center">
      {apps.slice(12).map((app,index) => (
        <div className='w-24 h-24 mt-5' key={app.name}>
          <Skills name={app.name} icon={app.icon} index={index} />
        </div>
      ))}
      </div>
    </div>
    <div className=" w-full h-full  absolute top-10 flex flex-col  items-center  justify-center">
        <div className=" w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3]  absolute flex flex-col bg-cover items-center justify-center ">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay="autoplay"
            src="/cards-video.webm"
            // style={{ filter: "brightness(0.5) sepia(1) saturate(6) hue-rotate(180deg)" }}
          ></video>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
